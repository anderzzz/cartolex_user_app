"""Workflow routes using shared constants"""

import json
from flask import Blueprint, render_template, request, current_app, redirect, url_for, make_response
from cartolex_endpoint_server.constants import ErrorCodes, JobStatuses
from cartolex_user_app.utils.flash_helpers import flash

bp = Blueprint('workflows', __name__)


def _infer_and_parse_value(value_str: str):
    """
    Intelligently parse form values to preserve JSON types.

    Attempts to parse strings that look like JSON arrays/objects back to their
    original types. Falls back to string for invalid JSON or simple strings.

    Args:
        value_str: String value from form data

    Returns:
        Parsed value (list, dict, or original string)
    """
    if not value_str or not isinstance(value_str, str):
        return value_str

    # Remove leading/trailing whitespace
    cleaned = value_str.strip()

    # Check if it looks like JSON (starts with [ or {)
    if cleaned.startswith(('[', '{')):
        try:
            parsed = json.loads(cleaned)
            current_app.logger.debug(f"Successfully parsed JSON value: {cleaned} -> {type(parsed)}")
            return parsed
        except json.JSONDecodeError:
            current_app.logger.debug(f"Failed to parse as JSON, keeping as string: {cleaned}")
            return value_str

    # For simple strings, return as-is
    return value_str


def _return_inline_error(error_msg: str, target_id: str):
    """
    Return an inline error that targets a specific element within a form.

    Uses HTMX's HX-Retarget response header to dynamically change where the
    error is displayed, preventing the error from replacing the entire container.

    Args:
        error_msg: The error message to display
        target_id: The element ID to retarget (e.g., 'clone-error-workflow-name')

    Returns:
        Flask Response with HX-Retarget header set
    """
    response = make_response(
        render_template('partials/clone_error_inline.html', error=error_msg)
    )
    response.headers['HX-Retarget'] = f'#{target_id}'
    return response


@bp.route('/')
def list_workflows():
    """List all workflows with metadata"""
    api = current_app.api_client
    response = api.get_workflows_with_metadata()

    if not response.success:
        # Use shared error codes for consistent handling
        if response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            flash("Configuration system unavailable. Please try again later.", 'error')
        else:
            flash(f"Error loading workflows: {response.error}", 'error')
        return render_template('workflows/list.html', workflows=[])

    workflows = response.data.get('workflows', [])
    return render_template('workflows/list.html', workflows=workflows)


@bp.route('/<workflow_name>/execute', methods=['POST'])
def execute_workflow(workflow_name):
    """Execute workflow (HTMX endpoint)"""
    api = current_app.api_client
    
    # Basic validation
    if not workflow_name or not workflow_name.strip():
        return render_template('partials/execution_error.html',
                               error="Invalid workflow name provided")
    
    try:
        # Extract form data
        parameters = {}
        for key, value in request.form.items():
            if key.startswith('param_'):
                param_name = key.replace('param_', '')
                if param_name and value.strip():  # Only add non-empty parameters
                    parameters[param_name] = value.strip()

        # Extract and parse tags (comma-separated)
        tags = []
        tags_input = request.form.get('tags', '').strip()
        if tags_input:
            # Split by comma and clean up each tag
            tags = [tag.strip() for tag in tags_input.split(',') if tag.strip()]
            current_app.logger.info(f"Workflow tags: {tags}")

        current_app.logger.info(f"Executing workflow '{workflow_name}' with {len(parameters)} parameters")

        response = api.execute_workflow(workflow_name, parameters, tags=tags if tags else None)

        if response.success:
            job_id = response.data.get('job_id')
            current_app.logger.info(f"Workflow '{workflow_name}' launched successfully with job ID: {job_id}")
            return render_template('partials/job_submitted.html',
                                   job_id=job_id, workflow_name=workflow_name)
        else:
            current_app.logger.warning(f"Workflow execution failed: {response.error} (code: {response.error_code})")
            
            # Handle specific error codes using shared constants
            if response.error_code == ErrorCodes.WORKFLOW_NOT_FOUND:
                return render_template('partials/workflow_not_found.html',
                                       workflow_name=workflow_name)
            elif response.error_code == ErrorCodes.VALIDATION_ERROR:
                validation_errors = response.data.get('validation_errors', []) if response.data else []
                return render_template('partials/validation_error.html',
                                       errors=validation_errors)
            else:
                return render_template('partials/execution_error.html',
                                       error=response.error)
                                       
    except Exception as e:
        current_app.logger.error(f"Unexpected error executing workflow '{workflow_name}': {str(e)}")
        return render_template('partials/execution_error.html',
                               error=f"An unexpected error occurred: {str(e)}")


