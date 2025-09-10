"""Front-end API client.

"""
import requests
from typing import Dict, Any, Optional
from dataclasses import dataclass

# Import shared constants from commons
from cartolex_endpoint_server.constants import (
    APIEndpoints,
    ErrorCodes,
    JobStatuses,
    HTTPStatusCodes,
    ContentTypes
)


@dataclass
class APIResponse:
    """Simple response wrapper"""
    success: bool
    data: Any = None
    error: str = None
    error_code: str = None
    status_code: int = None


class CartolexAPI:
    """Frontend API client using shared constants"""

    def __init__(self, base_url: str, timeout: int = 30):
        self.base_url = base_url.rstrip('/')
        self.timeout = timeout
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': ContentTypes.JSON,
            'Accept': ContentTypes.JSON
        })

    def _make_request(self, method: str, endpoint: str,
                      params: Dict = None, data: Dict = None) -> APIResponse:
        """Make HTTP request using shared constants"""
        url = f"{self.base_url}{endpoint}"

        try:
            response = self.session.request(
                method=method, url=url, params=params,
                json=data, timeout=self.timeout
            )

            if response.status_code == HTTPStatusCodes.OK:
                return APIResponse(
                    success=True,
                    data=response.json(),
                    status_code=response.status_code
                )
            else:
                error_data = response.json() if response.content else {}
                return APIResponse(
                    success=False,
                    error=error_data.get('error', f'HTTP {response.status_code}'),
                    error_code=error_data.get('error_code'),
                    status_code=response.status_code
                )

        except requests.exceptions.Timeout:
            return APIResponse(success=False, error="Request timeout", error_code="TIMEOUT")
        except requests.exceptions.ConnectionError:
            return APIResponse(success=False, error="Connection error", error_code="CONNECTION_ERROR")
        except Exception as e:
            return APIResponse(success=False, error=str(e), error_code="CLIENT_ERROR")

    # Workflow methods using shared endpoints
    def get_workflows(self) -> APIResponse:
        """Get all workflows"""
        return self._make_request('GET', APIEndpoints.WORKFLOWS_LIST)

    def get_workflow(self, name: str) -> APIResponse:
        """Get specific workflow"""
        endpoint = APIEndpoints.WORKFLOW_DETAIL.format(name=name)
        return self._make_request('GET', endpoint)

    def execute_workflow(self, name: str, parameters: dict, execution: dict) -> APIResponse:
        """Execute workflow"""
        endpoint = APIEndpoints.WORKFLOW_EXECUTE.format(name=name)
        payload = {'parameters': parameters, 'execution': execution}
        return self._make_request('POST', endpoint, data=payload)

    def get_jobs(self, status: str = None, limit: int = 50) -> APIResponse:
        """Get job list with optional filtering"""
        params = {'limit': limit}
        if status and JobStatuses.is_valid(status):  # Use shared validation
            params['status'] = status
        return self._make_request('GET', APIEndpoints.JOBS_LIST, params=params)

    def get_job_status(self, job_id: str) -> APIResponse:
        """Get job status"""
        endpoint = APIEndpoints.JOB_STATUS.format(job_id=job_id)
        return self._make_request('GET', endpoint)

    # Semantics methods
    def get_llm_models(self, config_kind: str = None) -> APIResponse:
        """Get LLM models"""
        params = {}
        if config_kind:
            params['config_kind'] = config_kind
        return self._make_request('GET', APIEndpoints.LLM_MODELS_LIST, params=params)

    def get_llm_model(self, provider: str, tier: str, config_kind: str = None) -> APIResponse:
        """Get specific LLM model configuration"""
        endpoint = APIEndpoints.LLM_MODEL_CONFIG.format(provider=provider, tier=tier)
        params = {}
        if config_kind:
            params['config_kind'] = config_kind
        return self._make_request('GET', endpoint, params=params)

    def update_llm_model(self, provider: str, tier: str, config: dict) -> APIResponse:
        """Update LLM model configuration"""
        endpoint = APIEndpoints.LLM_MODEL_CONFIG.format(provider=provider, tier=tier)
        return self._make_request('PUT', endpoint, data=config)

    def get_database_configs(self, config_kind: str = None) -> APIResponse:
        """Get all database configurations"""
        params = {}
        if config_kind:
            params['config_kind'] = config_kind
        return self._make_request('GET', APIEndpoints.IO_CONFIGS_LIST, params=params)

    def get_endpoint_configs(self, endpoint_name: str) -> APIResponse:
        """Get all configurations for a specific endpoint"""
        endpoint = APIEndpoints.IO_CONFIGS_BY_ENDPOINT.format(endpoint=endpoint_name)
        return self._make_request('GET', endpoint)

    def get_database_config(self, endpoint_name: str, db_type: str, db_kind: str) -> APIResponse:
        """Get specific database configuration"""
        endpoint = APIEndpoints.IO_CONFIG_DETAIL.format(
            endpoint=endpoint_name, db_type=db_type, db_kind=db_kind
        )
        return self._make_request('GET', endpoint)

    def update_database_config(self, endpoint_name: str, db_type: str,
                               db_kind: str, config: dict) -> APIResponse:
        """Update database configuration"""
        endpoint = APIEndpoints.IO_CONFIG_DETAIL.format(
            endpoint=endpoint_name, db_type=db_type, db_kind=db_kind
        )
        return self._make_request('PUT', endpoint, data=config)

    def get_embedding_models(self, config_kind: str = None) -> APIResponse:
        """Get embedding model configurations"""
        params = {}
        if config_kind:
            params['config_kind'] = config_kind
        return self._make_request('GET', APIEndpoints.EMBEDDING_MODELS_LIST, params=params)

    def get_workflow_config(self, workflow_name: str, config_kind: str = 'configuration directory') -> APIResponse:
        """Get workflow configuration"""
        endpoint = f"/api/v1/workflows/{workflow_name}/config"
        params = {'config_kind': config_kind}
        return self._make_request('GET', endpoint, params=params)

    def update_workflow_config(self, workflow_name: str, config_data: dict) -> APIResponse:
        """Update workflow configuration"""
        endpoint = f"/api/v1/workflows/{workflow_name}/config"
        return self._make_request('PUT', endpoint, data=config_data)

