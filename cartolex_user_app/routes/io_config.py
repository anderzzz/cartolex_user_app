"""IO configuration routes using shared constants"""

from flask import Blueprint, render_template, request, current_app, flash, redirect, url_for, jsonify
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


@bp.route('/<endpoint_name>/types')
def endpoint_types(endpoint_name):
    """Get database types for a specific endpoint (HTMX partial)"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind
    if config_kind not in ConfigurationKinds.IO_SUPPORTED:
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    response = api.get_database_configs(config_kind)

    if not response.success:
        return render_template('partials/config_error.html',
                               error=f"Error loading database types for {endpoint_name}: {response.error}")

    # Process all configurations and filter for the specific endpoint
    db_types = []
    all_configs = response.data.get('configurations', [])

    # Find the specific endpoint configuration
    endpoint_config = next((config for config in all_configs if config['endpoint_name'] == endpoint_name), None)

    if endpoint_config and 'configuration' in endpoint_config:
        configuration = endpoint_config['configuration']
        type_groups = {}

        # Process the hierarchical structure (similar to original template)
        for db_type_key, db_type_data in configuration.items():
            if db_type_key.endswith('_db') and db_type_data and isinstance(db_type_data, dict):
                db_type = db_type_key.replace('_db', '')
                type_groups[db_type] = {
                    'db_type': db_type,
                    'kind_count': len(db_type_data),
                    'kinds': list(db_type_data.keys())
                }

        # Convert to list
        db_types = list(type_groups.values())

    return render_template('partials/io_endpoint_types.html',
                           endpoint_name=endpoint_name,
                           db_types=db_types,
                           config_kind=config_kind)


@bp.route('/<endpoint_name>/<db_type>/kinds')
def type_kinds(endpoint_name, db_type):
    """Get database kinds for a specific database type (HTMX partial)"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind
    if config_kind not in ConfigurationKinds.IO_SUPPORTED:
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    response = api.get_database_configs(config_kind)

    if not response.success:
        return render_template('partials/config_error.html',
                               error=f"Error loading database kinds for {db_type}: {response.error}")

    # Filter configurations for the specific endpoint and database type
    db_kinds = []
    all_configs = response.data.get('configurations', [])

    # Find the specific endpoint configuration
    endpoint_config = next((config for config in all_configs if config['endpoint_name'] == endpoint_name), None)

    if endpoint_config and 'configuration' in endpoint_config:
        configuration = endpoint_config['configuration']
        db_type_key = f"{db_type}_db"

        if db_type_key in configuration and isinstance(configuration[db_type_key], dict):
            db_type_data = configuration[db_type_key]
            for db_kind, db_config in db_type_data.items():
                db_kinds.append({
                    'db_kind': db_kind,
                    'endpoint_name': endpoint_name,
                    'db_type': db_type,
                    'config': db_config or {}
                })

    return render_template('partials/io_type_kinds.html',
                           endpoint_name=endpoint_name,
                           db_type=db_type,
                           db_kinds=db_kinds,
                           config_kind=config_kind)


@bp.route('/<endpoint_name>')
def list_endpoint_configs(endpoint_name):
    """List all configurations for a specific endpoint"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind
    if config_kind not in ConfigurationKinds.IO_SUPPORTED:
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

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
                           configs=configs,
                           config_kind=config_kind)


@bp.route('/<endpoint_name>/<db_type>/<db_kind>')
def edit_config(endpoint_name, db_type, db_kind):
    """Edit specific database configuration"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind
    if config_kind not in ConfigurationKinds.IO_SUPPORTED:
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    response = api.get_database_config(endpoint_name, db_type, db_kind, config_kind)

    if not response.success:
        if response.error_code == ErrorCodes.ENDPOINT_NOT_FOUND:
            flash(f"Configuration {endpoint_name}/{db_type}/{db_kind} not found", 'error')
        elif response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            flash("Configuration system unavailable", 'error')
        else:
            flash(f"Error loading configuration: {response.error}", 'error')
        return redirect(url_for('io_config.index'))

    # Check if this is an HTMX request for the panel
    if request.headers.get('HX-Request'):
        return render_template('partials/io_config_panel.html',
                               config=response.data.get('configuration', {}),
                               endpoint_name=endpoint_name,
                               db_type=db_type,
                               db_kind=db_kind)
    else:
        # Full page request (for direct URL access)
        return render_template('io/edit.html',
                               config=response.data,
                               endpoint_name=endpoint_name,
                               db_type=db_type,
                               db_kind=db_kind)


