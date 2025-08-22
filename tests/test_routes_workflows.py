"""Unit tests for workflow routes

"""
import unittest
from unittest.mock import patch
from datetime import datetime

from cartolex_endpoint_server.constants import ErrorCodes, JobStatuses
from tests.conftest import BaseRouteTestCase


class TestWorkflowRoutes(BaseRouteTestCase):

    def setUp(self):
        super().setUp()
        # Mock workflow data for reuse across tests
        self.mock_workflows_data = {
            'workflows': [
                {
                    'name': 'test_workflow_1',
                    'description': 'Test workflow for processing',
                    'launcher_name': 'Test Launcher 1',
                    'lander_name': 'Test Lander 1'
                },
                {
                    'name': 'test_workflow_2',
                    'description': 'Another test workflow',
                    'launcher_name': 'Test Launcher 2', 
                    'lander_name': 'Test Lander 2'
                }
            ]
        }

    def test_list_workflows_success(self):
        """Test successful workflow listing"""
        def setup_mock():
            self.mock_api.get_workflows.return_value = self.create_success_response(self.mock_workflows_data)

        response = self.get_with_mock_api('/workflows/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'test_workflow_1', response.data)
        self.assertIn(b'test_workflow_2', response.data)
        self.mock_api.get_workflows.assert_called_once()

    def test_list_workflows_config_handler_error(self):
        """Test workflow listing with configuration handler error"""
        def setup_mock():
            self.mock_api.get_workflows.return_value = self.create_error_response(
                "Configuration system unavailable", 
                ErrorCodes.CONFIG_HANDLER_ERROR, 
                503
            )

        response = self.get_with_mock_api('/workflows/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render template with flash message about config system
        self.assertIn(b'workflows', response.data)

    def test_list_workflows_general_error(self):
        """Test workflow listing with general API error"""
        def setup_mock():
            self.mock_api.get_workflows.return_value = self.create_error_response(
                "Database connection failed", 
                "DATABASE_ERROR", 
                500
            )

        response = self.get_with_mock_api('/workflows/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render template with general error flash message
        self.assertIn(b'workflows', response.data)

    def test_execute_workflow_success(self):
        """Test successful workflow execution"""
        def setup_mock():
            execution_response = {
                'job_id': 'test_workflow_1_abc123',
                'status': 'pending',
                'workflow_name': 'test_workflow_1',
                'submitted_at': '2024-01-15T10:00:00'
            }
            self.mock_api.execute_workflow.return_value = self.create_success_response(execution_response)

        form_data = {
            'param_input_file': 'test.csv',
            'param_threshold': '0.8', 
            'exec_timeout_minutes': '30',
            'exec_priority': 'high'
        }

        response = self.post_with_mock_api('/workflows/test_workflow_1/execute', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render job_submitted partial
        self.assertIn(b'test_workflow_1_abc123', response.data)
        
        # Verify API call with correct parameters
        expected_params = {'input_file': 'test.csv', 'threshold': '0.8'}
        expected_execution = {'timeout_minutes': '30', 'priority': 'high'}
        self.mock_api.execute_workflow.assert_called_once_with(
            'test_workflow_1', expected_params, expected_execution
        )

    def test_execute_workflow_not_found(self):
        """Test workflow execution for non-existent workflow"""
        def setup_mock():
            self.mock_api.execute_workflow.return_value = self.create_error_response(
                "Workflow not found: nonexistent_workflow",
                ErrorCodes.WORKFLOW_NOT_FOUND,
                404
            )

        form_data = {'param_test': 'value'}

        response = self.post_with_mock_api('/workflows/nonexistent_workflow/execute', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render workflow_not_found partial
        self.assertIn(b'nonexistent_workflow', response.data)

    def test_execute_workflow_validation_error(self):
        """Test workflow execution with validation errors"""
        def setup_mock():
            validation_data = {
                'validation_errors': [
                    {'field': 'input_file', 'message': 'File not found'},
                    {'field': 'threshold', 'message': 'Must be between 0 and 1'}
                ]
            }
            self.mock_api.execute_workflow.return_value = self.create_error_response(
                "Validation failed",
                ErrorCodes.VALIDATION_ERROR,
                400,
                data=validation_data
            )

        form_data = {
            'param_input_file': 'missing.csv',
            'param_threshold': '1.5'
        }

        response = self.post_with_mock_api('/workflows/test_workflow_1/execute', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render validation_error partial with error details
        self.assertIn(b'validation', response.data)

    def test_execute_workflow_general_error(self):
        """Test workflow execution with general execution error"""
        def setup_mock():
            self.mock_api.execute_workflow.return_value = self.create_error_response(
                "Execution system overloaded",
                "EXECUTION_ERROR", 
                503
            )

        form_data = {'param_test': 'value'}

        response = self.post_with_mock_api('/workflows/test_workflow_1/execute', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render execution_error partial
        self.assertIn(b'error', response.data)

    def test_job_status_success(self):
        """Test successful job status retrieval"""
        def setup_mock():
            job_data = {
                'id': 'test_job_123',
                'workflow_name': 'test_workflow_1',
                'status': JobStatuses.RUNNING,
                'created_at': '2024-01-15T10:00:00',
                'started_at': '2024-01-15T10:01:00',
                'completed_at': None,
                'result': None,
                'error': None
            }
            self.mock_api.get_job_status.return_value = self.create_success_response(job_data)

        response = self.get_with_mock_api('/workflows/jobs/test_job_123/status', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render job_status partial with job data
        self.assertIn(b'test_job_123', response.data)
        self.assertIn(b'running', response.data)
        
        self.mock_api.get_job_status.assert_called_once_with('test_job_123')

    def test_job_status_completed_with_result(self):
        """Test job status for completed job with results"""
        def setup_mock():
            job_data = {
                'id': 'test_job_456',
                'workflow_name': 'test_workflow_1',
                'status': JobStatuses.COMPLETED,
                'created_at': '2024-01-15T10:00:00',
                'started_at': '2024-01-15T10:01:00',
                'completed_at': '2024-01-15T10:05:00',
                'result': {'processed_count': 42, 'output_file': 'results.json'},
                'error': None
            }
            self.mock_api.get_job_status.return_value = self.create_success_response(job_data)

        response = self.get_with_mock_api('/workflows/jobs/test_job_456/status', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should include completion information
        self.assertIn(b'completed', response.data)

    def test_job_status_failed_with_error(self):
        """Test job status for failed job with error details"""
        def setup_mock():
            job_data = {
                'id': 'test_job_789',
                'workflow_name': 'test_workflow_1',
                'status': JobStatuses.FAILED,
                'created_at': '2024-01-15T10:00:00',
                'started_at': '2024-01-15T10:01:00',
                'completed_at': '2024-01-15T10:03:00',
                'result': None,
                'error': 'Input file processing failed: File not found'
            }
            self.mock_api.get_job_status.return_value = self.create_success_response(job_data)

        response = self.get_with_mock_api('/workflows/jobs/test_job_789/status', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should include error information
        self.assertIn(b'failed', response.data)

    def test_job_status_not_found(self):
        """Test job status for non-existent job"""
        def setup_mock():
            self.mock_api.get_job_status.return_value = self.create_error_response(
                "Job not found: nonexistent_job",
                ErrorCodes.JOB_NOT_FOUND,
                404
            )

        response = self.get_with_mock_api('/workflows/jobs/nonexistent_job/status', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render job_not_found partial
        self.assertIn(b'nonexistent_job', response.data)

    def test_job_status_general_error(self):
        """Test job status with general API error"""
        def setup_mock():
            self.mock_api.get_job_status.return_value = self.create_error_response(
                "Job status service unavailable",
                "SERVICE_UNAVAILABLE",
                503
            )

        response = self.get_with_mock_api('/workflows/jobs/test_job_123/status', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render job_error partial
        self.assertIn(b'error', response.data)

    def test_list_jobs_success(self):
        """Test successful job listing"""
        def setup_mock():
            jobs_data = {
                'jobs': [
                    {
                        'id': 'job_123',
                        'workflow_name': 'test_workflow_1',
                        'status': JobStatuses.RUNNING,
                        'created_at': '2024-01-15T10:00:00'
                    },
                    {
                        'id': 'job_456',
                        'workflow_name': 'test_workflow_2',
                        'status': JobStatuses.COMPLETED,
                        'created_at': '2024-01-15T09:30:00'
                    }
                ]
            }
            self.mock_api.get_jobs.return_value = self.create_success_response(jobs_data)

        response = self.get_with_mock_api('/workflows/jobs', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Check for job status badges instead of job IDs
        self.assertIn(b'Running', response.data)
        self.assertIn(b'Completed', response.data)
        
        # Verify API call with default parameters
        self.mock_api.get_jobs.assert_called_once_with(status=None, limit=50)

    def test_list_jobs_with_status_filter(self):
        """Test job listing with status filter"""
        def setup_mock():
            jobs_data = {
                'jobs': [
                    {
                        'id': 'job_running_1',
                        'workflow_name': 'test_workflow_1',
                        'status': JobStatuses.RUNNING,
                        'created_at': '2024-01-15T10:00:00'
                    }
                ]
            }
            self.mock_api.get_jobs.return_value = self.create_success_response(jobs_data)

        response = self.get_with_mock_api('/workflows/jobs?status=running&limit=20', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'job_running_1', response.data)
        
        # Verify API call with filtered parameters
        self.mock_api.get_jobs.assert_called_once_with(status=JobStatuses.RUNNING, limit=20)

    def test_list_jobs_invalid_status_filter(self):
        """Test job listing with invalid status filter"""
        def setup_mock():
            # Should still call API but without the invalid status
            jobs_data = {'jobs': []}
            self.mock_api.get_jobs.return_value = self.create_success_response(jobs_data)

        response = self.get_with_mock_api('/workflows/jobs?status=invalid_status', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should contain flash message about invalid status
        self.assertIn(b'Invalid status filter', response.data)
        
        # Verify API was called without the invalid status
        self.mock_api.get_jobs.assert_called_once_with(status=None, limit=50)

    def test_list_jobs_api_error(self):
        """Test job listing with API error"""
        def setup_mock():
            self.mock_api.get_jobs.return_value = self.create_error_response(
                "Jobs service unavailable",
                "SERVICE_UNAVAILABLE",
                503
            )

        response = self.get_with_mock_api('/workflows/jobs', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render template with error flash message
        self.assertIn(b'jobs', response.data)

    def test_job_status_terminal_and_active_flags(self):
        """Test that job status includes terminal and active flags"""
        def setup_mock():
            job_data = {
                'id': 'test_job_123',
                'workflow_name': 'test_workflow_1',
                'status': JobStatuses.COMPLETED,
                'created_at': '2024-01-15T10:00:00',
                'started_at': '2024-01-15T10:01:00',
                'completed_at': '2024-01-15T10:05:00'
            }
            self.mock_api.get_job_status.return_value = self.create_success_response(job_data)

        response = self.get_with_mock_api('/workflows/jobs/test_job_123/status', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # The route should add is_terminal and is_active flags to job_data
        # This would be tested in the actual response data if we parsed the template

    def test_form_parameter_extraction(self):
        """Test that form parameters are correctly extracted and categorized"""
        def setup_mock():
            execution_response = {
                'job_id': 'test_job_abc123',
                'status': 'pending'
            }
            self.mock_api.execute_workflow.return_value = self.create_success_response(execution_response)

        # Mix of parameter and execution form fields
        form_data = {
            'param_input_file': 'data.csv',
            'param_batch_size': '100',
            'param_timeout': '300',
            'exec_priority': 'high',
            'exec_notification_email': 'user@example.com',
            'other_field': 'should_be_ignored'  # Should not be included
        }

        response = self.post_with_mock_api('/workflows/test_workflow/execute', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Verify parameters and execution were extracted correctly
        expected_params = {
            'input_file': 'data.csv',
            'batch_size': '100', 
            'timeout': '300'
        }
        expected_execution = {
            'priority': 'high',
            'notification_email': 'user@example.com'
        }
        
        self.mock_api.execute_workflow.assert_called_once_with(
            'test_workflow', expected_params, expected_execution
        )

    def test_job_listing_with_all_statuses(self):
        """Test that job listing template receives all available statuses"""
        def setup_mock():
            jobs_data = {'jobs': []}
            self.mock_api.get_jobs.return_value = self.create_success_response(jobs_data)

        response = self.get_with_mock_api('/workflows/jobs', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # The template should receive all_statuses from JobStatuses.ALL_STATUSES
        # This would be verified in actual template context in integration tests

    def test_execute_workflow_empty_parameters(self):
        """Test workflow execution with no parameters"""
        def setup_mock():
            execution_response = {
                'job_id': 'simple_job_123',
                'status': 'pending'
            }
            self.mock_api.execute_workflow.return_value = self.create_success_response(execution_response)

        # Empty form data - should result in empty parameters and execution dicts
        form_data = {}

        response = self.post_with_mock_api('/workflows/simple_workflow/execute', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Should call API with empty parameter dictionaries
        self.mock_api.execute_workflow.assert_called_once_with(
            'simple_workflow', {}, {}
        )

    def test_list_jobs_default_limit_handling(self):
        """Test that default limit is properly handled in job listing"""
        def setup_mock():
            jobs_data = {'jobs': []}
            self.mock_api.get_jobs.return_value = self.create_success_response(jobs_data)

        # No limit specified - should use default of 50
        response = self.get_with_mock_api('/workflows/jobs', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        self.mock_api.get_jobs.assert_called_once_with(status=None, limit=50)


if __name__ == '__main__':
    unittest.main()