"""Workflow routes using shared constants"""

from flask import Blueprint, render_template, request, current_app, flash, redirect, url_for
from cartolex_endpoint_server.constants import ErrorCodes, JobStatuses

bp = Blueprint('workflows', __name__)


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

    # Extract form data
    parameters = {}
    execution = {}
    for key, value in request.form.items():
        if key.startswith('param_'):
            parameters[key.replace('param_', '')] = value
        elif key.startswith('exec_'):
            execution[key.replace('exec_', '')] = value

    response = api.execute_workflow(workflow_name, parameters, execution)

    if response.success:
        job_id = response.data.get('job_id')
        return render_template('partials/job_submitted.html',
                               job_id=job_id, workflow_name=workflow_name)
    else:
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
        return render_template('workflows/jobs.html', jobs=[], current_filter=status_filter)

    return render_template('workflows/jobs.html',
                           jobs=response.data.get('jobs', []),
                           current_filter=status_filter,
                           all_statuses=JobStatuses.ALL_STATUSES)
