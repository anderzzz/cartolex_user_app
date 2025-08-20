"""Dashboard routes using shared constants"""

from flask import Blueprint, render_template, current_app, jsonify
from datetime import datetime
from cartolex_endpoint_server.constants import ErrorCodes, JobStatuses

bp = Blueprint('dashboard', __name__)


@bp.route('/')
def index():
    """Main dashboard page"""
    api = current_app.api_client

    context = {
        'page_title': 'Dashboard',
        'current_time': datetime.now(),
        'workflow_count': 0,
        'recent_jobs': [],
        'error': None
    }

    # Get quick stats (non-blocking, graceful degradation)
    try:
        # Get workflows count
        workflows_response = api.get_workflows()
        if workflows_response.success:
            workflows = workflows_response.data.get('workflows', [])
            context['workflows'] = workflows[:5]  # Show first 5 for preview
            context['workflow_count'] = len(workflows)

        # Get recent jobs
        jobs_response = api.get_jobs(limit=5)
        if jobs_response.success:
            context['recent_jobs'] = jobs_response.data.get('jobs', [])

    except Exception as e:
        context['error'] = f"Error loading dashboard data: {str(e)}"

    return render_template('dashboard.html', **context)


@bp.route('/system-status')
def system_status():
    """HTMX endpoint for live system status updates"""
    api = current_app.api_client

    status = {
        'backend_connected': False,
        'active_jobs': 0,
        'total_workflows': 0,
        'last_updated': datetime.now().strftime('%H:%M:%S')
    }

    # Test backend connectivity
    workflows_response = api.get_workflows()
    if workflows_response.success:
        status['backend_connected'] = True
        status['total_workflows'] = workflows_response.data.get('total', 0)

    # Get active jobs count using shared status constants
    jobs_response = api.get_jobs(status=JobStatuses.RUNNING, limit=100)
    if jobs_response.success:
        running_jobs = jobs_response.data.get('jobs', [])
        # Also count pending jobs as active
        pending_response = api.get_jobs(status=JobStatuses.PENDING, limit=100)
        if pending_response.success:
            pending_jobs = pending_response.data.get('jobs', [])
            status['active_jobs'] = len(running_jobs) + len(pending_jobs)
        else:
            status['active_jobs'] = len(running_jobs)

    return render_template('partials/system_status.html', status=status)


@bp.route('/health')
def health_check():
    """Health check endpoint for monitoring"""
    api = current_app.api_client

    # Test backend connectivity
    try:
        response = api.get_workflows()
        backend_status = 'healthy' if response.success else 'unhealthy'
        backend_error = None if response.success else response.error
    except Exception as e:
        backend_status = 'unhealthy'
        backend_error = str(e)

    status = {
        'status': 'healthy' if backend_status == 'healthy' else 'degraded',
        'backend': backend_status,
        'backend_error': backend_error,
        'timestamp': datetime.utcnow().isoformat()
    }

    return jsonify(status), 200 if status['status'] == 'healthy' else 503

