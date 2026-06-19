import { useState, useCallback, useEffect, useRef, type KeyboardEvent } from 'react'
import { useReactFlow, type NodeProps } from '@xyflow/react'
import { NodeShell } from './NodeShell'
import { NODE_COLORS } from './registry'
import { useWorkspaceStore } from '../store/workspaceStore'
import { triggerAction, checkActionStatus } from '../api/client'
import { workflowLabel } from './actionWorkflows'

/** How often to poll a running action for completion. */
const POLL_INTERVAL_MS = 3000
const TERMINAL_STATES = new Set(['complete', 'failed'])

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
  const [editingText, setEditingText] = useState(false)
  const [textDraft, setTextDraft] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const text = (data.text as string) || ''
  const label = (data.label as string) || ''
  const state = ((data.state as string) || 'empty') as ActionState
  const badge = STATE_BADGE[state] || STATE_BADGE.empty
  const workflowType = data.workflow_type as string | undefined
  const resultSummary = data.result_summary as string | undefined

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

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current)
      pollRef.current = null
    }
  }, [])

  // Poll while the action is running; reconcile state + result when terminal.
  useEffect(() => {
    if (!workspaceId || state !== 'running') {
      stopPolling()
      return
    }
    if (pollRef.current) return // already polling

    pollRef.current = setInterval(async () => {
      const result = await checkActionStatus(workspaceId, id)
      if (!result.ok) return
      const { state: nextState, result_summary } = result.data
      if (TERMINAL_STATES.has(nextState)) {
        stopPolling()
        updateNodeData(id, { state: nextState, result_summary })
      }
    }, POLL_INTERVAL_MS)

    return stopPolling
  }, [workspaceId, state, id, updateNodeData, stopPolling])

  const handleRun = useCallback(async () => {
    if (!workspaceId || submitting) return
    setSubmitting(true)
    const result = await triggerAction(workspaceId, id)
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
          {text || <span className="canvas-node-placeholder">Double-click to describe action</span>}
        </div>
      )}

      <div className="canvas-node-workflow">{workflowLabel(workflowType)}</div>

      {state === 'complete' && resultSummary && (
        <div className="canvas-node-result" title={resultSummary}>{resultSummary}</div>
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
