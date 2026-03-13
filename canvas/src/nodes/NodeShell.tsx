import { useState, useCallback, useRef, useEffect, type ReactNode, type KeyboardEvent } from 'react'
import { Handle, Position } from '@xyflow/react'
import { NodeTypeIcon } from '../components/NodeTypeIcon'

interface NodeShellProps {
  type: string
  label: string
  icon: string // node type key for icon lookup
  headerColor: string
  selected?: boolean
  committed?: boolean
  children: ReactNode
  onLabelChange?: (newLabel: string) => void
}

export function NodeShell({
  type,
  label,
  icon,
  headerColor,
  selected,
  committed,
  children,
  onLabelChange,
}: NodeShellProps) {
  const [editingLabel, setEditingLabel] = useState(false)
  const [labelDraft, setLabelDraft] = useState(label)
  const inputRef = useRef<HTMLInputElement>(null)

  // Sync draft when label prop changes externally
  useEffect(() => {
    if (!editingLabel) {
      setLabelDraft(label)
    }
  }, [label, editingLabel])

  // Focus input when entering edit mode
  useEffect(() => {
    if (editingLabel && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [editingLabel])

  const commitLabel = useCallback(() => {
    setEditingLabel(false)
    const trimmed = labelDraft.trim()
    if (trimmed && trimmed !== label && onLabelChange) {
      onLabelChange(trimmed)
    } else {
      setLabelDraft(label) // revert
    }
  }, [labelDraft, label, onLabelChange])

  const handleLabelKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        commitLabel()
      } else if (e.key === 'Escape') {
        setLabelDraft(label)
        setEditingLabel(false)
      }
    },
    [commitLabel, label],
  )

  const borderStyle = committed === false ? 'dashed' : 'solid'
  const opacity = committed === false ? 0.7 : 1

  return (
    <div
      className={`canvas-node canvas-node--${type}${selected ? ' canvas-node--selected' : ''}`}
      style={{ opacity, borderStyle }}
      onDoubleClick={(e) => e.stopPropagation()}
    >
      <Handle type="target" position={Position.Top} />

      <div className="canvas-node-header" style={{ backgroundColor: headerColor }}>
        <NodeTypeIcon type={icon} size={16} color="currentColor" />
        {editingLabel ? (
          <input
            ref={inputRef}
            className="canvas-node-label-input"
            value={labelDraft}
            onChange={(e) => setLabelDraft(e.target.value)}
            onBlur={commitLabel}
            onKeyDown={handleLabelKeyDown}
          />
        ) : (
          <span
            className="canvas-node-label"
            onDoubleClick={() => onLabelChange && setEditingLabel(true)}
            title={label || 'Double-click to edit'}
          >
            {label || 'Untitled'}
          </span>
        )}
      </div>

      <div className="canvas-node-content">{children}</div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}
