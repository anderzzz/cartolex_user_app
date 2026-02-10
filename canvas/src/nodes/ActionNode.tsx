import { useState, useCallback, type KeyboardEvent } from 'react'
import { useReactFlow, type NodeProps } from '@xyflow/react'
import { NodeShell } from './NodeShell'
import { NODE_COLORS } from './registry'

type ActionState = 'empty' | 'loaded' | 'running' | 'complete' | 'failed'

const STATE_BADGE: Record<ActionState, { label: string; className: string }> = {
  empty:    { label: 'Not configured', className: 'canvas-badge--neutral' },
  loaded:   { label: 'Ready',          className: 'canvas-badge--ready' },
  running:  { label: 'Running',        className: 'canvas-badge--running' },
  complete: { label: 'Complete',       className: 'canvas-badge--success' },
  failed:   { label: 'Failed',         className: 'canvas-badge--error' },
}

export function ActionNode({ id, data, selected }: NodeProps) {
  const { updateNodeData } = useReactFlow()
  const [editingContent, setEditingContent] = useState(false)
  const [contentDraft, setContentDraft] = useState('')

  const content = (data.content as string) || ''
  const label = (data.label as string) || ''
  const state = ((data.state as string) || 'empty') as ActionState
  const badge = STATE_BADGE[state] || STATE_BADGE.empty

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
      type="action"
      label={label}
      icon="action"
      headerColor={NODE_COLORS.action.light}
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
          {content || <span className="canvas-node-placeholder">Double-click to describe action</span>}
        </div>
      )}

      <div className="canvas-node-action-footer">
        <span className={`canvas-badge ${badge.className}`}>{badge.label}</span>
      </div>
    </NodeShell>
  )
}
