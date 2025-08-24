"""Unit tests for IO configuration routes

"""
import unittest

from cartolex_endpoint_server.constants import ErrorCodes, ConfigurationKinds
from conftest import BaseRouteTestCase


class TestIOConfigRoutes(BaseRouteTestCase):

    def setUp(self):
        super().setUp()
        # Mock database configuration data for reuse
        self.mock_config_data = {
            'configurations': [
                {
                    'endpoint': 'standard_rawtext_local_config',
                    'db_type': 'mongo',
                    'db_kind': 'local',
                    'config': {
                        'host': 'localhost',
                        'port': 27017,
                        'database': 'cartolex_test',
                        'ssl': False
                    }
                },
                {
                    'endpoint': 'vector_store_config', 
                    'db_type': 'qdrant',
                    'db_kind': 'cloud',
                    'config': {
                        'host': 'qdrant.example.com',
                        'port': 6333,
                        'collection': 'embeddings',
                        'ssl': True
                    }
                }
            ]
        }

    def test_io_config_index_success(self):
        """Test successful IO configuration index page"""
        def setup_mock():
            self.mock_api.get_database_configs.return_value = self.create_success_response(self.mock_config_data)

        response = self.get_with_mock_api('/io/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'standard_rawtext_local_config', response.data)
        self.assertIn(b'vector_store_config', response.data)
        
        # Verify API call with default config kind
        self.mock_api.get_database_configs.assert_called_once_with(ConfigurationKinds.CONFIGURATION_DIRECTORY)

    def test_io_config_index_with_config_kind_filter(self):
        """Test IO config index with config_kind parameter"""
        def setup_mock():
            config_data = {'configurations': []}
            self.mock_api.get_database_configs.return_value = self.create_success_response(config_data)

        config_kind = 'cartolex source configuration'
        response = self.get_with_mock_api(f'/io/?config_kind={config_kind}', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Verify API call with specified config kind
        self.mock_api.get_database_configs.assert_called_once_with(config_kind)

    def test_io_config_index_invalid_config_kind(self):
        """Test IO config index with invalid config_kind"""
        def setup_mock():
            config_data = {'configurations': []}
            self.mock_api.get_database_configs.return_value = self.create_success_response(config_data)

        response = self.get_with_mock_api('/io/?config_kind=invalid_kind', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should flash error message and use default config kind
        self.assertIn(b'io', response.data)
        
        # Should fall back to default config kind
        self.mock_api.get_database_configs.assert_called_once_with(ConfigurationKinds.CONFIGURATION_DIRECTORY)

    def test_io_config_index_config_handler_error(self):
        """Test IO config index with configuration handler error"""
        def setup_mock():
            self.mock_api.get_database_configs.return_value = self.create_error_response(
                "Configuration system unavailable",
                ErrorCodes.CONFIG_HANDLER_ERROR,
                503
            )

        response = self.get_with_mock_api('/io/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render template with error message and empty configs
        self.assertIn(b'io', response.data)

    def test_io_config_index_general_error(self):
        """Test IO config index with general API error"""
        def setup_mock():
            self.mock_api.get_database_configs.return_value = self.create_error_response(
                "Database connection failed",
                "DATABASE_ERROR",
                500
            )

        response = self.get_with_mock_api('/io/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render template with general error flash message
        self.assertIn(b'io', response.data)

    def test_list_endpoint_configs_success(self):
        """Test successful endpoint configurations listing"""
        def setup_mock():
            endpoint_configs = {
                'configurations': [
                    {
                        'db_type': 'mongo',
                        'db_kind': 'local',
                        'config': {'host': 'localhost', 'port': 27017}
                    },
                    {
                        'db_type': 'mongo',
                        'db_kind': 'cloud',
                        'config': {'host': 'cloud.mongo.com', 'port': 27017}
                    }
                ]
            }
            self.mock_api.get_endpoint_configs.return_value = self.create_success_response(endpoint_configs)

        response = self.get_with_mock_api('/io/test_endpoint', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'test_endpoint', response.data)
        self.assertIn(b'mongo', response.data)
        
        self.mock_api.get_endpoint_configs.assert_called_once_with('test_endpoint')

    def test_list_endpoint_configs_not_found(self):
        """Test endpoint configurations for non-existent endpoint"""
        def setup_mock():
            self.mock_api.get_endpoint_configs.return_value = self.create_error_response(
                "Endpoint 'nonexistent' not found",
                ErrorCodes.ENDPOINT_NOT_FOUND,
                404
            )

        response = self.get_with_mock_api('/io/nonexistent', setup_mock)
        
        self.assertEqual(response.status_code, 302)  # Redirect to index
        # Should redirect to io_config.index with flash message

    def test_list_endpoint_configs_general_error(self):
        """Test endpoint configurations with general API error"""
        def setup_mock():
            self.mock_api.get_endpoint_configs.return_value = self.create_error_response(
                "Service temporarily unavailable",
                "SERVICE_ERROR",
                503
            )

        response = self.get_with_mock_api('/io/test_endpoint', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render template with error message and empty configs
        self.assertIn(b'test_endpoint Configurations', response.data)
        self.assertIn(b'Error loading endpoint configurations', response.data)

    def test_edit_config_success(self):
        """Test successful database configuration edit page"""
        def setup_mock():
            config_data = {
                'endpoint': 'test_endpoint',
                'db_type': 'mongo',
                'db_kind': 'local',
                'config': {
                    'host': 'localhost',
                    'port': 27017,
                    'database': 'test_db',
                    'username': 'test_user',
                    'ssl': False,
                    'timeout': 30
                }
            }
            self.mock_api.get_database_config.return_value = self.create_success_response(config_data)

        response = self.get_with_mock_api('/io/test_endpoint/mongo/local', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'localhost', response.data)
        self.assertIn(b'test_db', response.data)
        
        self.mock_api.get_database_config.assert_called_once_with('test_endpoint', 'mongo', 'local')

    def test_edit_config_not_found(self):
        """Test database configuration edit for non-existent config"""
        def setup_mock():
            self.mock_api.get_database_config.return_value = self.create_error_response(
                "Configuration test_endpoint/mongo/nonexistent not found",
                ErrorCodes.ENDPOINT_NOT_FOUND,
                404
            )

        response = self.get_with_mock_api('/io/test_endpoint/mongo/nonexistent', setup_mock)
        
        self.assertEqual(response.status_code, 302)  # Redirect to index
        # Should redirect to io_config.index with flash message

    def test_edit_config_config_handler_error(self):
        """Test database configuration edit with config handler error"""
        def setup_mock():
            self.mock_api.get_database_config.return_value = self.create_error_response(
                "Configuration system unavailable",
                ErrorCodes.CONFIG_HANDLER_ERROR,
                503
            )

        response = self.get_with_mock_api('/io/test_endpoint/mongo/local', setup_mock)
        
        self.assertEqual(response.status_code, 302)  # Redirect to index
        # Should redirect to io_config.index with flash message

    def test_edit_config_general_error(self):
        """Test database configuration edit with general error"""
        def setup_mock():
            self.mock_api.get_database_config.return_value = self.create_error_response(
                "Service temporarily unavailable",
                "SERVICE_ERROR",
                503
            )

        response = self.get_with_mock_api('/io/test_endpoint/mongo/local', setup_mock)
        
        self.assertEqual(response.status_code, 302)  # Redirect to index
        # Should redirect to io_config.index with flash message

    def test_update_config_success(self):
        """Test successful database configuration update via POST"""
        def setup_mock():
            update_response = {
                'message': 'Database configuration updated successfully',
                'endpoint': 'test_endpoint',
                'db_type': 'mongo',
                'db_kind': 'local'
            }
            self.mock_api.update_database_config.return_value = self.create_success_response(update_response)

        form_data = {
            'config_host': 'new-host.com',
            'config_port': '27017',
            'config_database': 'new_database',
            'config_username': 'new_user',
            'config_ssl': 'true',
            'config_timeout': '60'
        }

        response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_success partial
        self.assertIn(b'success', response.data)
        
        # Verify API call with correct configuration
        expected_config = {
            'host': 'new-host.com',
            'port': 27017,
            'database': 'new_database',
            'username': 'new_user',
            'ssl': True,
            'timeout': 60
        }
        self.mock_api.update_database_config.assert_called_once_with(
            'test_endpoint', 'mongo', 'local', expected_config
        )

    def test_update_config_via_put(self):
        """Test successful database configuration update via PUT"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_database_config.return_value = self.create_success_response(update_response)

        form_data = {
            'config_host': 'updated-host.com',
            'config_port': '6333'
        }

        response = self.put_with_mock_api('/io/test_endpoint/qdrant/cloud', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_success partial
        self.assertIn(b'success', response.data)

    def test_update_config_invalid_port(self):
        """Test database configuration update with invalid port value"""
        form_data = {
            'config_host': 'localhost',
            'config_port': 'invalid_port',
            'config_database': 'test_db'
        }

        response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, lambda: None)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial
        self.assertIn(b'port must be a valid number', response.data)
        
        # Should not call API
        self.mock_api.update_database_config.assert_not_called()

    def test_update_config_invalid_timeout(self):
        """Test database configuration update with invalid timeout value"""
        form_data = {
            'config_host': 'localhost',
            'config_timeout': 'not_a_number'
        }

        response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, lambda: None)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial
        self.assertIn(b'timeout must be a valid number', response.data)
        
        # Should not call API
        self.mock_api.update_database_config.assert_not_called()

    def test_update_config_ssl_boolean_handling(self):
        """Test that SSL field is properly converted to boolean"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_database_config.return_value = self.create_success_response(update_response)

        # Test various boolean representations
        test_cases = [
            ('true', True),
            ('1', True),
            ('yes', True),
            ('on', True),
            ('false', False),
            ('0', False),
            ('no', False),
            ('off', False),
            ('', False)
        ]

        for ssl_value, expected_bool in test_cases:
            form_data = {
                'config_host': 'localhost',
                'config_ssl': ssl_value
            }

            response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, setup_mock)
            
            self.assertEqual(response.status_code, 200)
            
            # Verify SSL was converted to correct boolean
            expected_config = {'host': 'localhost', 'ssl': expected_bool}
            self.mock_api.update_database_config.assert_called_with(
                'test_endpoint', 'mongo', 'local', expected_config
            )
            
            # Reset mock for next iteration
            self.mock_api.reset_mock()

    def test_update_config_validation_error(self):
        """Test database configuration update with validation errors from API"""
        def setup_mock():
            validation_data = {
                'validation_errors': [
                    {'field': 'host', 'message': 'Invalid hostname format'},
                    {'field': 'port', 'message': 'Port must be between 1 and 65535'}
                ]
            }
            self.mock_api.update_database_config.return_value = self.create_error_response(
                "Validation failed",
                ErrorCodes.VALIDATION_ERROR,
                400,
                data=validation_data
            )

        form_data = {
            'config_host': 'invalid-host',
            'config_port': '99999'
        }

        response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial with validation details
        self.assertIn(b'Validation failed', response.data)

    def test_update_config_not_found_error(self):
        """Test database configuration update for non-existent config"""
        def setup_mock():
            self.mock_api.update_database_config.return_value = self.create_error_response(
                "Configuration test_endpoint/mongo/nonexistent not found",
                ErrorCodes.ENDPOINT_NOT_FOUND,
                404
            )

        form_data = {'config_host': 'localhost'}

        response = self.post_with_mock_api('/io/test_endpoint/mongo/nonexistent', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial
        self.assertIn(b'not found', response.data)

    def test_update_config_update_error(self):
        """Test database configuration update with config update error"""
        def setup_mock():
            self.mock_api.update_database_config.return_value = self.create_error_response(
                "Failed to save configuration",
                ErrorCodes.CONFIG_UPDATE_ERROR,
                500
            )

        form_data = {'config_host': 'localhost'}

        response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial with specific error message
        self.assertIn(b'Failed to update configuration', response.data)

    def test_update_config_general_error(self):
        """Test database configuration update with general API error"""
        def setup_mock():
            self.mock_api.update_database_config.return_value = self.create_error_response(
                "Update service unavailable",
                "SERVICE_ERROR",
                503
            )

        form_data = {'config_host': 'localhost'}

        response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render config_error partial with general error
        self.assertIn(b'error', response.data)

    def test_update_config_form_field_filtering(self):
        """Test that only config_ prefixed fields are included in configuration"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_database_config.return_value = self.create_success_response(update_response)

        form_data = {
            'config_host': 'localhost',
            'config_port': '27017',
            'config_database': 'test_db',
            'other_field': 'should_be_ignored',
            'csrf_token': 'token_value',
            'submit': 'Save'
        }

        response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Should only include config_ prefixed fields
        expected_config = {
            'host': 'localhost',
            'port': 27017,
            'database': 'test_db'
        }
        self.mock_api.update_database_config.assert_called_once_with(
            'test_endpoint', 'mongo', 'local', expected_config
        )

    def test_update_config_empty_values_handling(self):
        """Test that empty form values are converted to None"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_database_config.return_value = self.create_success_response(update_response)

        form_data = {
            'config_host': 'localhost',
            'config_port': '',  # Empty value
            'config_database': '  ',  # Whitespace only
            'config_username': 'user'
        }

        response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Empty values should become None
        expected_config = {
            'host': 'localhost',
            'port': None,
            'database': None,
            'username': 'user'
        }
        self.mock_api.update_database_config.assert_called_once_with(
            'test_endpoint', 'mongo', 'local', expected_config
        )

    def test_update_config_whitespace_stripping(self):
        """Test that form field values are properly stripped of whitespace"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_database_config.return_value = self.create_success_response(update_response)

        form_data = {
            'config_host': '  localhost  ',
            'config_database': '  test_db  ',
            'config_username': '  test_user  '
        }

        response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Values should be stripped
        expected_config = {
            'host': 'localhost',
            'database': 'test_db',
            'username': 'test_user'
        }
        self.mock_api.update_database_config.assert_called_once_with(
            'test_endpoint', 'mongo', 'local', expected_config
        )

    def test_test_connection_placeholder(self):
        """Test connection testing placeholder endpoint"""
        response = self.post_with_mock_api('/io/test_endpoint/mongo/local/test', {}, lambda: None)
        
        self.assertEqual(response.status_code, 200)
        # Should render test_connection partial with placeholder message
        self.assertIn(b'Connection testing not yet implemented', response.data)

    def test_update_config_with_numeric_fields_as_strings(self):
        """Test that numeric fields can be provided as strings and are converted"""
        def setup_mock():
            update_response = {'message': 'Configuration updated'}
            self.mock_api.update_database_config.return_value = self.create_success_response(update_response)

        form_data = {
            'config_host': 'localhost',
            'config_port': '27017',  # String representation
            'config_timeout': '30'   # String representation
        }

        response = self.post_with_mock_api('/io/test_endpoint/mongo/local', form_data, setup_mock)
        
        self.assertEqual(response.status_code, 200)
        
        # Should convert string numbers to integers
        expected_config = {
            'host': 'localhost',
            'port': 27017,    # Converted to int
            'timeout': 30     # Converted to int
        }
        self.mock_api.update_database_config.assert_called_once_with(
            'test_endpoint', 'mongo', 'local', expected_config
        )

    def test_io_config_index_empty_configurations(self):
        """Test IO config index with no configurations"""
        def setup_mock():
            config_data = {'configurations': []}
            self.mock_api.get_database_configs.return_value = self.create_success_response(config_data)

        response = self.get_with_mock_api('/io/', setup_mock)
        
        self.assertEqual(response.status_code, 200)
        # Should render template with empty configurations list
        self.assertIn(b'io', response.data)


if __name__ == '__main__':
    unittest.main()