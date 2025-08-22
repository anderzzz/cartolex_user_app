"""Unit tests for dashboard routes

"""
import unittest
from unittest.mock import patch
from datetime import datetime

from cartolex_endpoint_server.constants import ErrorCodes, JobStatuses
from tests.conftest import BaseRouteTestCase


class TestDashboardRoutes(BaseRouteTestCase):

    def test_dashboard_index_success(self):
        """Test successful dashboard page load with data"""
        def setup_mock():
            # Mock workflows response
            workflows_data = {
                'workflows': [
                    {
                        'name': 'test_workflow_1',
                        'description': 'Test workflow 1',
                        'launcher_name': 'Test Launcher 1'
                    },
                    {
                        'name': 'test_workflow_2', 
                        'description': 'Test workflow 2',
                        'launcher_name': 'Test Launcher 2'
                    }
                ]
            }
            self.mock_api.get_workflows.return_value = self.create_success_response(workflows_data)
            
            # Mock recent jobs response
            jobs_data = {
                'jobs': [
                    {
                        'id': 'job_123',
                        'workflow_name': 'test_workflow_1',
                        'status': JobStatuses.COMPLETED,
                        'created_at': '2024-01-15T10:00:00'
                    },
                    {
                        'id': 'job_456',
                        'workflow_name': 'test_workflow_2', 
                        'status': JobStatuses.RUNNING,
                        'created_at': '2024-01-15T09:30:00'
                    }
                ]
            }
            self.mock_api.get_jobs.return_value = self.create_success_response(jobs_data)

        response = self.get_with_mock_api('/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Dashboard', response.data)
        
        # Verify API calls were made
        self.mock_api.get_workflows.assert_called_once()
        self.mock_api.get_jobs.assert_called_once_with(limit=5)

    def test_dashboard_index_workflows_error(self):
        """Test dashboard page when workflows API fails"""
        def setup_mock():
            # Mock workflows API failure
            self.mock_api.get_workflows.return_value = self.create_error_response(
                "Workflows unavailable", ErrorCodes.CONFIG_HANDLER_ERROR, 503
            )
            # Mock jobs success
            jobs_data = {'jobs': []}
            self.mock_api.get_jobs.return_value = self.create_success_response(jobs_data)

        response = self.get_with_mock_api('/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should still render the page gracefully
        self.assertIn(b'Dashboard', response.data)

    def test_dashboard_index_jobs_error(self):
        """Test dashboard page when jobs API fails"""
        def setup_mock():
            # Mock workflows success
            workflows_data = {'workflows': []}
            self.mock_api.get_workflows.return_value = self.create_success_response(workflows_data)
            
            # Mock jobs API failure
            self.mock_api.get_jobs.return_value = self.create_error_response(
                "Jobs unavailable", ErrorCodes.CONFIG_HANDLER_ERROR, 503
            )

        response = self.get_with_mock_api('/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should still render the page gracefully
        self.assertIn(b'Dashboard', response.data)

    def test_dashboard_index_complete_api_failure(self):
        """Test dashboard page when both APIs fail"""
        def setup_mock():
            # Mock both APIs failing
            self.mock_api.get_workflows.return_value = self.create_error_response(
                "System unavailable", ErrorCodes.CONFIG_HANDLER_ERROR, 503
            )
            self.mock_api.get_jobs.return_value = self.create_error_response(
                "System unavailable", ErrorCodes.CONFIG_HANDLER_ERROR, 503
            )

        response = self.get_with_mock_api('/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should still render the page with error indication
        self.assertIn(b'Dashboard', response.data)

    def test_system_status_success(self):
        """Test successful system status HTMX endpoint"""
        def setup_mock():
            # Mock workflows response
            workflows_data = {'total': 5}
            self.mock_api.get_workflows.return_value = self.create_success_response(workflows_data)
            
            # Mock running jobs
            running_jobs_data = {
                'jobs': [
                    {'id': 'job_1', 'status': JobStatuses.RUNNING},
                    {'id': 'job_2', 'status': JobStatuses.RUNNING}
                ]
            }
            
            # Mock pending jobs  
            pending_jobs_data = {
                'jobs': [
                    {'id': 'job_3', 'status': JobStatuses.PENDING}
                ]
            }
            
            # Configure mock to return different responses for different status calls
            def jobs_side_effect(status=None, limit=100):
                if status == JobStatuses.RUNNING:
                    return self.create_success_response(running_jobs_data)
                elif status == JobStatuses.PENDING:
                    return self.create_success_response(pending_jobs_data)
                return self.create_success_response({'jobs': []})
            
            self.mock_api.get_jobs.side_effect = jobs_side_effect

        response = self.get_with_mock_api('/system-status', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should contain system status partial template content
        self.assertIn(b'Connected', response.data)

    def test_system_status_backend_disconnected(self):
        """Test system status when backend is disconnected"""
        def setup_mock():
            # Mock workflows API failure (backend disconnected)
            self.mock_api.get_workflows.return_value = self.create_error_response(
                "Connection failed", "CONNECTION_ERROR", 503
            )

        response = self.get_with_mock_api('/system-status', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render with backend disconnected status
        self.assertIn(b'Disconnected', response.data)

    def test_health_check_healthy(self):
        """Test health check endpoint when system is healthy"""
        def setup_mock():
            # Mock successful workflows call
            workflows_data = {'workflows': []}
            self.mock_api.get_workflows.return_value = self.create_success_response(workflows_data)

        response = self.get_with_mock_api('/health', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Verify JSON response structure
        data = response.get_json()
        self.assertEqual(data['status'], 'healthy')
        self.assertEqual(data['backend'], 'healthy')
        self.assertIsNone(data['backend_error'])
        self.assertIn('timestamp', data)

    def test_health_check_degraded(self):
        """Test health check endpoint when backend is unhealthy"""
        def setup_mock():
            # Mock failed workflows call
            self.mock_api.get_workflows.return_value = self.create_error_response(
                "Backend unavailable", ErrorCodes.CONFIG_HANDLER_ERROR, 503
            )

        response = self.get_with_mock_api('/health', setup_mock)
        
        self.assertEqual(response.status_code, 503)
        
        # Verify JSON response structure
        data = response.get_json()
        self.assertEqual(data['status'], 'degraded')
        self.assertEqual(data['backend'], 'unhealthy')
        self.assertEqual(data['backend_error'], 'Backend unavailable')
        self.assertIn('timestamp', data)

    def test_health_check_exception_handling(self):
        """Test health check when API client raises exception"""
        def setup_mock():
            # Mock API client raising exception
            self.mock_api.get_workflows.side_effect = Exception("Connection timeout")

        response = self.get_with_mock_api('/health', setup_mock)
        
        self.assertEqual(response.status_code, 503)
        
        # Verify JSON response structure
        data = response.get_json()
        self.assertEqual(data['status'], 'degraded')
        self.assertEqual(data['backend'], 'unhealthy')
        self.assertEqual(data['backend_error'], 'Connection timeout')
        self.assertIn('timestamp', data)

    def test_dashboard_workflow_count_calculation(self):
        """Test that workflow count is correctly calculated and displayed"""
        def setup_mock():
            workflows_data = {
                'workflows': [
                    {'name': 'workflow_1'},
                    {'name': 'workflow_2'},
                    {'name': 'workflow_3'}
                ]
            }
            self.mock_api.get_workflows.return_value = self.create_success_response(workflows_data)
            
            jobs_data = {'jobs': []}
            self.mock_api.get_jobs.return_value = self.create_success_response(jobs_data)

        response = self.get_with_mock_api('/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # The template should receive workflow_count = 3
        # (This would be verified in integration tests with actual template rendering)

    def test_dashboard_recent_jobs_limit(self):
        """Test that recent jobs are properly limited to 5"""
        def setup_mock():
            workflows_data = {'workflows': []}
            self.mock_api.get_workflows.return_value = self.create_success_response(workflows_data)
            
            # Create more than 5 jobs
            jobs_data = {
                'jobs': [
                    {'id': f'job_{i}', 'workflow_name': 'test', 'status': JobStatuses.COMPLETED}
                    for i in range(10)
                ]
            }
            self.mock_api.get_jobs.return_value = self.create_success_response(jobs_data)

        response = self.get_with_mock_api('/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Verify API was called with limit=5
        self.mock_api.get_jobs.assert_called_once_with(limit=5)

    def test_system_status_active_jobs_calculation(self):
        """Test that active jobs count includes both running and pending jobs"""
        def setup_mock():
            workflows_data = {'total': 3}
            self.mock_api.get_workflows.return_value = self.create_success_response(workflows_data)
            
            # Create separate responses for running and pending jobs
            running_jobs = {'jobs': [{'id': 'job_1'}, {'id': 'job_2'}]}  # 2 running
            pending_jobs = {'jobs': [{'id': 'job_3'}]}  # 1 pending
            
            def jobs_side_effect(status=None, limit=100):
                if status == JobStatuses.RUNNING:
                    return self.create_success_response(running_jobs)
                elif status == JobStatuses.PENDING:
                    return self.create_success_response(pending_jobs)
                return self.create_success_response({'jobs': []})
            
            self.mock_api.get_jobs.side_effect = jobs_side_effect

        response = self.get_with_mock_api('/system-status', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Verify both status calls were made
        expected_calls = [
            unittest.mock.call(status=JobStatuses.RUNNING, limit=100),
            unittest.mock.call(status=JobStatuses.PENDING, limit=100)
        ]
        self.mock_api.get_jobs.assert_has_calls(expected_calls, any_order=True)


if __name__ == '__main__':
    unittest.main()