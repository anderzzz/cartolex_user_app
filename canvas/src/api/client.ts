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

export type ActionTriggerData = {
  action_node_id: string
  job_id: string
  workflow_name: string
  state: string
}

export type CaptureUpdate = {
  id: string
  content: Record<string, unknown>
}

export type ActionStatusData = {
  action_node_id: string
  state: string
  job_id?: string
  result_summary?: string
  /** Reconciled data_view updates fed by this action's produces edges (live fill). */
  captures?: CaptureUpdate[]
}

/** Trigger an action node's workflow. Returns immediately with a job_id. */
export function triggerAction(
  workspaceId: string,
  nodeId: string,
  tags: string[] = [],
) {
  return request<ActionTriggerData>(
    'POST',
    `/workspaces/${workspaceId}/actions/${nodeId}/trigger`,
    { tags },
  )
}

/** Poll a running action node's status. */
export function checkActionStatus(workspaceId: string, nodeId: string) {
  return request<ActionStatusData>(
    'POST',
    `/workspaces/${workspaceId}/actions/${nodeId}/check-status`,
  )
}

// --- IO (raw DB) discovery ---

export interface DbConfigItem {
  endpoint_name: string
  [k: string]: unknown
}
export interface DbConfigListData {
  configurations: DbConfigItem[]
}
export interface DbInspectData {
  endpoint_name: string
  db_type: string
  db_kind: string
  [k: string]: unknown
}

/** List available database config endpoints (for db_endpoint pickers). */
export function listDbConfigs() {
  return request<DbConfigListData>('GET', '/io/configs')
}

/** Inspect a database (counts, document types) to preview a subset source. */
export function inspectDb(endpoint: string, dbType: string, dbKind: string) {
  return request<DbInspectData>(
    'GET',
    `/io/configs/${endpoint}/${dbType}/${dbKind}/inspect`,
  )
}
