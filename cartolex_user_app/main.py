"""Main Flask application using shared constants"""

import os
import logging
from flask import Flask, request
from flask_wtf.csrf import CSRFProtect

from cartolex_endpoint_server.constants import ConfigurationKinds, JobStatuses
from cartolex_user_app.services.api_client import CartolexAPI
from cartolex_user_app.utils.template_filters import register_filters
from cartolex_user_app.routes import dashboard, workflows, semantics, io_config
from cartolex_user_app.config import SecurityConfig

# Initialize logger
logger = logging.getLogger(__name__)


def _init_security_middleware(app):
    """Initialize security middleware conditionally
    
    This function safely initializes security middleware only if:
    1. Security is not disabled via configuration
    2. Required packages are available
    3. Configuration is properly set
    """
    if app.config.get('DISABLE_SECURITY', False):
        logger.info("Security middleware disabled via configuration")
        return
    
    # Initialize CORS
    try:
        from flask_cors import CORS
        cors_config = SecurityConfig.get_cors_config(app.config)
        CORS(app, **cors_config)
        logger.info(f"CORS initialized with origins: {cors_config['origins']}")
    except ImportError:
        logger.warning("flask-cors not available, CORS middleware not initialized")
    except Exception as e:
        logger.error(f"Failed to initialize CORS: {e}")
    
    # Initialize Security Headers (Talisman)
    if app.config.get('SECURITY_HEADERS_ENABLED', True):
        try:
            from flask_talisman import Talisman
            talisman_config = SecurityConfig.get_talisman_config(app.config)
            Talisman(app, **talisman_config)
            logger.info(f"Security headers initialized with CSP mode: {app.config.get('CSP_MODE', 'development')}")
        except ImportError:
            logger.warning("flask-talisman not available, security headers not initialized")
        except Exception as e:
            logger.error(f"Failed to initialize security headers: {e}")
    
    # Initialize Rate Limiting
    if app.config.get('RATELIMIT_ENABLED', True):
        try:
            from flask_limiter import Limiter
            from flask_limiter.util import get_remote_address
            
            limiter_config = SecurityConfig.get_limiter_config(app.config)
            limiter = Limiter(
                key_func=get_remote_address,  # Use IP-based rate limiting
                default_limits=limiter_config['default_limits'],
                storage_uri=limiter_config['storage_uri'],
                headers_enabled=limiter_config['headers_enabled']
            )
            limiter.init_app(app)
            
            # Apply API-specific rate limits to all /api/ routes if needed
            api_rate_limit = app.config.get('RATELIMIT_API', '500 per hour')
            
            @limiter.limit(api_rate_limit)
            def api_rate_limit_func():
                pass
            
            # Register rate limit for any potential API routes
            app.before_request_funcs.setdefault(None, []).append(
                lambda: api_rate_limit_func() if '/api/' in (getattr(request, 'path', '') or '') else None
            )
            
            logger.info(f"Rate limiting initialized with limits: {limiter_config['default_limits']}")
        except ImportError:
            logger.warning("flask-limiter not available, rate limiting not initialized")
        except Exception as e:
            logger.error(f"Failed to initialize rate limiting: {e}")


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

    # Initialize security middleware
    _init_security_middleware(app)

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
