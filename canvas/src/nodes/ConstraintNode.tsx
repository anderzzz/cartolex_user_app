import { useState, useCallback, type KeyboardEvent } from 'react'
import { useReactFlow, type NodeProps } from '@xyflow/react'
import { NodeShell } from './NodeShell'
import { NODE_COLORS } from './registry'

export function ConstraintNode({ id, data, selected }: NodeProps) {
  const { updateNodeData } = useReactFlow()
  const [editingText, setEditingText] = useState(false)
  const [textDraft, setTextDraft] = useState('')

  const text = (data.text as string) || ''
  const label = (data.label as string) || ''

  // Structured constraint fields (optional)
  const parameter = (data.parameter as string) || ''
  const min = data.min as string | number | undefined
  const max = data.max as string | number | undefined
  const unit = (data.unit as string) || ''
  const hasStructured = parameter || min !== undefined || max !== undefined

  const startEditing = useCallback(() => {
    setTextDraft(text)
    setEditingText(true)
  }, [text])

  const commitText = useCallback(() => {
    setEditingText(false)
    if (textDraft.trim() !== text) {
      updateNodeData(id, { text: textDraft.trim() })
    }
  }, [id, textDraft, text, updateNodeData])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Escape') {
        setEditingText(false)
      }
    },
    [],
  )

  return (
    <NodeShell
      type="constraint"
      label={label}
      icon="constraint"
      headerColor={NODE_COLORS.constraint.light}
      selected={selected}
      committed={data.committed as boolean | undefined}
      onLabelChange={(newLabel) => updateNodeData(id, { label: newLabel })}
    >
      {editingText ? (
        <textarea
          className="canvas-node-edit-input"
          value={textDraft}
          onChange={(e) => setTextDraft(e.target.value)}
          onBlur={commitText}
          onKeyDown={handleKeyDown}
          autoFocus
          rows={3}
        />
      ) : (
        <div onDoubleClick={startEditing} className="canvas-node-text">
          {text || (!hasStructured && (
            <span className="canvas-node-placeholder">Double-click to add content</span>
          ))}
        </div>
      )}
      {hasStructured && (
        <div className="canvas-node-structured">
          {parameter && <span className="canvas-node-param">{parameter}</span>}
          {(min !== undefined || max !== undefined) && (
            <span className="canvas-node-range">
              {min !== undefined ? min : '…'} – {max !== undefined ? max : '…'}
              {unit && ` ${unit}`}
            </span>
          )}
        </div>
      )}
    </NodeShell>
  )
}
