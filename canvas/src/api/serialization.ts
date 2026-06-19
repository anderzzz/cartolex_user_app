/**
 * Bidirectional mapper between React Flow graph state and backend workspace format.
 *
 * The persisted workspace is the program's source code: a lossy round-trip
 * corrupts the program (e.g. dropping edge_type erases its grammar). So the
 * mapping is an EXPLICIT field partition applied field-by-field in both
 * directions — never a black-box object spread.
 *
 *   Structural:  id, node_type ↔ type, position           direct both ways
 *   Promoted:    label, committed                          top-level ↔ inside data
 *   Content:     remaining typed payload (text, tags, …)   round-trips as `content`
 *   System:      created_at, updated_at, action exec state backend-owned, not sent
 *
 * Edges carry id, source/target, edge_type and label faithfully both ways.
 */

import type { CanvasNodeType, CanvasEdgeType, CanvasGraph } from '../types'
import type {
  WorkspaceDetailData,
  WorkspaceSavePayload,
  CanvasNodeBackend,
  CanvasEdgeBackend,
} from './types'
import { NODE_TYPES } from '../nodes/registry'
import { DEFAULT_EDGE_TYPE, KNOWN_EDGE_TYPES } from '../edges'

/** Known backend node types that map 1:1 to React Flow component types */
const KNOWN_TYPES = new Set(NODE_TYPES)

/** Data keys that are promoted to top-level on the backend, not part of `content`. */
const PROMOTED_NODE_KEYS = new Set(['label', 'committed'])

/** Map a backend node type string to its React Flow component type */
function resolveNodeType(backendType: string | undefined): string {
  if (backendType && KNOWN_TYPES.has(backendType)) {
    return backendType
  }
  return 'untyped' // fallback for unknown or missing types
}

/** Map a backend edge type to a registered React Flow edge type. */
function resolveEdgeType(backendType: string | undefined): string {
  if (backendType && KNOWN_EDGE_TYPES.has(backendType)) {
    return backendType
  }
  return DEFAULT_EDGE_TYPE
}

/**
 * Convert React Flow graph state → backend save payload.
 *
 * Only user-owned fields are sent. Content excludes the promoted keys and is
 * otherwise the node's data verbatim. System/derived fields (timestamps, action
 * execution state) are never authored here — the backend preserves them.
 */
export function toBackendFormat(
  name: string,
  nodes: CanvasNodeType[],
  edges: CanvasEdgeType[],
): WorkspaceSavePayload {
  return {
    name,
    nodes: nodes.map((node): CanvasNodeBackend => {
      const data = node.data as Record<string, unknown>
      const content: Record<string, unknown> = {}
      for (const [key, value] of Object.entries(data)) {
        if (!PROMOTED_NODE_KEYS.has(key)) {
          content[key] = value
        }
      }
      return {
        id: node.id,
        node_type: node.type || 'untyped',
        label: (data.label as string) || '',
        committed: Boolean(data.committed),
        content,
        position: node.position,
      }
    }),
    edges: edges.map((edge): CanvasEdgeBackend => ({
      id: edge.id,
      source_id: edge.source,
      target_id: edge.target,
      edge_type: resolveEdgeType(edge.type),
      label: typeof edge.label === 'string' ? edge.label : undefined,
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
      data: {
        label: node.label || '',
        committed: Boolean(node.committed),
        ...node.content,
      },
    })),
    edges: (workspace.edges || []).map((edge) => ({
      id: edge.id,
      source: edge.source_id,
      target: edge.target_id,
      type: resolveEdgeType(edge.edge_type),
      ...(edge.label ? { label: edge.label } : {}),
    })),
  }
}
