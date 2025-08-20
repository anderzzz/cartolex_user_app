"""Flask configuration settings"""
import os


class Config:
    """Basic configuration class"""
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    CARTOLEX_API_BASE_URL = os.environ.get('CARTOLEX_API_BASE_URL') or 'http://localhost:5000/api/v1'


class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True


class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False