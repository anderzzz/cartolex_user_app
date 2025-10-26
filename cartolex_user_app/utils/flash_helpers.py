"""Flash message helpers for HTMX-aware messaging.

This module provides a custom flash function that prevents message accumulation
from HTMX polling requests while maintaining standard Flask flash behavior for
full page loads.
"""
from flask import flash as flask_flash, request


def flash(message, category='success'):
    """Flash messages only for full page loads, not HTMX requests.

    This prevents error message flooding when HTMX polling requests fail
    repeatedly (e.g., when backend is slow or down). HTMX requests already
    have inline error partials with dismiss buttons, so they don't need
    flash messages.

    Args:
        message: The message to flash
        category: Message category ('success', 'error', 'warning')

    Usage:
        Instead of:
            from flask import flash
            flash("Error occurred", 'error')

        Use:
            from cartolex_user_app.utils.flash_helpers import flash
            flash("Error occurred", 'error')
    """
    # Only flash messages for full page loads, not HTMX requests
    if not request.headers.get('HX-Request'):
        flask_flash(message, category)
