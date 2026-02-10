import { useCallback, useEffect, useRef } from 'react'
import { NODE_ICONS, NODE_COLORS, nodeTypeRegistry } from '../nodes/registry'

interface NodeCreationMenuProps {
  position: { x: number; y: number } // screen coordinates for the menu
  onSelect: (type: string) => void
  onClose: () => void
}

// 2x4 grid layout order
const TYPE_ORDER = [
  'idea', 'question', 'fact', 'constraint',
  'thesis', 'action', 'data_collection', 'untyped',
]

function TypeIcon({ type }: { type: string }) {
  const pathData = NODE_ICONS[type]
  if (!pathData) return null
  const color = NODE_COLORS[type as keyof typeof NODE_COLORS]?.light || '#9CA3AF'

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={pathData} />
    </svg>
  )
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
        {TYPE_ORDER.map((type) => {
          const def = nodeTypeRegistry[type]
          return (
            <button
              key={type}
              className="canvas-creation-item"
              onClick={() => handleSelect(type)}
              title={def?.label || type}
            >
              <TypeIcon type={type} />
              <span className="canvas-creation-item-label">{def?.label || type}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
