/**
 * Main Canvas application component
 *
 * Provides a React Flow canvas with typed node components, Esevioz theming,
 * workspace persistence, auto-save, and node creation/context menus.
 */

import { useCallback, useEffect } from 'react'
import {
  ReactFlow,
  ReactFlowProvider,
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
import { useCanvasMenus } from './hooks/useCanvasMenus'
import { useWorkspaceStore } from './store/workspaceStore'
import { NodeCreationMenu } from './components/NodeCreationMenu'
import { NodeContextMenu } from './components/NodeContextMenu'
import type { CanvasGraph, CanvasNodeType, CanvasEdgeType } from './types'

interface AppProps {
  workspaceId?: string
  initialGraph?: CanvasGraph
  onSave?: (graph: CanvasGraph) => void
}

const defaultNodes: CanvasNodeType[] = []
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

/** Inner component that has access to useReactFlow */
function CanvasInner({ workspaceId, initialGraph, onSave }: AppProps) {
  const initial = resolveInitialGraph(initialGraph)

  const [nodes, setNodes, onNodesChange] = useNodesState(initial.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initial.edges)

  const { saveStatus, setWorkspaceId, setWorkspaceName } = useWorkspaceStore()

  // Menu state and node CRUD operations
  const menus = useCanvasMenus(nodes, setNodes, setEdges)

  // Register workspace ID and name in the store
  useEffect(() => {
    if (workspaceId) {
      setWorkspaceId(workspaceId)
    }
    // Extract name from raw backend data passed as initialGraph
    if (initialGraph && 'name' in initialGraph) {
      setWorkspaceName((initialGraph as Record<string, unknown>).name as string)
    }
  }, [workspaceId, initialGraph, setWorkspaceId, setWorkspaceName])

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
    <div ref={menus.containerRef} style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneClick={menus.closeMenus}
        onDoubleClick={menus.handlePaneDoubleClick}
        onNodeContextMenu={menus.handleNodeContextMenu}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        zoomOnDoubleClick={false}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls />
        <MiniMap zoomable pannable />
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} />

        <Panel position="top-right">
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
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

      {menus.creationMenu && (
        <NodeCreationMenu
          position={{ x: menus.creationMenu.x, y: menus.creationMenu.y }}
          onSelect={menus.handleCreationSelect}
          onClose={menus.closeCreationMenu}
        />
      )}

      {menus.contextMenu && (
        <NodeContextMenu
          nodeId={menus.contextMenu.nodeId}
          nodeType={menus.contextMenu.nodeType}
          position={{ x: menus.contextMenu.x, y: menus.contextMenu.y }}
          onChangeType={menus.changeNodeType}
          onDuplicate={menus.duplicateNode}
          onDelete={menus.deleteNode}
          onClose={menus.closeContextMenu}
        />
      )}
    </div>
  )
}

export function App(props: AppProps) {
  return (
    <ReactFlowProvider>
      <CanvasInner {...props} />
    </ReactFlowProvider>
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