@bp.route('/jobs/<job_id>/status')
def job_status(job_id):
    """Job status endpoint for HTMX polling"""
    api = current_app.api_client
    response = api.get_job_status(job_id)

    if response.success:
        job_data = response.data

        # Use shared status utilities for frontend logic
        job_data['is_terminal'] = JobStatuses.is_terminal(job_data['status'])
        job_data['is_active'] = JobStatuses.is_active(job_data['status'])

        return render_template('partials/job_status.html', job=job_data)
    else:
        if response.error_code == ErrorCodes.JOB_NOT_FOUND:
            return render_template('partials/job_not_found.html', job_id=job_id)
        return render_template('partials/job_error.html',
                               job_id=job_id, error=response.error)


@bp.route('/jobs')
def list_jobs():
    """Job monitoring page"""
    api = current_app.api_client

    # Get filter parameters
    status_filter = request.args.get('status', '')
    limit = int(request.args.get('limit', 50))

    # Validate status filter using shared constants
    if status_filter and not JobStatuses.is_valid(status_filter):
        flash(f"Invalid status filter: {status_filter}", 'error')
        status_filter = ''

    response = api.get_jobs(status=status_filter if status_filter else None, limit=limit)

    if not response.success:
        flash(f"Error loading jobs: {response.error}", 'error')
        jobs_data = []
    else:
        jobs_data = response.data.get('jobs', [])

    # Check if this is an HTMX request for partial content
    if request.headers.get('HX-Request'):
        return render_template('partials/job_list.html', jobs=jobs_data)

    # Full page request
    return render_template('workflows/jobs.html',
                           jobs=jobs_data,
                           current_filter=status_filter,
                           all_statuses=JobStatuses.ALL_STATUSES)


@bp.route('/jobs/<job_id>/results')
def job_results(job_id):
    """Dedicated job results page with artifacts"""
    api = current_app.api_client

    # Get job status and result
    job_response = api.get_job_status(job_id)

    if not job_response.success:
        if job_response.error_code == ErrorCodes.JOB_NOT_FOUND:
            flash(f"Job {job_id} not found", 'error')
            return redirect(url_for('workflows.list_jobs'))
        flash(f"Error loading job: {job_response.error}", 'error')
        return redirect(url_for('workflows.list_jobs'))

    job = job_response.data

    # Check if job has completed
    if not JobStatuses.is_terminal(job['status']):
        flash("Job is still running. Redirecting to job monitoring...", 'warning')
        return redirect(url_for('workflows.list_jobs'))

    # Get artifacts if job has results
    artifacts = []
    if job.get('has_result'):
        artifacts_response = api.get_job_artifacts(job_id)
        if artifacts_response.success:
            artifacts = artifacts_response.data.get('artifacts', [])

    return render_template('workflows/job_results.html',
                          job=job,
                          artifacts=artifacts)


@bp.route('/jobs/<job_id>/artifacts/<artifact_id>')
def get_artifact(job_id, artifact_id):
    """Get artifact detail for HTMX loading"""
    api = current_app.api_client

    response = api.get_artifact_detail(job_id, artifact_id)

    if not response.success:
        return render_template('partials/artifact_error.html',
                             error=response.error)

    artifact = response.data
    artifact_type = artifact.get('type')

    # Route to appropriate renderer based on type
    if artifact_type == 'markdown':
        return render_template('partials/artifact_markdown.html', artifact=artifact)
    elif artifact_type == 'table':
        return render_template('partials/artifact_table.html', artifact=artifact)
    elif artifact_type == 'link':
        return render_template('partials/artifact_link.html', artifact=artifact)
    elif artifact_type == 'image':
        return render_template('partials/artifact_image.html', artifact=artifact)
    else:
        return render_template('partials/artifact_error.html',
                             error=f"Unsupported artifact type: {artifact_type}")


@bp.route('/<workflow_name>/config')
def get_workflow_config(workflow_name):
    """Get workflow configuration for HTMX expansion"""
    api = current_app.api_client
    response = api.get_workflow_config(workflow_name)
    
    if response.success:
        config_data = response.data
        return render_template('partials/workflow_config.html',
                               workflow_name=workflow_name,
                               config=config_data.get('configuration', {}),
                               config_source=config_data.get('configuration_source', 'configuration directory'))
    else:
        if response.error_code == ErrorCodes.WORKFLOW_NOT_FOUND:
            return render_template('partials/workflow_not_found.html',
                                   workflow_name=workflow_name)
        return render_template('partials/config_error.html',
                               error=response.error)


@bp.route('/<workflow_name>/config', methods=['PUT'])
def update_workflow_config(workflow_name):
    """Update workflow configuration via HTMX"""
    api = current_app.api_client

    # Extract configuration data from form
    config_data = {}
    parameters = {}

    for key, value in request.form.items():
        if key.startswith('param_'):
            param_name = key.replace('param_', '')
            if param_name and value.strip():
                # Apply type inference to preserve JSON types (arrays, objects)
                parsed_value = _infer_and_parse_value(value)
                parameters[param_name] = parsed_value

    if parameters:
        config_data['parameters'] = parameters

    response = api.update_workflow_config(workflow_name, config_data)

    if response.success:
        return render_template('partials/config_save_result.html',
                               success=True,
                               message="Configuration saved successfully",
                               workflow_name=workflow_name)
    else:
        # Handle new schema validation error codes
        error_message = response.error
        locked = False

        if response.error_code == ErrorCodes.CONFIG_PATH_ERROR:
            error_message = "You can only modify workflow parameters. Fields like 'workflow_kind' and 'description' are read-only."
        elif response.error_code == ErrorCodes.CONFIG_LOCKED_ERROR:
            error_message = "Configuration is locked and cannot be modified."
            locked = True
        elif response.error_code == ErrorCodes.ENDPOINT_NOT_FOUND:
            return render_template('partials/workflow_not_found.html',
                                   workflow_name=workflow_name)

        return render_template('partials/config_save_result.html',
                               success=False,
                               message=error_message,
                               workflow_name=workflow_name,
                               locked=locked)


