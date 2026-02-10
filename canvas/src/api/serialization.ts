/**
 * Bidirectional mapper between React Flow graph state and backend workspace format.
 *
 * React Flow nodes: { id, type, position, data }
 * Backend nodes:    { node_id, type, content, position }
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
  nodes: CanvasNodeType[],
  edges: CanvasEdgeType[],
): WorkspaceSavePayload {
  return {
    nodes: nodes.map((node) => ({
      node_id: node.id,
      type: node.type || 'untyped',
      content: node.data,
      position: node.position,
    })),
    edges: edges.map((edge) => ({
      edge_id: edge.id,
      source_node_id: edge.source,
      target_node_id: edge.target,
      type: edge.type || 'similar_to',
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
      id: node.node_id,
      type: resolveNodeType(node.type),
      position: node.position ?? {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: node.content ?? {},
    })),
    edges: (workspace.edges || []).map((edge) => ({
      id: edge.edge_id,
      source: edge.source_node_id,
      target: edge.target_node_id,
      type: 'default',
    })),
  }
}
