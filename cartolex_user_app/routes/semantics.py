"""Semantics configuration routes using shared constants"""

from flask import Blueprint, render_template, request, current_app, flash, redirect, url_for
from cartolex_endpoint_server.constants import ErrorCodes, ConfigurationKinds

bp = Blueprint('semantics', __name__)


@bp.route('/')
def index():
    """Semantics configuration main page"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind using shared constants
    if config_kind not in ConfigurationKinds.SEMANTICS_SUPPORTED:
        flash(f"Invalid configuration kind: {config_kind}", 'error')
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    response = api.get_semantics_configs(config_kind)

    if not response.success:
        # Handle specific error codes
        if response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            flash("Configuration system unavailable. Please try again later.", 'error')
        else:
            flash(f"Error loading semantics configurations: {response.error}", 'error')
        return render_template('semantics/index.html', configs=[], config_kind=config_kind)

    return render_template('semantics/index.html',
                           configs=response.data.get('configurations', []),
                           config_kind=config_kind,
                           supported_kinds=ConfigurationKinds.SEMANTICS_SUPPORTED)


@bp.route('/<endpoint_name>')
def endpoint_configs(endpoint_name):
    """List all configurations for a specific semantics endpoint"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind
    if config_kind not in ConfigurationKinds.SEMANTICS_SUPPORTED:
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    response = api.get_semantics_endpoint_configs(endpoint_name, config_kind)

    if not response.success:
        if response.error_code == ErrorCodes.ENDPOINT_NOT_FOUND:
            flash(f"Semantics endpoint '{endpoint_name}' not found", 'error')
            return redirect(url_for('semantics.index'))
        else:
            flash(f"Error loading endpoint configurations: {response.error}", 'error')

    configs = response.data if response.success else {}
    return render_template('semantics/endpoint_configs.html',
                           endpoint_name=endpoint_name,
                           configs=configs,
                           config_kind=config_kind)


@bp.route('/<endpoint_name>/<provider>')
def provider_configs(endpoint_name, provider):
    """View all tier configurations for a specific provider"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind
    if config_kind not in ConfigurationKinds.SEMANTICS_SUPPORTED:
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    response = api.get_semantics_provider_configs(endpoint_name, provider, config_kind)

    if not response.success:
        if response.error_code == ErrorCodes.CONFIG_NOT_FOUND:
            flash(f"Provider '{provider}' not found in endpoint '{endpoint_name}'", 'error')
        elif response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            flash("Configuration system unavailable", 'error')
        else:
            flash(f"Error loading provider configurations: {response.error}", 'error')
        return redirect(url_for('semantics.endpoint_configs', endpoint_name=endpoint_name))

    return render_template('semantics/provider_configs.html',
                           endpoint_name=endpoint_name,
                           provider=provider,
                           configs=response.data,
                           config_kind=config_kind)


@bp.route('/<endpoint_name>/<provider>/<tier>/details')
def config_details(endpoint_name, provider, tier):
    """View detailed configuration information (read-only)"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind
    if config_kind not in ConfigurationKinds.SEMANTICS_SUPPORTED:
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    response = api.get_semantics_config_detail(endpoint_name, provider, tier, config_kind)

    if not response.success:
        if response.error_code == ErrorCodes.CONFIG_NOT_FOUND:
            error_message = f"Configuration {endpoint_name}/{provider}/{tier} not found"
        elif response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            error_message = "Configuration system unavailable"
        else:
            error_message = f"Error loading configuration: {response.error}"

        return render_template('partials/config_error.html', error=error_message)

    return render_template('partials/semantics_config_details.html',
                           config=response.data.get('configuration', {}),
                           endpoint_name=endpoint_name,
                           provider=provider,
                           tier=tier,
                           config_kind=config_kind)


@bp.route('/embedding-models')
def embedding_models():
    """Redirect to main semantics page"""
    return redirect(url_for('semantics.index'))

