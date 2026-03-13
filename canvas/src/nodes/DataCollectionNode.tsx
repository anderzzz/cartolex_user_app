import { useState, useCallback, type KeyboardEvent } from 'react'
import { useReactFlow, type NodeProps } from '@xyflow/react'
import { NodeShell } from './NodeShell'
import { NODE_COLORS } from './registry'

export function DataCollectionNode({ id, data, selected }: NodeProps) {
  const { updateNodeData } = useReactFlow()
  const [editingText, setEditingText] = useState(false)
  const [textDraft, setTextDraft] = useState('')

  const text = (data.text as string) || ''
  const label = (data.label as string) || ''
  const count = data.count as number | undefined

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
      type="data_collection"
      label={label}
      icon="data_collection"
      headerColor={NODE_COLORS.data_collection.light}
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
          {text || <span className="canvas-node-placeholder">Double-click to describe collection</span>}
        </div>
      )}
      {count !== undefined && (
        <div className="canvas-node-count">{count} items</div>
      )}
    </NodeShell>
  )
}
