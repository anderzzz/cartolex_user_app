/**
 * Main Canvas application component
 *
 * Provides a React Flow canvas with custom node types and Esevioz theming.
 */

import { useCallback, useState } from 'react'
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  Panel,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'
import './styles/canvas.css'

import { nodeTypes } from './nodes'
import { edgeTypes } from './edges'
import type { CanvasGraph, CanvasNodeType, CanvasEdgeType } from './types'

interface AppProps {
  initialGraph?: CanvasGraph
  onSave?: (graph: CanvasGraph) => void
}

const defaultNodes: CanvasNodeType[] = [
  {
    id: '1',
    type: 'basic',
    position: { x: 250, y: 100 },
    data: { label: 'Start', content: 'Begin your workflow here' },
  },
]

const defaultEdges: CanvasEdgeType[] = []

export function App({ initialGraph, onSave }: AppProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    initialGraph?.nodes ?? defaultNodes
  )
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    initialGraph?.edges ?? defaultEdges
  )

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds))
    },
    [setEdges]
  )

  const handleSave = useCallback(() => {
    const graph: CanvasGraph = { nodes, edges }
    if (onSave) {
      onSave(graph)
    } else {
      console.log('Canvas graph:', JSON.stringify(graph, null, 2))
    }
  }, [nodes, edges, onSave])

  const handleClear = useCallback(() => {
    setNodes([])
    setEdges([])
  }, [setNodes, setEdges])

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView
      attributionPosition="bottom-left"
    >
      <Controls />
      <MiniMap zoomable pannable />
      <Background variant={BackgroundVariant.Dots} gap={16} size={1} />

      <Panel position="top-right">
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={handleSave}
            className="esevioz-btn-primary"
            style={{ padding: '0.5rem 1rem', borderRadius: '0.375rem' }}
          >
            Save
          </button>
          <button
            onClick={handleClear}
            className="esevioz-btn-warning"
            style={{ padding: '0.5rem 1rem', borderRadius: '0.375rem' }}
          >
            Clear
          </button>
        </div>
      </Panel>
    </ReactFlow>
  )
}
