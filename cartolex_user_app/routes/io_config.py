"""IO configuration routes using shared constants"""

from flask import Blueprint, render_template, request, current_app, flash, redirect, url_for
from cartolex_endpoint_server.constants import ErrorCodes, ConfigurationKinds

bp = Blueprint('io_config', __name__)


@bp.route('/')
def index():
    """IO configuration main page"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind
    if config_kind not in ConfigurationKinds.IO_SUPPORTED:
        flash(f"Invalid configuration kind: {config_kind}", 'error')
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    response = api.get_database_configs(config_kind)

    if not response.success:
        if response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            flash("Configuration system unavailable. Please try again later.", 'error')
        else:
            flash(f"Error loading database configurations: {response.error}", 'error')
        return render_template('io/index.html', configs=[], config_kind=config_kind)

    return render_template('io/index.html',
                           configs=response.data.get('configurations', []),
                           config_kind=config_kind,
                           supported_kinds=ConfigurationKinds.IO_SUPPORTED)


@bp.route('/<endpoint_name>')
def list_endpoint_configs(endpoint_name):
    """List all configurations for a specific endpoint"""
    api = current_app.api_client
    response = api.get_endpoint_configs(endpoint_name)

    if not response.success:
        if response.error_code == ErrorCodes.ENDPOINT_NOT_FOUND:
            flash(f"Endpoint '{endpoint_name}' not found", 'error')
            return redirect(url_for('io_config.index'))
        else:
            flash(f"Error loading endpoint configurations: {response.error}", 'error')

    configs = response.data.get('configurations', []) if response.success else []
    return render_template('io/endpoint_configs.html',
                           endpoint_name=endpoint_name,
                           configs=configs)


@bp.route('/<endpoint_name>/<db_type>/<db_kind>')
def edit_config(endpoint_name, db_type, db_kind):
    """Edit specific database configuration"""
    api = current_app.api_client
    response = api.get_database_config(endpoint_name, db_type, db_kind)

    if not response.success:
        if response.error_code == ErrorCodes.ENDPOINT_NOT_FOUND:
            flash(f"Configuration {endpoint_name}/{db_type}/{db_kind} not found", 'error')
        elif response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            flash("Configuration system unavailable", 'error')
        else:
            flash(f"Error loading configuration: {response.error}", 'error')
        return redirect(url_for('io_config.index'))

    return render_template('io/edit.html',
                           config=response.data,
                           endpoint_name=endpoint_name,
                           db_type=db_type,
                           db_kind=db_kind)


@bp.route('/<endpoint_name>/<db_type>/<db_kind>', methods=['PUT', 'POST'])
def update_config(endpoint_name, db_type, db_kind):
    """Update database configuration (HTMX endpoint)"""
    api = current_app.api_client

    # Extract configuration from form
    config = {}
    for key, value in request.form.items():
        if key.startswith('config_'):
            config_key = key.replace('config_', '')

            # Handle special fields
            if config_key in ['port', 'timeout']:
                try:
                    config[config_key] = int(value) if value else None
                except ValueError:
                    return render_template('partials/config_error.html',
                                           error=f"{config_key} must be a valid number")
            elif config_key == 'ssl':
                config[config_key] = value.lower() in ['true', '1', 'yes', 'on']
            else:
                stripped_value = value.strip() if value else ''
                config[config_key] = stripped_value if stripped_value else None

    response = api.update_database_config(endpoint_name, db_type, db_kind, config)

    if response.success:
        return render_template('partials/config_success.html',
                               message="Database configuration updated successfully")
    else:
        # Handle specific error codes
        if response.error_code == ErrorCodes.VALIDATION_ERROR:
            validation_errors = response.data.get('validation_errors', []) if response.data else []
            error_message = "Validation failed: " + "; ".join([
                f"{err.get('field', 'unknown')}: {err.get('message', 'invalid')}"
                for err in validation_errors
            ])
        elif response.error_code == ErrorCodes.ENDPOINT_NOT_FOUND:
            error_message = f"Configuration {endpoint_name}/{db_type}/{db_kind} not found"
        elif response.error_code == ErrorCodes.CONFIG_UPDATE_ERROR:
            error_message = "Failed to update configuration. Please check your values and try again."
        else:
            error_message = response.error

        return render_template('partials/config_error.html', error=error_message)


@bp.route('/<endpoint_name>/<db_type>/<db_kind>/test', methods=['POST'])
def test_connection(endpoint_name, db_type, db_kind):
    """Test database connection (HTMX endpoint)"""
    # This would be a future enhancement - backend would need to provide a test endpoint
    return render_template('partials/test_connection.html',
                           message="Connection testing not yet implemented",
                           success=False)
