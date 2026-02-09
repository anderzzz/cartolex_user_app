/**
 * Type definitions for the Cartolex Canvas module
 */

import type { Node, Edge } from '@xyflow/react'

/** Data payload for BasicNode */
export type BasicNodeData = {
  label?: string
  content?: string
}

/** Typed BasicNode using React Flow v12 conventions */
export type BasicNodeType = Node<BasicNodeData, 'basic'>

/** Union of all custom node types */
export type CanvasNodeType = BasicNodeType

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
