# Cartolex Canvas Module

React Flow-based canvas for visual workflow editing, integrated as a "React island" within the Flask/HTMX Cartolex User App.

## Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
cd canvas
npm install
```

### Development Mode
Start the Vite dev server:
```bash
npm run dev
```
This runs on http://localhost:5173

To use the dev server with the Flask app, set the environment variable:
```bash
export CANVAS_DEV_MODE_USER_APP=true
```

### Production Build
Build for production (outputs to `cartolex_user_app/static/canvas/`):
```bash
npm run build
```

## Architecture

### React Island Pattern
The canvas is embedded within the existing Flask/Jinja2 templates as an isolated React application. This allows:
- Full React ecosystem (hooks, context, etc.) within the canvas
- HTMX/Alpine.js for the rest of the application
- Clean separation of concerns

### Entry Point
The module exports `mountCanvas()` function:
```typescript
import { mountCanvas } from './cartolex-canvas.js'

const canvas = mountCanvas({
  containerId: 'canvas-root',
  onSave: (graph) => {
    console.log('Graph saved:', graph)
  }
})
```

### Custom Nodes
Add new node types in `src/nodes/`:
1. Create a new component (e.g., `ProcessNode.tsx`)
2. Register it in `src/nodes/index.ts`
3. Use the `type` property when creating nodes

### Theming
Styles use Esevioz CSS variables defined in `esevioz-theme.css`:
- `--color-background`: Background color
- `--color-text`: Text color
- `--color-dominant`: Primary brand color (pine/antique white)
- `--color-highlight`: Accent color (butterscotch/fern)
- `--color-alert`: Error/warning color (vermilion)

Dark mode is automatically handled via `[data-theme="dark"]` selectors.

## File Structure

```
canvas/
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite bundler configuration
├── tsconfig.json         # TypeScript configuration
├── src/
│   ├── index.tsx         # Entry point, mountCanvas() API
│   ├── App.tsx           # Main React Flow component
│   ├── types.ts          # TypeScript type definitions
│   ├── nodes/
│   │   ├── index.ts      # Node type registry
│   │   └── BasicNode.tsx # Example custom node
│   ├── edges/
│   │   └── index.ts      # Edge type registry
│   └── styles/
│       └── canvas.css    # Canvas-specific styles
└── README.md             # This file
```

## API Reference

### `mountCanvas(options)`
Mount the canvas into a container.

**Options:**
- `containerId: string` - ID of the container element
- `initialGraph?: CanvasGraph` - Initial nodes and edges
- `onSave?: (graph: CanvasGraph) => void` - Callback when Save is clicked

**Returns:** `CanvasAPI`
- `getGraph()` - Get current graph state
- `setGraph(graph)` - Replace graph state
- `clear()` - Clear all nodes and edges
- `unmount()` - Unmount the canvas

### Types
```typescript
interface CanvasGraph {
  nodes: Node[]
  edges: Edge[]
}
```
