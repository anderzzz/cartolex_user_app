/**
 * Edge type registry for the Cartolex Canvas.
 *
 * The backend EdgeType enum values are the canvas's edge grammar. Each is
 * registered as a real React Flow edge type (rendered by SemanticEdge) so
 * semantic relationships round-trip faithfully and are visually distinct,
 * rather than collapsing to a synthetic 'default'.
 */

import type { EdgeTypes } from '@xyflow/react'
import { SemanticEdge } from './SemanticEdge'

/** Mirrors cartolex_canvas EdgeType. Keep in sync with the backend enum. */
export const EDGE_TYPES = [
  'supports',
  'contradicts',
  'enables',
  'blocks',
  'similar_to',
  'derived_from',
  'refines',
  'questions',
] as const

export type EdgeTypeName = (typeof EDGE_TYPES)[number]

/** Default edge type for newly drawn / unspecified edges. */
export const DEFAULT_EDGE_TYPE: EdgeTypeName = 'similar_to'

/** Lookup set for validating/normalizing edge types during serialization. */
export const KNOWN_EDGE_TYPES = new Set<string>(EDGE_TYPES)

export const edgeTypes: EdgeTypes = Object.fromEntries(
  EDGE_TYPES.map((name) => [name, SemanticEdge]),
)
