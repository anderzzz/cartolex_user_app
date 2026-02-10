import { useState, useCallback, useEffect, useRef } from 'react'
import { nodeTypeRegistry, NODE_TYPES } from '../nodes/registry'
import { NodeTypeIcon } from './NodeTypeIcon'

interface NodeContextMenuProps {
  nodeId: string
  nodeType: string
  position: { x: number; y: number } // screen coordinates
  onChangeType: (nodeId: string, newType: string) => void
  onDuplicate: (nodeId: string) => void
  onDelete: (nodeId: string) => void
  onClose: () => void
}

export function NodeContextMenu({
  nodeId,
  nodeType,
  position,
  onChangeType,
  onDuplicate,
  onDelete,
  onClose,
}: NodeContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [showTypeSubmenu, setShowTypeSubmenu] = useState(false)

  // Close on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleChangeType = useCallback(
    (newType: string) => {
      if (newType !== nodeType) {
        onChangeType(nodeId, newType)
      }
      onClose()
    },
    [nodeId, nodeType, onChangeType, onClose],
  )

  return (
    <div
      ref={menuRef}
      className="canvas-context-menu"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
      }}
    >
      <div
        className="canvas-context-item canvas-context-item--parent"
        onMouseEnter={() => setShowTypeSubmenu(true)}
        onMouseLeave={() => setShowTypeSubmenu(false)}
      >
        <span>Change type</span>
        <span className="canvas-context-arrow">&#9656;</span>

        {showTypeSubmenu && (
          <div className="canvas-context-submenu">
            {NODE_TYPES.map((type) => {
              const def = nodeTypeRegistry[type]
              const isCurrent = type === nodeType
              return (
                <button
                  key={type}
                  className={`canvas-context-item${isCurrent ? ' canvas-context-item--active' : ''}`}
                  onClick={() => handleChangeType(type)}
                >
                  <NodeTypeIcon type={type} size={14} />
                  <span>{def?.label || type}</span>
                  {isCurrent && <span className="canvas-context-check">&#10003;</span>}
                </button>
              )
            })}
          </div>
        )}
      </div>

      <button
        className="canvas-context-item"
        onClick={() => {
          onDuplicate(nodeId)
          onClose()
        }}
      >
        Duplicate
      </button>

      <div className="canvas-context-divider" />

      <button
        className="canvas-context-item canvas-context-item--danger"
        onClick={() => {
          onDelete(nodeId)
          onClose()
        }}
      >
        Delete
      </button>
    </div>
  )
}
