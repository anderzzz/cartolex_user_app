/**
 * Bidirectional mapper between React Flow graph state and backend workspace format.
 *
 * React Flow nodes: { id, type, position, data: { label, text, ... } }
 * Backend nodes:    { id, node_type, label, content: { text, ... }, position }
 *
 * Structural mappings (React Flow ↔ backend):
 *   node.type       ↔ node_type
 *   node.data.label ↔ node.label  (top-level on backend)
 *   node.data.*     ↔ content.*   (remaining data fields = content)
 *   edge.source     ↔ source_id
 *   edge.target     ↔ target_id
 *   edge.type       ↔ edge_type
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
    nodes: nodes.map((node) => {
      const { label, ...content } = node.data as Record<string, unknown>
      return {
        id: node.id,
        node_type: node.type || 'untyped',
        label: (label as string) || '',
        content,
        position: node.position,
      }
    }),
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
      data: { label: node.label || '', ...node.content },
    })),
    edges: (workspace.edges || []).map((edge) => ({
      id: edge.id,
      source: edge.source_id,
      target: edge.target_id,
      type: 'default',
    })),
  }
}
