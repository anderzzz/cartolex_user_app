/**
 * Zustand store for workspace-level state (save status, workspace identity).
 */

import { create } from 'zustand'

export type SaveStatus = 'saved' | 'saving' | 'unsaved' | 'error'

interface WorkspaceState {
  workspaceId: string | null
  workspaceName: string
  saveStatus: SaveStatus
  lastSavedAt: Date | null
  lastError: string | null

  setWorkspaceId: (id: string) => void
  setWorkspaceName: (name: string) => void
  setSaveStatus: (status: SaveStatus) => void
  markSaved: () => void
  markError: (error: string) => void
  markUnsaved: () => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  workspaceId: null,
  workspaceName: 'Untitled Workspace',
  saveStatus: 'saved',
  lastSavedAt: null,
  lastError: null,

  setWorkspaceId: (id) => set({ workspaceId: id }),
  setWorkspaceName: (name) => set({ workspaceName: name }),

  setSaveStatus: (status) => set({ saveStatus: status }),

  markSaved: () =>
    set({ saveStatus: 'saved', lastSavedAt: new Date(), lastError: null }),

  markError: (error) =>
    set({ saveStatus: 'error', lastError: error }),

  markUnsaved: () =>
    set((state) =>
      state.saveStatus === 'saving' ? state : { saveStatus: 'unsaved' },
    ),
}))
