/**
 * Entry point for the Cartolex Canvas module
 *
 * Exports mountCanvas() function for embedding the canvas as a React island
 * within the Flask/HTMX application.
 */

import { createRoot, type Root } from 'react-dom/client'
import { App } from './App'
import type { CanvasMountOptions, CanvasAPI, CanvasGraph } from './types'

let currentRoot: Root | null = null
let currentGraph: CanvasGraph = { nodes: [], edges: [] }

/**
 * Mount the canvas into a container element
 *
 * @param options - Mount configuration
 * @returns Canvas API for interacting with the mounted canvas
 */
export function mountCanvas(options: CanvasMountOptions): CanvasAPI {
  const { containerId, initialGraph, onSave } = options

  const container = document.getElementById(containerId)
  if (!container) {
    throw new Error(`Container element with id "${containerId}" not found`)
  }

  // Unmount any existing canvas
  if (currentRoot) {
    currentRoot.unmount()
  }

  // Initialize graph state
  currentGraph = initialGraph ?? { nodes: [], edges: [] }

  // Create React root and render
  currentRoot = createRoot(container)
  currentRoot.render(
    <App
      initialGraph={currentGraph}
      onSave={(graph) => {
        currentGraph = graph
        if (onSave) {
          onSave(graph)
        }
      }}
    />
  )

  // Return API for external interaction
  return {
    getGraph: () => currentGraph,
    setGraph: (graph: CanvasGraph) => {
      currentGraph = graph
      if (currentRoot && container) {
        currentRoot.render(
          <App
            initialGraph={graph}
            onSave={(g) => {
              currentGraph = g
              if (onSave) {
                onSave(g)
              }
            }}
          />
        )
      }
    },
    clear: () => {
      currentGraph = { nodes: [], edges: [] }
      if (currentRoot && container) {
        currentRoot.render(
          <App
            initialGraph={currentGraph}
            onSave={(g) => {
              currentGraph = g
              if (onSave) {
                onSave(g)
              }
            }}
          />
        )
      }
    },
    unmount: () => {
      if (currentRoot) {
        currentRoot.unmount()
        currentRoot = null
      }
    },
  }
}

// Export types for consumers
export type { CanvasMountOptions, CanvasAPI, CanvasGraph } from './types'

// Expose to window for non-module usage
declare global {
  interface Window {
    CartolexCanvas: {
      mountCanvas: typeof mountCanvas
    }
  }
}

if (typeof window !== 'undefined') {
  window.CartolexCanvas = { mountCanvas }
}
