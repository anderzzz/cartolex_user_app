"""Main Flask application using shared constants"""

from flask import Flask
from cartolex_endpoint_server.constants import ConfigurationKinds
from cartolex_user_app.services.api_client import CartolexAPI
from cartolex_user_app.utils.template_filters import register_filters
from cartolex_user_app.routes import dashboard, workflows, semantics, io_config


def create_app():
    """Application factory"""
    app = Flask(__name__)
    app.config.from_object('config.settings.Config')

    # Initialize API client
    api_client = CartolexAPI(app.config['CARTOLEX_API_BASE_URL'])
    app.api_client = api_client

    # Register template filters
    register_filters(app)

    # Register blueprints
    app.register_blueprint(dashboard.bp)
    app.register_blueprint(workflows.bp, url_prefix='/workflows')
    app.register_blueprint(semantics.bp, url_prefix='/semantics')
    app.register_blueprint(io_config.bp, url_prefix='/io')

    # Make shared constants available to templates
    @app.context_processor
    def inject_constants():
        return {
            'JOB_STATUSES': JobStatuses,
            'CONFIG_KINDS': ConfigurationKinds,
        }

    return app
