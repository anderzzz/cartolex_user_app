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

    def __init__(self, base_url: str, timeout: int = 30, debug: bool = False):
        self.base_url = base_url.rstrip('/')
        self.timeout = timeout
        self.debug = debug
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': ContentTypes.JSON,
            'Accept': ContentTypes.JSON
        })

    def _make_request(self, method: str, endpoint: str,
                      params: Dict = None, data: Dict = None) -> APIResponse:
        """Make HTTP request using shared constants"""
        url = f"{self.base_url}{endpoint}"
        
        if self.debug:
            print(f"[API DEBUG] {method} {url}")
            if params:
                print(f"[API DEBUG] Params: {params}")
            if data:
                print(f"[API DEBUG] Data: {data}")

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
                
                # Enhanced error message with context
                base_error = error_data.get('error', f'HTTP {response.status_code}')
                enhanced_error = f"{base_error} (URL: {method} {url})"
                
                # Add query params context if they exist
                if params:
                    enhanced_error += f" with params: {params}"
                
                return APIResponse(
                    success=False,
                    error=enhanced_error,
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

    def execute_workflow(self, name: str, parameters: dict, tags: Optional[list] = None) -> APIResponse:
        """Execute workflow - submits job asynchronously

        Args:
            name: Configuration name (NOT workflow_kind)
            parameters: Workflow parameters (merged with config parameters)
            tags: Optional list of tags for organizing and filtering workflow runs

        Returns:
            Job submission response with job_id, status='pending', workflow_name
        """
        endpoint = APIEndpoints.WORKFLOW_EXECUTE.format(name=name)
        payload = {'parameters': parameters}

        # Add execution options with tags if provided
        if tags:
            payload['execution'] = {'tags': tags}

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

    def get_job_artifacts(self, job_id: str, artifact_type: str = None,
                         key: str = None, limit: int = 100, offset: int = 0) -> APIResponse:
        """Get all artifacts for a job

        Args:
            job_id: Job ID
            artifact_type: Filter by type (markdown, table, link, image, progress)
            key: Filter by artifact key
            limit: Pagination limit (max 500)
            offset: Pagination offset

        Returns:
            List of artifacts with metadata and previews
        """
        endpoint = APIEndpoints.JOB_ARTIFACTS_LIST.format(job_id=job_id)
        params = {'limit': min(limit, 500), 'offset': offset}
        if artifact_type:
            params['type'] = artifact_type
        if key:
            params['key'] = key
        return self._make_request('GET', endpoint, params=params)

    def get_artifact_detail(self, job_id: str, artifact_id: str) -> APIResponse:
        """Get full artifact content

        Args:
            job_id: Job ID
            artifact_id: Artifact ID

        Returns:
            Full artifact with data field containing type-specific content
        """
        endpoint = APIEndpoints.JOB_ARTIFACT_DETAIL.format(job_id=job_id, artifact_id=artifact_id)
        return self._make_request('GET', endpoint)

    # Semantics methods (read-only)
    def get_semantics_configs(self, config_kind: str = None) -> APIResponse:
        """Get all semantics configuration endpoints"""
        params = {}
        if config_kind:
            params['config_kind'] = config_kind
        return self._make_request('GET', APIEndpoints.SEMANTICS_CONFIGS_LIST, params=params)

    def get_semantics_endpoint_configs(self, endpoint: str, config_kind: str = None) -> APIResponse:
        """Get all configurations for a specific semantics endpoint"""
        endpoint_url = APIEndpoints.SEMANTICS_CONFIGS_BY_ENDPOINT.format(endpoint=endpoint)
        params = {}
        if config_kind:
            params['config_kind'] = config_kind
        return self._make_request('GET', endpoint_url, params=params)

    def get_semantics_provider_configs(self, endpoint: str, provider: str, config_kind: str = None) -> APIResponse:
        """Get all tier configurations for a specific provider"""
        endpoint_url = APIEndpoints.SEMANTICS_CONFIG_DETAIL_PROVIDER.format(endpoint=endpoint, provider=provider)
        params = {}
        if config_kind:
            params['config_kind'] = config_kind
        return self._make_request('GET', endpoint_url, params=params)

    def get_semantics_config_detail(self, endpoint: str, provider: str, tier: str, config_kind: str = None) -> APIResponse:
        """Get specific provider/tier configuration details"""
        endpoint_url = APIEndpoints.SEMANTICS_CONFIG_DETAIL_PROVIDER_TIER.format(
            endpoint=endpoint, provider=provider, tier=tier
        )
        params = {}
        if config_kind:
            params['config_kind'] = config_kind
        return self._make_request('GET', endpoint_url, params=params)

    def delete_semantics_endpoint(self, endpoint: str) -> APIResponse:
        """Delete entire semantics endpoint configuration"""
        endpoint_url = APIEndpoints.SEMANTICS_ENDPOINT_DELETE.format(endpoint=endpoint)
        return self._make_request('DELETE', endpoint_url)

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

    def get_database_config(self, endpoint_name: str, db_type: str, db_kind: str, config_kind: str = None) -> APIResponse:
        """Get specific database configuration"""
        endpoint = APIEndpoints.IO_CONFIG_DETAIL.format(
            endpoint=endpoint_name, db_type=db_type, db_kind=db_kind
        )
        params = {}
        if config_kind:
            params['config_kind'] = config_kind
        return self._make_request('GET', endpoint, params=params)

    def update_database_config(self, endpoint_name: str, db_type: str,
                               db_kind: str, config: dict) -> APIResponse:
        """Update database configuration"""
        endpoint = APIEndpoints.IO_CONFIG_DETAIL.format(
            endpoint=endpoint_name, db_type=db_type, db_kind=db_kind
        )
        return self._make_request('PUT', endpoint, data=config)

    def delete_endpoint_config(self, endpoint_name: str) -> APIResponse:
        """Delete entire endpoint configuration"""
        endpoint = APIEndpoints.IO_ENDPOINT_DELETE.format(endpoint=endpoint_name)
        return self._make_request('DELETE', endpoint)

    def get_database_inspect(self, endpoint_name: str, db_type: str, db_kind: str, config_kind: str = None, fields: str = None) -> APIResponse:
        """Inspect database metadata including count and last_modified"""
        endpoint = APIEndpoints.IO_CONFIG_INSPECT.format(
            endpoint=endpoint_name,
            db_type=db_type,
            db_kind=db_kind
        )
        params = {}
        if config_kind:
            params['config_kind'] = config_kind
        if fields:
            params['fields'] = fields
        return self._make_request('GET', endpoint, params=params)

    def get_database_template(self, endpoint_name: str, db_type: str, db_kind: str) -> APIResponse:
        """Get configuration template for creating new databases"""
        endpoint = f"/api/v1/io/templates/{endpoint_name}/{db_type}/{db_kind}"
        return self._make_request('GET', endpoint)

    def create_database_config(self, config_data: dict) -> APIResponse:
        """Create new database configuration"""
        endpoint = "/api/v1/io/configs/create"
        return self._make_request('POST', endpoint, data=config_data)


    def get_workflow_config(self, workflow_name: str, config_kind: str = 'configuration directory') -> APIResponse:
        """Get workflow configuration"""
        endpoint = APIEndpoints.WORKFLOW_CONFIG.format(name=workflow_name)
        params = {'config_kind': config_kind}
        return self._make_request('GET', endpoint, params=params)

    def update_workflow_config(self, workflow_name: str, config_data: dict) -> APIResponse:
        """Update workflow configuration"""
        endpoint = APIEndpoints.WORKFLOW_CONFIG.format(name=workflow_name)
        return self._make_request('PUT', endpoint, data=config_data)

    def clone_workflow(self, source_name: str, new_workflow_name: str, description: str = None) -> APIResponse:
        """Clone a workflow configuration to a new name

        Args:
            source_name: Name of the workflow to clone (source)
            new_workflow_name: Name for the cloned workflow (must be unique)
            description: Optional new description for the cloned workflow

        Returns:
            APIResponse with clone result containing:
                - workflow_name: Name of the newly created workflow
                - cloned_from_workflow: Name of the source workflow
                - configuration_created: Boolean indicating success
        """
        endpoint = APIEndpoints.WORKFLOW_CLONE.format(name=source_name)
        payload = {'new_workflow_name': new_workflow_name}
        if description is not None:
            payload['description'] = description
        return self._make_request('POST', endpoint, data=payload)

    def delete_workflow_config(self, workflow_name: str, config_kind: str = 'configuration directory') -> APIResponse:
        """Delete workflow configuration

        Args:
            workflow_name: Name of the workflow to delete
            config_kind: Configuration source (defaults to 'configuration directory')

        Returns:
            APIResponse indicating success or failure
        """
        endpoint = APIEndpoints.WORKFLOW_CONFIG.format(name=workflow_name)
        params = {'config_kind': config_kind}
        return self._make_request('DELETE', endpoint, params=params)

    def get_workflows_with_metadata(self) -> APIResponse:
        """Get all workflows with filesystem and schema metadata

        Returns:
            APIResponse with workflows list including:
                - Basic workflow info (name, description, workflow_kind)
                - Filesystem metadata (file paths, last modified)
                - Schema information
        """
        params = {'include_metadata': True}
        return self._make_request('GET', APIEndpoints.WORKFLOWS_LIST, params=params)
