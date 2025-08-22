"""Unit tests for semantics configuration routes

"""
import unittest
from unittest.mock import patch

from cartolex_endpoint_server.constants import ErrorCodes, ConfigurationKinds
from tests.conftest import BaseRouteTestCase


class TestSemanticsRoutes(BaseRouteTestCase):

    def test_semantics_index_success(self):
        """Test successful semantics main page load"""
        response = self.get_with_mock_api('/semantics/', lambda: None)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'semantics', response.data)

    def test_llm_models_success(self):
        """Test successful LLM models listing"""
        def setup_mock():
            models_data = {
                'openai': {
                    'basic': {
                        'model': 'gpt-3.5-turbo',
                        'chat_completion_parameters': {
                            'temperature': 0.7,
                            'max_completion_tokens': 1000
                        }
                    }
                },
                'anthropic': {
                    'advanced': {
                        'model': 'claude-3-sonnet',
                        'chat_completion_parameters': {
                            'temperature': 0.8,
                            'max_completion_tokens': 2000
                        }
                    }
                }
            }
            self.mock_api.get_llm_models.return_value = self.create_success_response(models_data)

        response = self.get_with_mock_api('/semantics/llm-models', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'openai', response.data)
        self.assertIn(b'anthropic', response.data)
        
        # Verify API call with default config kind
        self.mock_api.get_llm_models.assert_called_once_with(ConfigurationKinds.CONFIGURATION_DIRECTORY)

    def test_llm_models_with_config_kind_filter(self):
        """Test LLM models listing with config_kind parameter"""
        def setup_mock():
            models_data = {}  # Empty dictionary for no models
            self.mock_api.get_llm_models.return_value = self.create_success_response(models_data)

        config_kind = 'cartolex source configuration'
        response = self.get_with_mock_api(f'/semantics/llm-models?config_kind={config_kind}', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Verify API call with specified config kind
        self.mock_api.get_llm_models.assert_called_once_with(config_kind)

    def test_llm_models_invalid_config_kind(self):
        """Test LLM models listing with invalid config_kind"""
        def setup_mock():
            models_data = {}  # Empty dictionary for no models
            self.mock_api.get_llm_models.return_value = self.create_success_response(models_data)

        response = self.get_with_mock_api('/semantics/llm-models?config_kind=invalid_kind', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should flash error message and use default config kind
        self.assertIn(b'LLM Models', response.data)
        self.assertIn(b'Invalid configuration kind', response.data)
        
        # Should fall back to default config kind
        self.mock_api.get_llm_models.assert_called_once_with(ConfigurationKinds.CONFIGURATION_DIRECTORY)

    def test_llm_models_config_handler_error(self):
        """Test LLM models listing with configuration handler error"""
        def setup_mock():
            self.mock_api.get_llm_models.return_value = self.create_error_response(
                "Configuration system unavailable",
                ErrorCodes.CONFIG_HANDLER_ERROR,
                503
            )

        response = self.get_with_mock_api('/semantics/llm-models', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render template with error message and models=None
        self.assertIn(b'LLM Models', response.data)
        self.assertIn(b'Configuration system unavailable', response.data)

    def test_llm_models_general_error(self):
        """Test LLM models listing with general API error"""
        def setup_mock():
            self.mock_api.get_llm_models.return_value = self.create_error_response(
                "Database connection failed",
                "DATABASE_ERROR",
                500
            )

        response = self.get_with_mock_api('/semantics/llm-models', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render template with general error flash message
        self.assertIn(b'LLM Models', response.data)
        self.assertIn(b'Error loading LLM models', response.data)

    def test_edit_llm_model_success(self):
        """Test successful LLM model edit page"""
        def setup_mock():
            model_data = {
                'provider': 'openai',
                'tier': 'basic',
                'model': 'gpt-3.5-turbo',
                'chat_completion_parameters': {
                    'temperature': 0.7,
                    'max_completion_tokens': 1000
                },
                'configuration_kind': ConfigurationKinds.CONFIGURATION_DIRECTORY
            }
            self.mock_api.get_llm_model.return_value = self.create_success_response(model_data)

        response = self.get_with_mock_api('/semantics/llm-models/openai/basic', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'gpt-3.5-turbo', response.data)
        
        # Verify API call with default config kind
        self.mock_api.get_llm_model.assert_called_once_with(
            'openai', 'basic', ConfigurationKinds.CONFIGURATION_DIRECTORY
        )

    def test_edit_llm_model_with_config_kind(self):
        """Test LLM model edit with specific config_kind"""
        def setup_mock():
            model_data = {
                'provider': 'anthropic',
                'tier': 'advanced',
                'model': 'claude-3-sonnet'
            }
            self.mock_api.get_llm_model.return_value = self.create_success_response(model_data)

        config_kind = 'cartolex source configuration'
        response = self.get_with_mock_api(
            f'/semantics/llm-models/anthropic/advanced?config_kind={config_kind}',
            setup_mock
        )
        
        self.assertEqual(response.status_code, 200)
        
        # Verify API call with specified config kind
        self.mock_api.get_llm_model.assert_called_once_with('anthropic', 'advanced', config_kind)

    def test_edit_llm_model_not_found(self):
        """Test LLM model edit for non-existent model"""
        def setup_mock():
            self.mock_api.get_llm_model.return_value = self.create_error_response(
                "LLM model nonexistent/tier not found",
                ErrorCodes.LLM_MODEL_NOT_FOUND,
                404
            )

        response = self.get_with_mock_api('/semantics/llm-models/nonexistent/tier', setup_mock)
        
        self.assertEqual(response.status_code, 302)  # Redirect
        # Should redirect to llm_models page with flash message

    def test_edit_llm_model_config_handler_error(self):
        """Test LLM model edit with config handler error"""
        def setup_mock():
            self.mock_api.get_llm_model.return_value = self.create_error_response(
                "Configuration system unavailable",
                ErrorCodes.CONFIG_HANDLER_ERROR,
                503
            )

        response = self.get_with_mock_api('/semantics/llm-models/openai/basic', setup_mock)
        
        self.assertEqual(response.status_code, 302)  # Redirect
        # Should redirect to llm_models page with flash message

    def test_edit_llm_model_general_error(self):
        """Test LLM model edit with general error"""
        def setup_mock():
            self.mock_api.get_llm_model.return_value = self.create_error_response(
                "Service temporarily unavailable",
                "SERVICE_ERROR",
                503
            )

        response = self.get_with_mock_api('/semantics/llm-models/openai/basic', setup_mock)
        
        self.assertEqual(response.status_code, 302)  # Redirect
        # Should redirect to llm_models page with flash message

    def test_update_llm_model_success(self):
        """Test successful LLM model update via POST"""
        def setup_mock():
            update_response = {
                'message': 'LLM model configuration updated successfully',
                'provider': 'openai',
                'tier': 'basic'
            }
            self.mock_api.update_llm_model.return_value = self.create_success_response(update_response)

        form_data = {
            'model': 'gpt-4',
            'temperature': '0.8',
            'max_completion_tokens': '2000'
        }

        response = self.post_with_mock_api('/semantics/llm-models/openai/basic', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_success partial
        self.assertIn(b'success', response.data)
        
        # Verify API call with correct configuration
        expected_config = {
            'model': 'gpt-4',
            'chat_completion_parameters': {
                'temperature': 0.8,
                'max_completion_tokens': 2000
            }
        }
        self.mock_api.update_llm_model.assert_called_once_with('openai', 'basic', expected_config)

    def test_update_llm_model_via_put(self):
        """Test successful LLM model update via PUT"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_llm_model.return_value = self.create_success_response(update_response)

        form_data = {
            'model': 'claude-3-opus',
            'temperature': '0.7'
        }

        response = self.put_with_mock_api('/semantics/llm-models/anthropic/advanced', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_success partial
        self.assertIn(b'success', response.data)

    def test_update_llm_model_invalid_temperature(self):
        """Test LLM model update with invalid temperature value"""
        form_data = {
            'model': 'gpt-4',
            'temperature': 'invalid_number',
            'max_completion_tokens': '1000'
        }

        response = self.post_with_mock_api('/semantics/llm-models/openai/basic', form_data, lambda: None)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial
        self.assertIn(b'Temperature must be a valid number', response.data)
        
        # Should not call API
        self.mock_api.update_llm_model.assert_not_called()

    def test_update_llm_model_invalid_max_tokens(self):
        """Test LLM model update with invalid max_completion_tokens value"""
        form_data = {
            'model': 'gpt-4',
            'temperature': '0.7',
            'max_completion_tokens': 'not_an_integer'
        }

        response = self.post_with_mock_api('/semantics/llm-models/openai/basic', form_data, lambda: None)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial
        self.assertIn(b'Max completion tokens must be a valid integer', response.data)
        
        # Should not call API
        self.mock_api.update_llm_model.assert_not_called()

    def test_update_llm_model_validation_error(self):
        """Test LLM model update with validation errors from API"""
        def setup_mock():
            validation_data = {
                'validation_errors': [
                    {'field': 'temperature', 'message': 'Must be between 0 and 2'},
                    {'field': 'model', 'message': 'Invalid model name'}
                ]
            }
            self.mock_api.update_llm_model.return_value = self.create_error_response(
                "Validation failed",
                ErrorCodes.VALIDATION_ERROR,
                400,
                data=validation_data
            )

        form_data = {
            'model': 'invalid-model',
            'temperature': '3.0'
        }

        response = self.post_with_mock_api('/semantics/llm-models/openai/basic', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial with validation details
        self.assertIn(b'Validation failed', response.data)

    def test_update_llm_model_not_found_error(self):
        """Test LLM model update for non-existent model"""
        def setup_mock():
            self.mock_api.update_llm_model.return_value = self.create_error_response(
                "LLM model nonexistent/tier not found",
                ErrorCodes.LLM_MODEL_NOT_FOUND,
                404
            )

        form_data = {'model': 'gpt-4'}

        response = self.post_with_mock_api('/semantics/llm-models/nonexistent/tier', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial
        self.assertIn(b'not found', response.data)

    def test_update_llm_model_general_error(self):
        """Test LLM model update with general API error"""
        def setup_mock():
            self.mock_api.update_llm_model.return_value = self.create_error_response(
                "Update service unavailable",
                "SERVICE_ERROR",
                503
            )

        form_data = {'model': 'gpt-4'}

        response = self.post_with_mock_api('/semantics/llm-models/openai/basic', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial with general error
        self.assertIn(b'error', response.data)

    def test_update_llm_model_partial_config(self):
        """Test LLM model update with only some fields provided"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_llm_model.return_value = self.create_success_response(update_response)

        # Only provide model name, no chat parameters
        form_data = {'model': 'gpt-4-turbo'}

        response = self.post_with_mock_api('/semantics/llm-models/openai/basic', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Should only include model in config, no chat_completion_parameters
        expected_config = {'model': 'gpt-4-turbo'}
        self.mock_api.update_llm_model.assert_called_once_with('openai', 'basic', expected_config)

    def test_update_llm_model_only_chat_params(self):
        """Test LLM model update with only chat completion parameters"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_llm_model.return_value = self.create_success_response(update_response)

        # Only provide chat parameters, no model
        form_data = {
            'temperature': '0.9',
            'max_completion_tokens': '1500'
        }

        response = self.post_with_mock_api('/semantics/llm-models/openai/basic', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Should only include chat_completion_parameters in config
        expected_config = {
            'chat_completion_parameters': {
                'temperature': 0.9,
                'max_completion_tokens': 1500
            }
        }
        self.mock_api.update_llm_model.assert_called_once_with('openai', 'basic', expected_config)

    def test_update_llm_model_empty_form(self):
        """Test LLM model update with completely empty form"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_llm_model.return_value = self.create_success_response(update_response)

        # Empty form data
        form_data = {}

        response = self.post_with_mock_api('/semantics/llm-models/openai/basic', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Should call API with empty config
        self.mock_api.update_llm_model.assert_called_once_with('openai', 'basic', {})

    def test_embedding_models_placeholder(self):
        """Test embedding models placeholder page"""
        response = self.get_with_mock_api('/semantics/embedding-models', lambda: None)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'embedding', response.data)
        # Should include placeholder message
        self.assertIn(b'coming soon', response.data)

    def test_embedding_models_with_config_kind(self):
        """Test embedding models with config_kind parameter"""
        config_kind = 'cartolex source configuration'
        response = self.get_with_mock_api(f'/semantics/embedding-models?config_kind={config_kind}', lambda: None)
        
        self.assertEqual(response.status_code, 200)
        # Should render with specified config_kind
        self.assertIn(b'embedding', response.data)

    def test_update_llm_model_whitespace_handling(self):
        """Test that form fields with whitespace are properly stripped"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_llm_model.return_value = self.create_success_response(update_response)

        # Form data with leading/trailing whitespace
        form_data = {
            'model': '  gpt-4  ',
            'temperature': '0.7',
            'max_completion_tokens': '1000'
        }

        response = self.post_with_mock_api('/semantics/llm-models/openai/basic', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Should strip whitespace from model name
        expected_config = {
            'model': 'gpt-4',
            'chat_completion_parameters': {
                'temperature': 0.7,
                'max_completion_tokens': 1000
            }
        }
        self.mock_api.update_llm_model.assert_called_once_with('openai', 'basic', expected_config)


if __name__ == '__main__':
    unittest.main()