"""Custom Jinja filters using shared constants"""

import json
from cartolex_endpoint_server.constants import JobStatuses


def register_filters(app):
    """Register custom template filters"""

    @app.template_filter('job_status_class')
    def job_status_class(status):
        """Get CSS class for job status badge"""
        status_classes = {
            JobStatuses.COMPLETED: 'bg-green-100 text-green-800',
            JobStatuses.RUNNING: 'bg-blue-100 text-blue-800',
            JobStatuses.PENDING: 'bg-yellow-100 text-yellow-800',
            JobStatuses.FAILED: 'bg-red-100 text-red-800',
            JobStatuses.CANCELLED: 'bg-gray-100 text-gray-800'
        }
        return status_classes.get(status, 'bg-gray-100 text-gray-800')

    @app.template_filter('is_terminal')
    def is_terminal_filter(status):
        """Check if job status is terminal"""
        return JobStatuses.is_terminal(status)

    @app.template_filter('is_active')
    def is_active_filter(status):
        """Check if job status is active"""
        return JobStatuses.is_active(status)

    @app.template_filter('to_form_value')
    def to_form_value(value):
        """
        Convert parameter values to form-safe strings.

        Arrays and objects are serialized to JSON, strings remain as-is.
        This ensures type information is preserved in HTML forms.
        """
        if isinstance(value, (list, dict)):
            return json.dumps(value, separators=(',', ':'))
        return str(value) if value is not None else ''
