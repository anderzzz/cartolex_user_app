"""Semantics configuration routes using shared constants"""

from flask import Blueprint, render_template, request, current_app, flash, redirect, url_for
from cartolex_endpoint_server.constants import ErrorCodes, ConfigurationKinds

bp = Blueprint('semantics', __name__)


@bp.route('/')
def index():
    """Semantics configuration main page"""
    return render_template('semantics/index.html')


@bp.route('/llm-models')
def llm_models():
    """List LLM model configurations"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    # Validate config_kind using shared constants
    if config_kind not in ConfigurationKinds.SEMANTICS_SUPPORTED:
        flash(f"Invalid configuration kind: {config_kind}", 'error')
        config_kind = ConfigurationKinds.CONFIGURATION_DIRECTORY

    response = api.get_llm_models(config_kind)

    if not response.success:
        # Handle specific error codes
        if response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            flash("Configuration system unavailable. Please try again later.", 'error')
        else:
            flash(f"Error loading LLM models: {response.error}", 'error')
        return render_template('semantics/llm_models.html', models=None, config_kind=config_kind)

    return render_template('semantics/llm_models.html',
                           models=response.data,
                           config_kind=config_kind,
                           supported_kinds=ConfigurationKinds.SEMANTICS_SUPPORTED)


@bp.route('/llm-models/<provider>/<tier>')
def edit_llm_model(provider, tier):
    """Edit specific LLM model configuration"""
    api = current_app.api_client
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    response = api.get_llm_model(provider, tier, config_kind)

    if not response.success:
        if response.error_code == ErrorCodes.LLM_MODEL_NOT_FOUND:
            flash(f"LLM model {provider}/{tier} not found", 'error')
        elif response.error_code == ErrorCodes.CONFIG_HANDLER_ERROR:
            flash("Configuration system unavailable", 'error')
        else:
            flash(f"Error loading model configuration: {response.error}", 'error')
        return redirect(url_for('semantics.llm_models'))

    return render_template('semantics/edit_llm_model.html',
                           model=response.data,
                           provider=provider,
                           tier=tier)


@bp.route('/llm-models/<provider>/<tier>', methods=['PUT', 'POST'])
def update_llm_model(provider, tier):
    """Update LLM model configuration (HTMX endpoint)"""
    api = current_app.api_client

    # Extract configuration from form
    config = {}
    if 'model' in request.form:
        config['model'] = request.form['model'].strip()

    # Handle chat completion parameters
    chat_params = {}
    if 'temperature' in request.form:
        try:
            chat_params['temperature'] = float(request.form['temperature'])
        except ValueError:
            return render_template('partials/config_error.html',
                                   error="Temperature must be a valid number")

    if 'max_completion_tokens' in request.form:
        try:
            chat_params['max_completion_tokens'] = int(request.form['max_completion_tokens'])
        except ValueError:
            return render_template('partials/config_error.html',
                                   error="Max completion tokens must be a valid integer")

    if chat_params:
        config['chat_completion_parameters'] = chat_params

    response = api.update_llm_model(provider, tier, config)

    if response.success:
        return render_template('partials/config_success.html',
                               message="LLM model configuration updated successfully")
    else:
        # Handle specific error codes
        if response.error_code == ErrorCodes.VALIDATION_ERROR:
            validation_errors = response.data.get('validation_errors', []) if response.data else []
            error_message = "Validation failed: " + "; ".join([
                f"{err.get('field', 'unknown')}: {err.get('message', 'invalid')}"
                for err in validation_errors
            ])
        elif response.error_code == ErrorCodes.LLM_MODEL_NOT_FOUND:
            error_message = f"LLM model {provider}/{tier} not found"
        else:
            error_message = response.error

        return render_template('partials/config_error.html', error=error_message)


@bp.route('/embedding-models')
def embedding_models():
    """List embedding model configurations (placeholder)"""
    # Using shared constants for future implementation
    config_kind = request.args.get('config_kind', ConfigurationKinds.CONFIGURATION_DIRECTORY)

    return render_template('semantics/embedding_models.html',
                           config_kind=config_kind,
                           message="Embedding model configuration coming soon")

