"""Canvas blueprint for React Flow-based visual canvas."""

from flask import Blueprint, render_template, current_app

bp = Blueprint('canvas', __name__)


@bp.route('/')
def index():
    """Canvas workspace page."""
    canvas_dev_mode = current_app.config.get('CANVAS_DEV_MODE', False)
    return render_template(
        'canvas.html',
        page_title='Canvas - Cartolex',
        canvas_dev_mode=canvas_dev_mode
    )
