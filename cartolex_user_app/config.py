"""Flask configuration settings"""
import os


class Config:
    """Base configuration class"""
    SECRET_KEY = os.environ.get('FLASK_SECRET_USER_APP') or 'dev-secret-key-change-in-production'
    CARTOLEX_API_BASE_URL = os.environ.get('CARTOLEX_API_BASE_URL') or 'http://localhost:5555'
    
    # CORS settings
    CORS_ORIGINS = os.environ.get('USER_APP_CORS_ORIGINS', 'http://localhost:3000,http://localhost:3001,http://127.0.0.1:3000').split(',')
    
    # Security settings
    SECURITY_HEADERS_ENABLED = os.environ.get('USER_APP_SECURITY_HEADERS_ENABLED', 'true').lower() == 'true'
    CSP_MODE = os.environ.get('USER_APP_CSP_MODE', 'report-only')
    DISABLE_SECURITY = os.environ.get('USER_APP_DISABLE_SECURITY', 'false').lower() == 'true'
    
    # Rate limiting (frontend has lighter limits than API)
    RATELIMIT_DEFAULT = os.environ.get('USER_APP_RATELIMIT_DEFAULT', '1000 per hour')
    RATELIMIT_ENABLED = os.environ.get('USER_APP_RATELIMIT_ENABLED', 'false').lower() == 'true'


class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True
    SECURITY_HEADERS_ENABLED = False
    RATELIMIT_ENABLED = False
    DISABLE_SECURITY = True


class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False
    SECURITY_HEADERS_ENABLED = True
    RATELIMIT_ENABLED = True
    DISABLE_SECURITY = False
    
    # Override with production-safe defaults
    CSP_MODE = os.environ.get('USER_APP_CSP_MODE', 'enforce')
    CORS_ORIGINS = os.environ.get('USER_APP_CORS_ORIGINS', 'https://yourdomain.com').split(',')