@bp.route('/<endpoint_name>/<db_type>/<db_kind>/details')
def view_config_details(endpoint_name, db_type, db_kind):
    """View detailed configuration information (read-only)"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind
    if config_kind not in ConfigurationKinds.IO_SUPPORTED:
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    response = api.get_database_config(endpoint_name, db_type, db_kind, config_kind)

    if not response.success:
        if response.error_code == ErrorCodes.ENDPOINT_NOT_FOUND:
            error_message = f"Configuration {endpoint_name}/{db_type}/{db_kind} not found"
        elif response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            error_message = "Configuration system unavailable"
        else:
            error_message = f"Error loading configuration: {response.error}"

        return render_template('partials/config_error.html', error=error_message)

    return render_template('partials/io_config_details.html',
                           config=response.data.get('configuration', {}),
                           endpoint_name=endpoint_name,
                           db_type=db_type,
                           db_kind=db_kind,
                           config_kind=config_kind)


@bp.route('/<endpoint_name>/<db_type>/<db_kind>/count')
def get_entry_count(endpoint_name, db_type, db_kind):
    """Get entry count for a specific database configuration"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind
    if config_kind not in ConfigurationKinds.IO_SUPPORTED:
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    try:
        response = api.get_database_entries_count(endpoint_name, db_type, db_kind, config_kind)

        if response.success:
            count = response.data.get('count', 0)
            last_updated = response.data.get('last_updated', '')

            # Format the count nicely
            if count >= 1000000:
                formatted_count = f"{count/1000000:.1f}M"
            elif count >= 1000:
                formatted_count = f"{count/1000:.1f}K"
            else:
                formatted_count = str(count)

            return f'''
                <p class="text-xs font-medium esevioz-text">{formatted_count} entries</p>
                {f'<p class="text-xs esevioz-text opacity-50">Updated: {last_updated[:10] if last_updated else "Unknown"}</p>' if last_updated else ''}
            '''
        else:
            # Handle specific error cases based on backend team's new error codes
            if response.status_code == 503 or response.error_code == 'DB_CONNECTION_ERROR':
                return '''
                    <p class="text-xs text-orange-600">Database offline</p>
                    <p class="text-xs text-orange-400">Connection failed</p>
                '''
            elif response.error_code == 'DB_COUNT_ERROR':
                return '''
                    <p class="text-xs text-red-600">Count error</p>
                    <p class="text-xs text-red-400">Query failed</p>
                '''
            elif response.error_code == 'IO_CONFIG_NOT_FOUND':
                return '''
                    <p class="text-xs text-gray-600">Config not found</p>
                    <p class="text-xs text-gray-400">Check configuration</p>
                '''
            else:
                return '''
                    <p class="text-xs text-red-600">Count unavailable</p>
                    <p class="text-xs text-red-400">Service error</p>
                '''

    except Exception as e:
        return '''
            <p class="text-xs text-gray-600">Count unavailable</p>
            <p class="text-xs text-gray-400">Service error</p>
        '''


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


@bp.route('/endpoint/<endpoint_name>', methods=['DELETE'])
def delete_endpoint(endpoint_name):
    """Delete entire endpoint configuration"""
    api = current_app.api_client

    try:
        response = api.delete_endpoint_config(endpoint_name)

        if response.success:
            return jsonify({
                "success": True,
                "message": f"Endpoint '{endpoint_name}' deleted successfully",
                "endpoint_name": endpoint_name,
                "deleted_at": response.data.get('deleted_at') if response.data else None
            })
        else:
            # Enhanced error handling for endpoint deletion
            error_messages = {
                'ENDPOINT_NOT_FOUND': f"Endpoint '{endpoint_name}' does not exist",
                'DB_CONNECTION_ERROR': "Cannot delete: Database connection failed",
                'CONFIG_HANDLER_ERROR': "Configuration system error during delete operation"
            }

            user_message = error_messages.get(response.error_code, response.error or "Unknown error occurred")
            status_code = 404 if response.error_code == 'ENDPOINT_NOT_FOUND' else 400

            return jsonify({
                "success": False,
                "error": user_message,
                "error_code": response.error_code
            }), status_code

    except Exception as e:
        return jsonify({
            "success": False,
            "error": "Delete operation failed",
            "message": f"Failed to delete endpoint '{endpoint_name}'",
            "technical_error": str(e)
        }), 500


@bp.route('/create')
def create_config():
    """Create new database configuration (optionally from template)"""
    template_endpoint = request.args.get('template_endpoint')
    template_db_type = request.args.get('template_db_type')
    template_db_kind = request.args.get('template_db_kind')

    template_data = None
    if template_endpoint and template_db_type and template_db_kind:
        api = current_app.api_client
        try:
            response = api.get_database_template(template_endpoint, template_db_type, template_db_kind)
            if response.success:
                template_data = response.data
            else:
                flash(f"Could not load template: {response.error}", 'warning')
        except Exception as e:
            flash(f"Template service unavailable: {str(e)}", 'warning')

    # For now, show the template data and inform user about creation status
    if template_data:
        flash(f"Template loaded for {template_db_type}/{template_db_kind}. Creation UI will be available soon.", 'info')
        # Could render a creation form here in the future
        return render_template('io/create.html',
                               template_data=template_data,
                               template_endpoint=template_endpoint,
                               template_db_type=template_db_type,
                               template_db_kind=template_db_kind)
    else:
        flash("Create configuration feature: Creation UI will be implemented once backend provides validation rules", 'info')
        return redirect(url_for('io_config.index'))


@bp.route('/<endpoint_name>/<db_type>/<db_kind>/test', methods=['POST'])
def test_connection(endpoint_name, db_type, db_kind):
    """Test database connection (HTMX endpoint)"""
    # This would be a future enhancement - backend would need to provide a test endpoint
    return render_template('partials/test_connection.html',
                           message="Connection testing not yet implemented",
                           success=False)
