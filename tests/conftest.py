"""Shared test fixtures for cartolex_user_app tests

"""
import unittest
from unittest.mock import MagicMock

from cartolex_user_app.main import create_app
from cartolex_user_app.services.api_client import CartolexAPI, APIResponse


class BaseRouteTestCase(unittest.TestCase):
    """Base test case for route testing with shared setup"""

    def setUp(self):
        """Set up test client and mock API"""
        # Create test app
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.app.config['WTF_CSRF_ENABLED'] = False  # Disable CSRF for testing
        self.client = self.app.test_client()
        
        # Add mock csrf_token function to avoid template errors
        def mock_csrf_token():
            return 'test-csrf-token'
        
        self.app.jinja_env.globals['csrf_token'] = mock_csrf_token
        
        # Create mock API client
        self.mock_api = MagicMock(spec=CartolexAPI)
        
        # Patch the API client in the app context
        with self.app.app_context():
            self.app.api_client = self.mock_api

    def create_success_response(self, data):
        """Helper to create successful API response"""
        return APIResponse(success=True, data=data, status_code=200)

    def create_error_response(self, error, error_code=None, status_code=500, data=None):
        """Helper to create error API response"""
        response = APIResponse(
            success=False, 
            error=error, 
            error_code=error_code, 
            status_code=status_code
        )
        if data:
            response.data = data
        return response

    def get_with_mock_api(self, route, mock_setup_func=None):
        """Helper to make GET request with mocked API"""
        with self.app.test_client() as client:
            with self.app.app_context():
                # Set up the API mock
                if mock_setup_func:
                    mock_setup_func()
                self.app.api_client = self.mock_api
                return client.get(route)

    def post_with_mock_api(self, route, data=None, mock_setup_func=None):
        """Helper to make POST request with mocked API"""
        with self.app.test_client() as client:
            with self.app.app_context():
                # Set up the API mock
                if mock_setup_func:
                    mock_setup_func()
                self.app.api_client = self.mock_api
                return client.post(route, data=data)

    def put_with_mock_api(self, route, data=None, mock_setup_func=None):
        """Helper to make PUT request with mocked API"""
        with self.app.test_client() as client:
            with self.app.app_context():
                # Set up the API mock
                if mock_setup_func:
                    mock_setup_func()
                self.app.api_client = self.mock_api
                return client.put(route, data=data)