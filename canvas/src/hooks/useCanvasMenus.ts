/**
 * Custom hook managing canvas menu state and node CRUD operations.
 *
 * Extracts menu concerns (creation menu, context menu, keyboard shortcuts)
 * from App.tsx so the main component focuses on React Flow wiring and layout.
 */

import { useState, useCallback, useEffect, useRef } from 'react'
import { useReactFlow, type NodeMouseHandler } from '@xyflow/react'
import { nodeTypeRegistry } from '../nodes/registry'
import type { CanvasNodeType } from '../types'

type CreationMenuState = {
  x: number
  y: number
  flowPos: { x: number; y: number }
} | null

type ContextMenuState = {
  nodeId: string
  nodeType: string
  x: number
  y: number
} | null

let nodeIdCounter = 0
function generateNodeId(): string {
  nodeIdCounter += 1
  return `node-${Date.now()}-${nodeIdCounter}`
}

export function useCanvasMenus(
  nodes: CanvasNodeType[],
  setNodes: React.Dispatch<React.SetStateAction<CanvasNodeType[]>>,
  setEdges: React.Dispatch<React.SetStateAction<any[]>>,
) {
  const reactFlow = useReactFlow()
  const containerRef = useRef<HTMLDivElement>(null)

  const [creationMenu, setCreationMenu] = useState<CreationMenuState>(null)
  const [contextMenu, setContextMenu] = useState<ContextMenuState>(null)

  // --- Node CRUD ---

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

  const changeNodeType = useCallback(
    (nodeId: string, newType: string) => {
      setNodes((nds) =>
        nds.map((n) => (n.id === nodeId ? { ...n, type: newType } : n)),
      )
    },
    [setNodes],
  )

  const duplicateNode = useCallback(
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

  const deleteNode = useCallback(
    (nodeId: string) => {
      setNodes((nds) => nds.filter((n) => n.id !== nodeId))
      setEdges((eds: any[]) => eds.filter((e) => e.source !== nodeId && e.target !== nodeId))
    },
    [setNodes, setEdges],
  )

  // --- Menu handlers ---

  const handlePaneDoubleClick = useCallback(
    (event: React.MouseEvent) => {
      const flowPos = reactFlow.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })
      setCreationMenu({ x: event.clientX, y: event.clientY, flowPos })
      setContextMenu(null)
    },
    [reactFlow],
  )

  const handleCreationSelect = useCallback(
    (type: string) => {
      if (creationMenu) {
        createNode(type, creationMenu.flowPos)
      }
    },
    [creationMenu, createNode],
  )

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

  const closeMenus = useCallback(() => {
    setCreationMenu(null)
    setContextMenu(null)
  }, [])

  // --- Keyboard shortcut: N → untyped node at viewport center ---

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      if (e.key === 'n' || e.key === 'N') {
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

  return {
    containerRef,
    // Creation menu
    creationMenu,
    handlePaneDoubleClick,
    handleCreationSelect,
    closeCreationMenu: () => setCreationMenu(null),
    // Context menu
    contextMenu,
    handleNodeContextMenu,
    changeNodeType,
    duplicateNode,
    deleteNode,
    closeContextMenu: () => setContextMenu(null),
    // Close all
    closeMenus,
  }
}