@bp.route('/<workflow_name>/summary')
def get_workflow_summary(workflow_name):
    """Get workflow summary with config and metadata for HTMX expansion"""
    api = current_app.api_client

    # Get workflow configuration
    config_response = api.get_workflow_config(workflow_name)

    if not config_response.success:
        if config_response.error_code == ErrorCodes.WORKFLOW_NOT_FOUND:
            return render_template('partials/workflow_not_found.html',
                                   workflow_name=workflow_name)
        return render_template('partials/config_error.html',
                               error=config_response.error)

    config_data = config_response.data
    configuration = config_data.get('configuration', {})

    # Extract summary information
    summary_data = {
        'name': workflow_name,
        'description': configuration.get('description', 'No description available'),
        'workflow_kind': configuration.get('workflow_kind', 'Unknown'),
        'parameters': configuration.get('parameters', {}),
        'config_source': config_data.get('configuration_source', 'configuration directory')
    }

    return render_template('partials/workflow_summary.html',
                           workflow=summary_data)


@bp.route('/<workflow_name>/clone', methods=['POST'])
def clone_workflow_action(workflow_name):
    """Clone a workflow configuration to a new name"""
    api = current_app.api_client

    # Get form data
    new_workflow_name = request.form.get('new_workflow_name', '').strip()
    description = request.form.get('description', '').strip()

    # Basic validation
    if not new_workflow_name:
        return _return_inline_error(
            "New workflow name is required",
            f"clone-error-{workflow_name}"
        )

    # Call API to clone workflow
    response = api.clone_workflow(
        source_name=workflow_name,
        new_workflow_name=new_workflow_name,
        description=description if description else None
    )

    if response.success:
        result = response.data
        flash(f"Workflow '{new_workflow_name}' created from '{workflow_name}'", 'success')
        current_app.logger.info(f"Cloned workflow: {workflow_name} → {new_workflow_name}")

        # Return updated workflow list
        workflows_response = api.get_workflows_with_metadata()
        if workflows_response.success:
            workflows = workflows_response.data.get('workflows', [])
            return render_template('partials/workflow_cards.html', workflows=workflows)
        else:
            # Fallback: return success message even if list refresh fails
            return render_template('partials/clone_success.html',
                                   new_workflow_name=new_workflow_name,
                                   source_workflow_name=workflow_name)
    else:
        # Handle specific error codes
        if response.error_code == ErrorCodes.WORKFLOW_NOT_FOUND:
            error_msg = f"Source workflow '{workflow_name}' not found"
        elif response.error_code == ErrorCodes.WORKFLOW_NAME_CONFLICT:
            error_msg = f"Workflow '{new_workflow_name}' already exists. Choose a different name."
        else:
            error_msg = response.error

        return _return_inline_error(error_msg, f"clone-error-{workflow_name}")


@bp.route('/<workflow_name>/delete', methods=['DELETE', 'POST'])
def delete_workflow_action(workflow_name):
    """Delete a workflow configuration

    Note: Accepts both DELETE and POST methods for HTMX compatibility
    """
    api = current_app.api_client

    # Call API to delete workflow
    response = api.delete_workflow_config(workflow_name)

    if response.success:
        flash(f"Workflow '{workflow_name}' deleted successfully", 'success')
        current_app.logger.info(f"Deleted workflow: {workflow_name}")

        # Return updated workflow list
        workflows_response = api.get_workflows_with_metadata()
        if workflows_response.success:
            workflows = workflows_response.data.get('workflows', [])
            return render_template('partials/workflow_cards.html', workflows=workflows)
        else:
            # Fallback: return success message
            return render_template('partials/delete_success.html',
                                   workflow_name=workflow_name)
    else:
        # Handle specific error codes
        if response.error_code == ErrorCodes.WORKFLOW_NOT_FOUND:
            error_msg = f"Workflow '{workflow_name}' not found"
        elif response.error_code == ErrorCodes.CONFIG_LOCKED_ERROR:
            error_msg = f"Workflow '{workflow_name}' is locked and cannot be deleted"
        else:
            error_msg = response.error

        flash(error_msg, 'error')
        return render_template('partials/delete_error.html',
                               error=error_msg,
                               workflow_name=workflow_name)
