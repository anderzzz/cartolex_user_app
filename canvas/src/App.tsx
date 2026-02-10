/**
 * Main Canvas application component
 *
 * Provides a React Flow canvas with typed node components, Esevioz theming,
 * workspace persistence, auto-save, and node creation/context menus.
 */

import { useCallback, useEffect, useState, useRef, type MouseEvent as ReactMouseEvent } from 'react'
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
  useReactFlow,
  type Connection,
  type NodeMouseHandler,
  Panel,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'
import './styles/canvas.css'

import { nodeTypes } from './nodes'
import { nodeTypeRegistry } from './nodes/registry'
import { edgeTypes } from './edges'
import { fromBackendFormat } from './api'
import { useAutoSave } from './hooks/useAutoSave'
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

let nodeIdCounter = 0
function generateNodeId(): string {
  nodeIdCounter += 1
  return `node-${Date.now()}-${nodeIdCounter}`
}

/** Inner component that has access to useReactFlow */
function CanvasInner({ workspaceId, initialGraph, onSave }: AppProps) {
  const initial = resolveInitialGraph(initialGraph)

  const [nodes, setNodes, onNodesChange] = useNodesState(initial.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initial.edges)
  const reactFlow = useReactFlow()

  const { saveStatus, setWorkspaceId } = useWorkspaceStore()

  // Menu state
  const [creationMenu, setCreationMenu] = useState<{ x: number; y: number; flowPos: { x: number; y: number } } | null>(null)
  const [contextMenu, setContextMenu] = useState<{ nodeId: string; nodeType: string; x: number; y: number } | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)

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

  // Double-click on empty canvas → show creation menu
  const handlePaneDoubleClick = useCallback(
    (event: ReactMouseEvent) => {
      // Convert screen position to flow position for node placement
      const flowPos = reactFlow.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })
      setCreationMenu({ x: event.clientX, y: event.clientY, flowPos })
      setContextMenu(null)
    },
    [reactFlow],
  )

  // Create a node of a given type at a position
  const createNode = useCallback(
    (type: string, position: { x: number; y: number }) => {
      const def = nodeTypeRegistry[type]
      const newNode: CanvasNodeType = {
        id: generateNodeId(),
        type,
        position,
        data: { ...def?.defaultData },
      }
      setNodes((nds) => [...nds, newNode])
    },
    [setNodes],
  )

  // Handle creation menu selection
  const handleCreationSelect = useCallback(
    (type: string) => {
      if (creationMenu) {
        createNode(type, creationMenu.flowPos)
      }
    },
    [creationMenu, createNode],
  )

  // Right-click on node → show context menu
  const handleNodeContextMenu: NodeMouseHandler = useCallback(
    (event, node) => {
      event.preventDefault()
      setContextMenu({
        nodeId: node.id,
        nodeType: node.type || 'untyped',
        x: event.clientX,
        y: event.clientY,
      })
      setCreationMenu(null)
    },
    [],
  )

  // Change node type (from context menu)
  const handleChangeType = useCallback(
    (nodeId: string, newType: string) => {
      setNodes((nds) =>
        nds.map((n) => (n.id === nodeId ? { ...n, type: newType } : n)),
      )
    },
    [setNodes],
  )

  // Duplicate a node
  const handleDuplicate = useCallback(
    (nodeId: string) => {
      const source = nodes.find((n) => n.id === nodeId)
      if (!source) return
      const newNode: CanvasNodeType = {
        id: generateNodeId(),
        type: source.type,
        position: { x: source.position.x + 40, y: source.position.y + 40 },
        data: { ...source.data },
      }
      setNodes((nds) => [...nds, newNode])
    },
    [nodes, setNodes],
  )

  // Delete a node and its connected edges
  const handleDeleteNode = useCallback(
    (nodeId: string) => {
      setNodes((nds) => nds.filter((n) => n.id !== nodeId))
      setEdges((eds) => eds.filter((e) => e.source !== nodeId && e.target !== nodeId))
    },
    [setNodes, setEdges],
  )

  // Keyboard shortcut: N → create untyped node at viewport center
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only when no input/textarea is focused
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      if (e.key === 'n' || e.key === 'N') {
        // Get viewport center in flow coordinates
        const container = containerRef.current
        if (!container) return

        const rect = container.getBoundingClientRect()
        const centerScreen = { x: rect.width / 2, y: rect.height / 2 }
        const flowPos = reactFlow.screenToFlowPosition(centerScreen)

        createNode('untyped', flowPos)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [reactFlow, createNode])

  // Close menus on pane click
  const handlePaneClick = useCallback(() => {
    setCreationMenu(null)
    setContextMenu(null)
  }, [])

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
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneClick={handlePaneClick}
        onDoubleClick={handlePaneDoubleClick}
        onNodeContextMenu={handleNodeContextMenu}
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

      {/* Node creation menu (double-click on empty canvas) */}
      {creationMenu && (
        <NodeCreationMenu
          position={{ x: creationMenu.x, y: creationMenu.y }}
          onSelect={handleCreationSelect}
          onClose={() => setCreationMenu(null)}
        />
      )}

      {/* Node context menu (right-click on node) */}
      {contextMenu && (
        <NodeContextMenu
          nodeId={contextMenu.nodeId}
          nodeType={contextMenu.nodeType}
          position={{ x: contextMenu.x, y: contextMenu.y }}
          onChangeType={handleChangeType}
          onDuplicate={handleDuplicate}
          onDelete={handleDeleteNode}
          onClose={() => setContextMenu(null)}
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
