/**
 * Canvas API client — talks to Flask proxy routes at /canvas/api/*
 */

import type {
  ApiResult,
  WorkspaceListData,
  WorkspaceCreateData,
  WorkspaceDetailData,
  WorkspaceSavePayload,
  WorkspaceSaveData,
  WorkspaceValidateData,
} from './types'

const API_BASE = '/canvas/api'

async function request<T>(
  method: string,
  path: string,
  body?: unknown,
): Promise<ApiResult<T>> {
  const url = `${API_BASE}${path}`
  const options: RequestInit = {
    method,
    headers: { 'Content-Type': 'application/json' },
  }
  if (body !== undefined) {
    options.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(url, options)

    // DELETE returns 204 with no body
    if (response.status === 204) {
      return { ok: true, data: null as T }
    }

    const data = await response.json()

    if (response.ok) {
      return { ok: true, data }
    }

    return {
      ok: false,
      error: data.error || `HTTP ${response.status}`,
      error_code: data.error_code,
      status: response.status,
    }
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'Network error',
      status: 0,
    }
  }
}

// --- Public API ---

export function listWorkspaces() {
  return request<WorkspaceListData>('GET', '/workspaces')
}

export function createWorkspace(name: string, description?: string) {
  return request<WorkspaceCreateData>('POST', '/workspaces', { name, description })
}

export function getWorkspace(workspaceId: string) {
  return request<WorkspaceDetailData>('GET', `/workspaces/${workspaceId}`)
}

export function saveWorkspace(workspaceId: string, data: WorkspaceSavePayload) {
  return request<WorkspaceSaveData>('PUT', `/workspaces/${workspaceId}`, data)
}

export function deleteWorkspace(workspaceId: string) {
  return request<null>('DELETE', `/workspaces/${workspaceId}`)
}

export function validateWorkspace(workspaceId: string) {
  return request<WorkspaceValidateData>('POST', `/workspaces/${workspaceId}/validate`)
}
