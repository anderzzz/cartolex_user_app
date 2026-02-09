/**
 * Debounced auto-save hook.
 *
 * Watches for graph changes and triggers a save to the backend after
 * a configurable debounce period (default 5 seconds).
 */

import { useEffect, useRef, useCallback } from 'react'
import { saveWorkspace, toBackendFormat } from '../api'
import { useWorkspaceStore } from '../store/workspaceStore'
import type { CanvasNodeType, CanvasEdgeType } from '../types'

export function useAutoSave(
  workspaceId: string | undefined,
  nodes: CanvasNodeType[],
  edges: CanvasEdgeType[],
  debounceMs: number = 5000,
) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isFirstRender = useRef(true)
  const { setSaveStatus, markSaved, markError, markUnsaved } =
    useWorkspaceStore()

  const doSave = useCallback(
    async (currentNodes: CanvasNodeType[], currentEdges: CanvasEdgeType[]) => {
      if (!workspaceId) return

      setSaveStatus('saving')
      const payload = toBackendFormat(currentNodes, currentEdges)
      const result = await saveWorkspace(workspaceId, payload)

      if (result.ok) {
        markSaved()
      } else {
        markError(result.error)
      }
    },
    [workspaceId, setSaveStatus, markSaved, markError],
  )

  // Watch for changes and debounce
  useEffect(() => {
    // Skip the first render — that's just the initial load
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (!workspaceId) return

    markUnsaved()

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      doSave(nodes, edges)
    }, debounceMs)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [nodes, edges, workspaceId, debounceMs, doSave, markUnsaved])

  // Immediate save (for the Save button)
  const saveNow = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    doSave(nodes, edges)
  }, [nodes, edges, doSave])

  return { saveNow }
}
