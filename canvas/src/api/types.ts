/**
 * TypeScript interfaces for the Canvas API.
 *
 * These mirror the backend Pydantic models for workspace CRUD.
 */

// --- Backend shapes ---

export interface WorkspaceSummary {
  workspace_id: string
  name: string
  description?: string
  node_count: number
  created_at: string
  updated_at: string
}

export interface WorkspaceListData {
  workspaces: WorkspaceSummary[]
}

export interface CanvasNodeBackend {
  id: string
  node_type: string
  label?: string
  content: Record<string, unknown>
  position?: { x: number; y: number }
}

export interface CanvasEdgeBackend {
  id: string
  source_id: string
  target_id: string
  edge_type: string
}

export interface WorkspaceDetailData {
  workspace_id: string
  name: string
  description?: string
  nodes: CanvasNodeBackend[]
  edges: CanvasEdgeBackend[]
  created_at: string
  updated_at: string
}

export interface WorkspaceSavePayload {
  name: string
  nodes: CanvasNodeBackend[]
  edges: CanvasEdgeBackend[]
}

export interface WorkspaceSaveData {
  workspace_id: string
  updated_at: string
}

export interface WorkspaceCreateData {
  workspace_id: string
  name: string
  description?: string
  created_at: string
}

export interface WorkspaceValidateData {
  valid: boolean
  errors: string[]
}

// --- API result wrapper ---

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; error_code?: string; status: number }
