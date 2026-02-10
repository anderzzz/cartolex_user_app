/**
 * Type definitions for the Cartolex Canvas module
 */

import type { Node, Edge } from '@xyflow/react'

/** Common data fields shared by all node types */
export type BaseNodeData = {
  label?: string
  content?: string
  committed?: boolean
}

/** Fact node: grounded, verified, sourced */
export type FactNodeData = BaseNodeData & {
  source?: string
}

/** Constraint node: can have structured fields */
export type ConstraintNodeData = BaseNodeData & {
  parameter?: string
  min?: string | number
  max?: string | number
  unit?: string
}

/** Action node: workflow binding, state tracking */
export type ActionNodeData = BaseNodeData & {
  state?: 'empty' | 'loaded' | 'running' | 'complete' | 'failed'
  workflow?: string
}

/** Data collection node */
export type DataCollectionNodeData = BaseNodeData & {
  count?: number
}

/** All node data is a flexible record — typed components read what they need */
export type CanvasNodeData = Record<string, unknown>

/** Canvas node — uses generic data since type is dynamic */
export type CanvasNodeType = Node<CanvasNodeData>

/** Union of all edge types (extend as needed) */
export type CanvasEdgeType = Edge

/** Graph state containing nodes and edges */
export interface CanvasGraph {
  nodes: CanvasNodeType[]
  edges: CanvasEdgeType[]
}

/** Mount options for the canvas */
export interface CanvasMountOptions {
  containerId: string
  workspaceId?: string
  initialGraph?: CanvasGraph
  onSave?: (graph: CanvasGraph) => void
}

/** Canvas API returned by mountCanvas */
export interface CanvasAPI {
  getGraph: () => CanvasGraph
  setGraph: (graph: CanvasGraph) => void
  clear: () => void
  unmount: () => void
}
