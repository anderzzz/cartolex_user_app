import { useState, useCallback, type KeyboardEvent } from 'react'
import { useReactFlow, type NodeProps } from '@xyflow/react'
import { NodeShell } from './NodeShell'
import { NODE_COLORS } from './registry'
import { useWorkspaceStore } from '../store/workspaceStore'
import { executeAction } from '../api/client'

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
  const { workspaceId } = useWorkspaceStore()
  const [editingContent, setEditingContent] = useState(false)
  const [contentDraft, setContentDraft] = useState('')
  const [submitting, setSubmitting] = useState(false)

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

  const handleRun = useCallback(async () => {
    if (!workspaceId || submitting) return
    setSubmitting(true)
    const result = await executeAction(workspaceId, id)
    if (result.ok) {
      updateNodeData(id, { state: 'running', job_id: result.data.job_id })
    }
    setSubmitting(false)
  }, [workspaceId, id, submitting, updateNodeData])

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
        {state === 'loaded' && (
          <button
            className="canvas-run-btn"
            onClick={handleRun}
            disabled={submitting || !workspaceId}
            title={submitting ? 'Submitting…' : 'Run action'}
          >
            {submitting ? (
              <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
                <path d="M8 2 A6 6 0 0 1 14 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                <path d="M4 2.5 L13 8 L4 13.5 Z"/>
              </svg>
            )}
          </button>
        )}
      </div>
    </NodeShell>
  )
}
