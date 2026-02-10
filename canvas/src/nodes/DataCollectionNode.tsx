import { useState, useCallback, type KeyboardEvent } from 'react'
import { useReactFlow, type NodeProps } from '@xyflow/react'
import { NodeShell } from './NodeShell'
import { NODE_COLORS } from './registry'

export function DataCollectionNode({ id, data, selected }: NodeProps) {
  const { updateNodeData } = useReactFlow()
  const [editingContent, setEditingContent] = useState(false)
  const [contentDraft, setContentDraft] = useState('')

  const content = (data.content as string) || ''
  const label = (data.label as string) || ''
  const count = data.count as number | undefined

  const startEditing = useCallback(() => {
    setContentDraft(content)
    setEditingContent(true)
  }, [content])

  const commitContent = useCallback(() => {
    setEditingContent(false)
    if (contentDraft.trim() !== content) {
      updateNodeData(id, { content: contentDraft.trim() })
    }
  }, [id, contentDraft, content, updateNodeData])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Escape') {
        setEditingContent(false)
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
      {editingContent ? (
        <textarea
          className="canvas-node-edit-input"
          value={contentDraft}
          onChange={(e) => setContentDraft(e.target.value)}
          onBlur={commitContent}
          onKeyDown={handleKeyDown}
          autoFocus
          rows={3}
        />
      ) : (
        <div onDoubleClick={startEditing} className="canvas-node-text">
          {content || <span className="canvas-node-placeholder">Double-click to describe collection</span>}
        </div>
      )}
      {count !== undefined && (
        <div className="canvas-node-count">{count} items</div>
      )}
    </NodeShell>
  )
}
