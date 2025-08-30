"""Main Flask application using shared constants"""

import os
from flask import Flask
from flask_wtf.csrf import CSRFProtect

from cartolex_endpoint_server.constants import ConfigurationKinds, JobStatuses
from cartolex_user_app.services.api_client import CartolexAPI
from cartolex_user_app.utils.template_filters import register_filters
from cartolex_user_app.routes import dashboard, workflows, semantics, io_config


def create_app(config_class=None):
    """Application factory"""

    basedir = os.path.abspath(os.path.dirname(__file__))
    template_dir = os.path.join(basedir, 'templates')
    static_dir = os.path.join(basedir, 'static')
    
    app = Flask(__name__, 
                template_folder=template_dir,
                static_folder=static_dir)
    
    # Load the specified config class, or default to base Config
    if config_class:
        app.config.from_object(config_class)
    else:
        app.config.from_object('cartolex_user_app.config.Config')

    # Initialize CSRF protection
    csrf = CSRFProtect(app)

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
