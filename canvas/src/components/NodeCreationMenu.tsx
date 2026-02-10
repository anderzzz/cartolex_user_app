import { useCallback, useEffect, useRef } from 'react'
import { nodeTypeRegistry, CREATION_MENU_ORDER } from '../nodes/registry'
import { NodeTypeIcon } from './NodeTypeIcon'

interface NodeCreationMenuProps {
  position: { x: number; y: number } // screen coordinates for the menu
  onSelect: (type: string) => void
  onClose: () => void
}

export function NodeCreationMenu({ position, onSelect, onClose }: NodeCreationMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

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

  const handleSelect = useCallback(
    (type: string) => {
      onSelect(type)
      onClose()
    },
    [onSelect, onClose],
  )

  return (
    <div
      ref={menuRef}
      className="canvas-creation-menu"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="canvas-creation-grid">
        {CREATION_MENU_ORDER.map((type) => {
          const def = nodeTypeRegistry[type]
          return (
            <button
              key={type}
              className="canvas-creation-item"
              onClick={() => handleSelect(type)}
              title={def?.label || type}
            >
              <NodeTypeIcon type={type} size={20} />
              <span className="canvas-creation-item-label">{def?.label || type}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
