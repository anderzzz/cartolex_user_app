/**
 * TypeScript interfaces for the Canvas API.
 *
 * These mirror the backend Pydantic models for workspace CRUD. The backend is
 * the single source of truth for these shapes, published via the Meta API
 * (`/api/v1/meta/modules/canvas/schemas`). Run `npm run gen:types` against a
 * running server to regenerate this file; until/unless regenerated, keep these
 * in sync with the backend response models by hand.
 *
 * Note the workspace-detail/create/save responses are keyed by `id`
 * (NOT `workspace_id`); list/collection responses use `workspace_id`.
 */

// --- Backend shapes ---

export interface WorkspaceSummary {
  id: string
  name: string
  description?: string
  node_count: number
  edge_count?: number
  created_at: string
  updated_at: string
}

export interface WorkspaceListData {
  workspaces: WorkspaceSummary[]
  total?: number
}

export interface CanvasNodeBackend {
  id: string
  node_type: string
  label?: string
  committed?: boolean
  content: Record<string, unknown>
  position?: { x: number; y: number }
}

export interface CanvasEdgeBackend {
  id: string
  source_id: string
  target_id: string
  edge_type: string
  label?: string
}

export interface WorkspaceDetailData {
  id: string
  name: string
  description?: string
  nodes: CanvasNodeBackend[]
  edges: CanvasEdgeBackend[]
  metadata?: Record<string, unknown>
  node_count?: number
  edge_count?: number
  created_at: string
  updated_at: string
}

export interface WorkspaceSavePayload {
  name: string
  description?: string
  nodes: CanvasNodeBackend[]
  edges: CanvasEdgeBackend[]
  metadata?: Record<string, unknown>
}

export interface WorkspaceSaveData {
  id: string
  name: string
  node_count: number
  edge_count: number
  saved_at: string
}

export interface WorkspaceCreateData {
  id: string
  name: string
  description?: string
  created_at: string
  message?: string
}

export interface WorkspaceValidateData {
  valid: boolean
  errors: string[]
}

// --- API result wrapper ---

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; error_code?: string; status: number }
