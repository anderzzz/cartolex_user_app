import { useState, useCallback, type KeyboardEvent } from 'react'
import { useReactFlow, type NodeProps } from '@xyflow/react'
import { NodeShell } from './NodeShell'
import { NODE_COLORS } from './registry'

export function IdeaNode({ id, data, selected }: NodeProps) {
  const { updateNodeData } = useReactFlow()
  const [editingText, setEditingText] = useState(false)
  const [textDraft, setTextDraft] = useState('')

  const text = (data.text as string) || ''
  const label = (data.label as string) || ''

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
      type="idea"
      label={label}
      icon="idea"
      headerColor={NODE_COLORS.idea.light}
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
          {text || <span className="canvas-node-placeholder">Double-click to add content</span>}
        </div>
      )}
    </NodeShell>
  )
}
