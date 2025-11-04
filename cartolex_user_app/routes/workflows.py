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


def _normalize_table_data(data, metadata=None):
    """
    Normalize table data to standard format: list[dict[str, Any]]

    Handles three input formats:

    1. List of dicts (rows) - already normalized:
       [{"col1": val1, "col2": val2}, {"col1": val3, "col2": val4}]

    2. Dict of lists (columns) - transpose to rows:
       {"col1": [val1, val3], "col2": [val2, val4]}
       → [{"col1": val1, "col2": val2}, {"col1": val3, "col2": val4}]

    3. List of lists (raw) - first row as headers:
       [["col1", "col2"], [val1, val2], [val3, val4]]
       → [{"col1": val1, "col2": val2}, {"col1": val3, "col2": val4}]

    Args:
        data: Table data in any supported format (auto-detected)
        metadata: Optional metadata dict with hints:
            - table_format: "rows" | "columns" | "raw" (auto-detected if omitted)
            - column_order: ["col1", "col2"] (explicit column ordering)

    Returns:
        Normalized table as list[dict[str, Any]] (rows format)

    Examples:
        >>> # Backend sends columns format
        >>> _normalize_table_data({"name": ["Alice", "Bob"], "age": [30, 25]})
        [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]

        >>> # Backend sends raw format with headers
        >>> _normalize_table_data([["name", "age"], ["Alice", 30], ["Bob", 25]])
        [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]

        >>> # Backend sends rows format (no transformation needed)
        >>> _normalize_table_data([{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}])
        [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
    """
    if not data:
        return []

    # Check metadata hint first
    table_format = metadata.get('table_format') if metadata else None

    # Auto-detect format if no hint provided
    if not table_format:
        if isinstance(data, list) and len(data) > 0:
            if isinstance(data[0], dict):
                table_format = 'rows'
            elif isinstance(data[0], list):
                table_format = 'raw'
            else:
                current_app.logger.warning(f"Unknown table data format: list of {type(data[0])}")
                return []
        elif isinstance(data, dict):
            table_format = 'columns'
        else:
            current_app.logger.warning(f"Unknown table data format: {type(data)}")
            return []

    # Normalize based on detected/hinted format
    try:
        if table_format == 'rows':
            # Already in correct format: [{"col1": val1, "col2": val2}, ...]
            normalized = data

        elif table_format == 'columns':
            # Transpose columns to rows: {"col1": [v1, v2], "col2": [v3, v4]}
            # → [{"col1": v1, "col2": v3}, {"col1": v2, "col2": v4}]
            columns = list(data.keys())
            if not columns:
                return []

            num_rows = len(data[columns[0]])
            normalized = [
                {col: data[col][i] for col in columns if i < len(data[col])}
                for i in range(num_rows)
            ]

        elif table_format == 'raw':
            # First row is headers: [["col1", "col2"], [v1, v3], [v2, v4]]
            # → [{"col1": v1, "col2": v3}, {"col1": v2, "col2": v4}]
            if len(data) < 2:
                return []

            headers = data[0]
            if not isinstance(headers, list):
                current_app.logger.warning(f"Raw table format expects first row as headers list")
                return []

            normalized = [
                {str(headers[i]): row[i] for i in range(min(len(headers), len(row)))}
                for row in data[1:]
                if isinstance(row, list)
            ]

        else:
            current_app.logger.warning(f"Unsupported table_format: {table_format}")
            return []

        # Apply explicit column ordering if provided
        if metadata and 'column_order' in metadata:
            column_order = metadata['column_order']
            # Reorder columns in each row according to specified order
            normalized = [
                {col: row.get(col) for col in column_order if col in row}
                for row in normalized
            ]

        current_app.logger.debug(f"Normalized {table_format} table with {len(normalized)} rows")
        return normalized

    except Exception as e:
        current_app.logger.error(f"Error normalizing table data: {e}")
        return []


def _render_markdown_artifact(markdown_data):
    """
    Render markdown to HTML for frontend display.

    Simple rendering since data is pre-sanitized at write time.
    """
    import mistune
    import html

    if not markdown_data or not isinstance(markdown_data, str):
        return {"markdown": "", "html": ""}

    try:
        rendered_html = mistune.html(markdown_data)
        current_app.logger.debug(
            f"Rendered markdown ({len(markdown_data)} chars) to HTML "
            f"({len(rendered_html)} chars)"
        )
    except Exception as e:
        current_app.logger.error(f"Markdown rendering failed: {e}")
        # Fallback: escape and wrap in pre tag
        rendered_html = f"<pre>{html.escape(markdown_data)}</pre>"

    return {
        "markdown": markdown_data,
        "html": rendered_html
    }


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

    # Always attempt to fetch artifacts for completed jobs
    # The backend will return an empty list if none exist
    artifacts = []
    artifacts_response = api.get_job_artifacts(job_id)
    if artifacts_response.success:
        artifacts = artifacts_response.data.get('artifacts', [])
    else:
        current_app.logger.warning(f"Failed to fetch artifacts for job {job_id}: {artifacts_response.error}")

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

    # DEBUG: Log what backend sent
    current_app.logger.info(f"Artifact type: {artifact_type}, has 'data' key: {'data' in artifact}")
    if 'data' in artifact:
        current_app.logger.info(f"Artifact data type: {type(artifact['data'])}, data: {artifact['data']!r}")

    # Step 1: Presentation transformations for different artifact types

    # Table: Normalize data structure (rows/columns/raw → list of dicts)
    if artifact_type == 'table' and 'data' in artifact:
        artifact['data'] = _normalize_table_data(
            artifact['data'],
            artifact.get('metadata')
        )

    # Markdown: Render to HTML (markdown string → dict with markdown + html)
    if artifact_type == 'markdown' and 'data' in artifact:
        current_app.logger.info(f"Rendering markdown: {artifact['data']!r}")
        artifact['data'] = _render_markdown_artifact(artifact['data'])
        current_app.logger.info(f"After render: {artifact['data']!r}")

    # Step 2: Wrap data in type-specific nested structure for templates
    # Backend returns: artifact.data = content (flat)
    # Frontend expects: artifact.data.{type} = content (nested)
    if 'data' in artifact and artifact_type:
        artifact['data'] = {artifact_type: artifact['data']}

    # Route to appropriate renderer based on type
    if artifact_type == 'markdown':
        response = make_response(render_template('partials/artifact_markdown.html', artifact=artifact))
    elif artifact_type == 'table':
        response = make_response(render_template('partials/artifact_table.html', artifact=artifact))
    elif artifact_type == 'link':
        response = make_response(render_template('partials/artifact_link.html', artifact=artifact))
    elif artifact_type == 'image':
        response = make_response(render_template('partials/artifact_image.html', artifact=artifact))
    else:
        response = make_response(render_template('partials/artifact_error.html',
                             error=f"Unsupported artifact type: {artifact_type}"))

    # Prevent browser caching of HTMX partial responses
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'

    return response


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
