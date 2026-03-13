/**
 * Bidirectional mapper between React Flow graph state and backend workspace format.
 *
 * React Flow nodes: { id, type, position, data }
 * Backend nodes:    { id, node_type, content, position }
 */

import type { CanvasNodeType, CanvasEdgeType, CanvasGraph } from '../types'
import type { WorkspaceDetailData, WorkspaceSavePayload } from './types'
import { NODE_TYPES } from '../nodes/registry'

/** Known backend node types that map 1:1 to React Flow component types */
const KNOWN_TYPES = new Set(NODE_TYPES)

/** Map a backend node type string to its React Flow component type */
function resolveNodeType(backendType: string | undefined): string {
  if (backendType && KNOWN_TYPES.has(backendType)) {
    return backendType
  }
  return 'untyped' // fallback for unknown or missing types
}

/**
 * Map frontend node data → backend content dict.
 *
 * Frontend stores the main text as `content` and header as `label`.
 * Backend content models use `text` for the main text field.
 * The `label` is a frontend-only display field and is preserved as-is.
 */
function toBackendContent(data: Record<string, unknown>): Record<string, unknown> {
  const { content, ...rest } = data
  const out: Record<string, unknown> = { ...rest }
  if (content !== undefined && content !== '') {
    out.text = content
  }
  return out
}

/**
 * Map backend content dict → frontend node data.
 *
 * Reverses the `text` → `content` mapping so React components
 * can read `data.content` as usual.
 */
function fromBackendContent(content: Record<string, unknown>): Record<string, unknown> {
  const { text, ...rest } = content
  const out: Record<string, unknown> = { ...rest }
  if (text !== undefined) {
    out.content = text
  }
  return out
}

/**
 * Convert React Flow graph state → backend save payload.
 * Always includes edges to avoid the backend defaulting them to [].
 */
export function toBackendFormat(
  name: string,
  nodes: CanvasNodeType[],
  edges: CanvasEdgeType[],
): WorkspaceSavePayload {
  return {
    name,
    nodes: nodes.map((node) => ({
      id: node.id,
      node_type: node.type || 'untyped',
      content: toBackendContent(node.data),
      position: node.position,
    })),
    edges: edges.map((edge) => ({
      id: edge.id,
      source_id: edge.source,
      target_id: edge.target,
      edge_type: edge.type || 'similar_to',
    })),
  }
}

/**
 * Convert backend workspace detail → React Flow graph state.
 * Assigns random positions to nodes missing coordinates.
 * Maps backend type strings to React Flow component types via the registry.
 */
export function fromBackendFormat(workspace: WorkspaceDetailData): CanvasGraph {
  return {
    nodes: (workspace.nodes || []).map((node) => ({
      id: node.id,
      type: resolveNodeType(node.node_type),
      position: node.position ?? {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: fromBackendContent(node.content ?? {}),
    })),
    edges: (workspace.edges || []).map((edge) => ({
      id: edge.id,
      source: edge.source_id,
      target: edge.target_id,
      type: 'default',
    })),
  }
}
