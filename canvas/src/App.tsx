/**
 * Main Canvas application component
 *
 * Provides a React Flow canvas with custom node types, Esevioz theming,
 * workspace persistence, and auto-save.
 */

import { useCallback, useEffect } from 'react'
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
import { fromBackendFormat } from './api'
import { useAutoSave } from './hooks/useAutoSave'
import { useWorkspaceStore } from './store/workspaceStore'
import type { CanvasGraph, CanvasNodeType, CanvasEdgeType } from './types'

interface AppProps {
  workspaceId?: string
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

/**
 * Derive React Flow nodes/edges from raw workspace data.
 * If initialGraph has workspace_id it's backend data that needs conversion;
 * otherwise it's already in React Flow format.
 */
function resolveInitialGraph(initialGraph?: CanvasGraph) {
  if (!initialGraph) return { nodes: defaultNodes, edges: defaultEdges }

  // Backend data has workspace_id at top level — convert it
  if ('workspace_id' in initialGraph) {
    const converted = fromBackendFormat(initialGraph as never)
    return {
      nodes: converted.nodes.length ? converted.nodes : defaultNodes,
      edges: converted.edges,
    }
  }

  // Already React Flow format
  return {
    nodes: initialGraph.nodes?.length ? initialGraph.nodes : defaultNodes,
    edges: initialGraph.edges ?? defaultEdges,
  }
}

export function App({ workspaceId, initialGraph, onSave }: AppProps) {
  const initial = resolveInitialGraph(initialGraph)

  const [nodes, setNodes, onNodesChange] = useNodesState(initial.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initial.edges)

  const { saveStatus, setWorkspaceId } = useWorkspaceStore()

  // Register workspace ID in the store
  useEffect(() => {
    if (workspaceId) {
      setWorkspaceId(workspaceId)
    }
  }, [workspaceId, setWorkspaceId])

  // Auto-save (only active when workspaceId is present)
  const { saveNow } = useAutoSave(workspaceId, nodes, edges)

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds))
    },
    [setEdges],
  )

  const handleSave = useCallback(() => {
    if (workspaceId) {
      saveNow()
    }
    // Also call external onSave if provided
    const graph: CanvasGraph = { nodes, edges }
    if (onSave) {
      onSave(graph)
    }
  }, [workspaceId, saveNow, nodes, edges, onSave])

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
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {/* Save status indicator */}
          {workspaceId && <SaveIndicator status={saveStatus} />}

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

function SaveIndicator({ status }: { status: string }) {
  const style: React.CSSProperties = {
    fontSize: '0.75rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    userSelect: 'none',
  }

  switch (status) {
    case 'saved':
      return (
        <span style={{ ...style, color: '#2d6a4f', background: '#d8f3dc' }}>
          Saved
        </span>
      )
    case 'saving':
      return (
        <span style={{ ...style, color: '#b08800', background: '#fff3cd' }}>
          Saving...
        </span>
      )
    case 'unsaved':
      return (
        <span style={{ ...style, color: '#6c757d', background: '#e9ecef' }}>
          Unsaved
        </span>
      )
    case 'error':
      return (
        <span style={{ ...style, color: '#842029', background: '#f8d7da' }}>
          Save failed
        </span>
      )
    default:
      return null
  }
}
