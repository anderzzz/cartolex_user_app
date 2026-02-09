"""Canvas blueprint for React Flow-based visual canvas.

Serves two kinds of routes:
- Page routes (/canvas/, /canvas/<id>) → HTML templates
- API proxy routes (/canvas/api/*) → JSON, forwarded to backend via CartolexAPI
"""

from flask import (
    Blueprint, render_template, current_app, jsonify,
    request, redirect, url_for
)

from cartolex_endpoint_server.constants import ErrorCodes
from cartolex_user_app.utils.flash_helpers import flash

bp = Blueprint('canvas', __name__)


# ---------------------------------------------------------------------------
# Page routes (serve HTML)
# ---------------------------------------------------------------------------

@bp.route('/')
def index():
    """Workspace list page."""
    api = current_app.api_client
    response = api.get_canvas_workspaces()

    workspaces = []
    if response.success and response.data:
        workspaces = response.data.get('workspaces', [])
    elif not response.success:
        flash(f"Could not load workspaces: {response.error}", 'error')

    return render_template(
        'canvas_workspaces.html',
        page_title='Canvas Workspaces - Cartolex',
        workspaces=workspaces,
    )


@bp.route('/<workspace_id>')
def workspace(workspace_id):
    """Canvas workspace page — mounts the React island."""
    api = current_app.api_client
    response = api.get_canvas_workspace(workspace_id)

    if not response.success:
        flash("Workspace not found.", 'error')
        return redirect(url_for('canvas.index'))

    workspace_data = response.data
    canvas_dev_mode = current_app.config.get('CANVAS_DEV_MODE', False)

    return render_template(
        'canvas.html',
        page_title=f"{workspace_data.get('name', 'Canvas')} - Cartolex",
        canvas_dev_mode=canvas_dev_mode,
        workspace_id=workspace_id,
        workspace_data=workspace_data,
    )


# ---------------------------------------------------------------------------
# API proxy routes (return JSON — consumed by the React app)
# ---------------------------------------------------------------------------

@bp.route('/api/workspaces', methods=['GET'])
def api_list_workspaces():
    """List workspaces."""
    api = current_app.api_client
    response = api.get_canvas_workspaces()
    if response.success:
        return jsonify(response.data), 200
    return jsonify({'error': response.error, 'error_code': response.error_code}), response.status_code or 500


@bp.route('/api/workspaces', methods=['POST'])
def api_create_workspace():
    """Create a workspace."""
    data = request.get_json(silent=True) or {}
    api = current_app.api_client
    response = api.create_canvas_workspace(
        name=data.get('name', 'Untitled Workspace'),
        description=data.get('description'),
    )
    if response.success:
        return jsonify(response.data), 201
    if response.error_code == ErrorCodes.CANVAS_WORKSPACE_ALREADY_EXISTS:
        return jsonify({'error': response.error, 'error_code': response.error_code}), 409
    return jsonify({'error': response.error}), response.status_code or 500


@bp.route('/api/workspaces/<workspace_id>', methods=['GET'])
def api_get_workspace(workspace_id):
    """Get full workspace data."""
    api = current_app.api_client
    response = api.get_canvas_workspace(workspace_id)
    if response.success:
        return jsonify(response.data), 200
    if response.error_code == ErrorCodes.CANVAS_WORKSPACE_NOT_FOUND:
        return jsonify({'error': response.error, 'error_code': response.error_code}), 404
    return jsonify({'error': response.error}), response.status_code or 500


@bp.route('/api/workspaces/<workspace_id>', methods=['PUT'])
def api_save_workspace(workspace_id):
    """Full overwrite save of workspace state."""
    data = request.get_json(silent=True) or {}
    api = current_app.api_client
    response = api.save_canvas_workspace(workspace_id, data)
    if response.success:
        return jsonify(response.data), 200
    return jsonify({'error': response.error}), response.status_code or 500


@bp.route('/api/workspaces/<workspace_id>', methods=['DELETE'])
def api_delete_workspace(workspace_id):
    """Delete a workspace."""
    api = current_app.api_client
    response = api.delete_canvas_workspace(workspace_id)
    if response.success:
        return '', 204
    return jsonify({'error': response.error}), response.status_code or 500


@bp.route('/api/workspaces/<workspace_id>/validate', methods=['POST'])
def api_validate_workspace(workspace_id):
    """Validate workspace — always returns 200."""
    api = current_app.api_client
    response = api.validate_canvas_workspace(workspace_id)
    if response.success:
        return jsonify(response.data), 200
    return jsonify({'error': response.error}), response.status_code or 500
