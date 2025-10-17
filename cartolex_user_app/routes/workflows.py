"""Workflow routes using shared constants"""

import json
from flask import Blueprint, render_template, request, current_app, flash, redirect, url_for
from cartolex_endpoint_server.constants import ErrorCodes, JobStatuses

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


@bp.route('/')
def list_workflows():
    """List all workflows"""
    api = current_app.api_client
    response = api.get_workflows()

    if not response.success:
        # Use shared error codes for consistent handling
        if response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            flash("Configuration system unavailable. Please try again later.", 'error')
        else:
            flash(f"Error loading workflows: {response.error}", 'error')
        return render_template('workflows/list.html', workflows=[])

    return render_template('workflows/list.html',
                           workflows=response.data.get('workflows', []))


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

        current_app.logger.info(f"Executing workflow '{workflow_name}' with {len(parameters)} parameters")

        response = api.execute_workflow(workflow_name, parameters)

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
