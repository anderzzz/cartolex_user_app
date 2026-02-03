# ADR-002: React Island Architecture for Canvas Module

**Status**: Accepted
**Date**: 2026-02-03
**Author**: Anders Ohrn

## Context

The Cartolex User App needs a visual canvas for workflow design and experimentation. This requires:

- **Rich interactivity**: Drag-and-drop nodes, pan/zoom, edge connections
- **Complex state management**: Graph state with undo/redo potential
- **Specialized libraries**: React Flow provides mature node-based UI primitives

The existing application uses HTMX + Alpine.js (per ADR-001). Introducing React for the entire app would:
- Require rewriting all existing templates
- Conflict with established HTMX/Alpine patterns
- Add unnecessary complexity to pages that don't need it

## Decision

We adopt a **React Island** architecture: the canvas is an isolated React application embedded within the Flask/Jinja2 page structure.

### Core Principles

```
Flask/Jinja2 → Page structure, navigation, server rendering
HTMX/Alpine → Dynamic interactions on non-canvas pages
React → Canvas module only, mounted into a container element
```

### Implementation

**Separate build pipeline**: The canvas lives in `canvas/` with its own `package.json`, Vite bundler, and TypeScript configuration. It builds to `cartolex_user_app/static/canvas/`.

**Mount API**: The canvas exports a `mountCanvas()` function that accepts a container ID and renders into it:

```javascript
import { mountCanvas } from './cartolex-canvas.js'

const canvas = mountCanvas({
  containerId: 'canvas-root',
  onSave: (graph) => { /* handle save */ }
})
```

**Development mode toggle**: `CANVAS_DEV_MODE_USER_APP=true` loads from Vite dev server (localhost:5173) for hot module replacement during development.

### Boundary Rules

1. **No React outside canvas**: React doesn't leak into other pages
2. **No HTMX inside canvas**: The canvas container is React-only territory
3. **Communication via callbacks**: Flask template passes callbacks to `mountCanvas()`
4. **Theming via CSS variables**: Canvas styles reference `--color-*` variables from `esevioz-theme.css`

### When to Extend This Pattern

Use React islands for features requiring:
- Complex drag-and-drop interactions
- Canvas/graph visualizations
- Rich text editing
- Features where React ecosystem libraries provide significant value

Keep using HTMX/Alpine for:
- Forms and CRUD operations
- Server-rendered lists and tables
- Simple toggle/expand interactions
- Anything that doesn't need client-side state complexity

## Consequences

### Positive
- **Best tool for the job**: React Flow for canvas, HTMX for server interactions
- **Isolated complexity**: React build pipeline doesn't affect main app
- **Independent deployment**: Canvas can be rebuilt without touching Flask
- **Theme consistency**: CSS variables maintain visual coherence

### Negative
- **Two build systems**: npm for canvas, pip for Flask
- **Developer context switching**: Different mental models per area
- **Bundle size**: React adds ~40KB (gzipped) to canvas page only

### Neutral
- **Testing split**: Canvas needs Jest/React Testing Library; Flask routes use pytest

## File Structure

```
cartolex_user_app/
├── templates/canvas.html      # Mounts React into #canvas-root
├── routes/canvas.py           # Flask blueprint
├── static/canvas/             # Built bundle output
│   └── cartolex-canvas.js
└── config.py                  # CANVAS_DEV_MODE setting

canvas/                        # Separate Node.js project
├── package.json
├── vite.config.js
├── src/
│   ├── index.tsx              # mountCanvas() entry point
│   ├── App.tsx                # React Flow canvas
│   └── nodes/                 # Custom node components
└── README.md
```

## CLI Commands

```bash
# Build canvas for production
python -m cartolex_user_app.scripts.run canvas-build

# Run Vite dev server with HMR
python -m cartolex_user_app.scripts.run canvas-dev
```

## Related Decisions

- ADR-001: HTMX + Alpine.js Design Principles (establishes non-React patterns)
