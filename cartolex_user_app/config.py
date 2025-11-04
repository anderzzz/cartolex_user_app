"""Flask configuration settings with security"""
import os


class Config:
    """Base configuration class"""
    DEBUG = False
    
    # Core Flask settings
    SECRET_KEY = os.environ.get('FLASK_SECRET_KEY_USER_APP') or 'dev-secret-key-change-in-production'
    CARTOLEX_API_BASE_URL = os.environ.get('CARTOLEX_API_BASE_URL') or 'http://localhost:5555'
    
    # CORS settings
    CORS_ORIGINS = os.environ.get('CORS_ORIGINS_USER_APP', 'http://localhost:3000,http://localhost:3001,http://127.0.0.1:3000').split(',')
    
    # Rate limiting (shared infrastructure)
    RATELIMIT_STORAGE_URL = os.environ.get('RATELIMIT_STORAGE_URL')  # Shared Redis/storage
    RATELIMIT_DEFAULT = os.environ.get('RATELIMIT_DEFAULT', '1000 per hour')
    RATELIMIT_API = os.environ.get('RATELIMIT_API', '500 per hour')
    
    # CSP mode (shared security posture)
    CSP_MODE = os.environ.get('CSP_MODE', 'development')


class SecurityConfig:
    """Security-specific configuration"""
    
    @staticmethod
    def get_cors_config(app_config=None):
        """Get CORS configuration based on app config"""
        # Get CORS_ORIGINS from app config or fall back to reading environment directly
        origins = app_config.get('CORS_ORIGINS') if app_config else Config.CORS_ORIGINS
        
        return {
            'origins': origins,
            'methods': ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            'allow_headers': ['Content-Type', 'Authorization', 'X-CSRFToken'],
            'supports_credentials': True  # Enable for CSRF token support
        }
    
    @staticmethod
    def get_talisman_config(app_config=None):
        """Get Talisman (security headers) configuration"""
        # Get CSP_MODE from app config or use 'development' as default
        csp_mode = app_config.get('CSP_MODE', 'development') if app_config else Config.CSP_MODE
        
        if csp_mode == 'development':
            # Relaxed CSP for development with Tailwind CSS and HTMX support
            csp = {
                'default-src': "'self' 'unsafe-inline' 'unsafe-eval'",
                'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdn.tailwindcss.com",
                'style-src': "'self' 'unsafe-inline' https://cdn.tailwindcss.com",
                'img-src': "'self' data: blob:",
                'connect-src': "'self'",
                'font-src': "'self' data:"
            }
        else:
            # Strict CSP for production
            csp = {
                'default-src': "'self'",
                'script-src': "'self' https://unpkg.com",
                'style-src': "'self' 'unsafe-inline' https://cdn.tailwindcss.com",
                'img-src': "'self' data:",
                'connect-src': "'self'",
                'font-src': "'self' data:"
            }
        
        return {
            'force_https': app_config.get('TALISMAN_FORCE_HTTPS', False) if app_config else False,
            'content_security_policy': csp,
            'content_security_policy_nonce_in': [],
            'feature_policy': {
                'geolocation': "'none'",
                'camera': "'none'",
                'microphone': "'none'"
            }
        }
    
    @staticmethod
    def get_limiter_config(app_config=None):
        """Get rate limiter configuration"""
        # Get rate limiting settings from app config or fall back to class defaults
        default_limits = app_config.get('RATELIMIT_DEFAULT') if app_config else Config.RATELIMIT_DEFAULT
        storage_uri = app_config.get('RATELIMIT_STORAGE_URL') if app_config else Config.RATELIMIT_STORAGE_URL
            
        return {
            'default_limits': [default_limits],
            'storage_uri': storage_uri,
            'headers_enabled': True
        }


class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True
    TEMPLATES_AUTO_RELOAD = True  # Force template reloading in development

    # Development-specific security settings
    SECURITY_HEADERS_ENABLED = os.environ.get('SECURITY_HEADERS_ENABLED_USER_APP', 'false').lower() == 'true'
    RATELIMIT_ENABLED = os.environ.get('RATELIMIT_ENABLED_USER_APP', 'false').lower() == 'true'
    DISABLE_SECURITY = os.environ.get('DISABLE_SECURITY_USER_APP', 'true').lower() == 'true'
    # Override CSP mode for development
    CSP_MODE = 'development'
    DEVELOPMENT_MODE = True


class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False
    
    # Enforce security in production (hardcoded for safety)
    SECURITY_HEADERS_ENABLED = True
    RATELIMIT_ENABLED = True
    DISABLE_SECURITY = False
    DEVELOPMENT_MODE = False
    
    # Override CSP mode for production
    CSP_MODE = os.environ.get('CSP_MODE', 'strict')
    
    # Override with production-safe defaults
    CORS_ORIGINS = os.environ.get('CORS_ORIGINS_USER_APP', 'https://yourdomain.com').split(',')
    
    # Force HTTPS in production
    TALISMAN_FORCE_HTTPS = True