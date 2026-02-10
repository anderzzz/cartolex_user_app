# Canvas Interactions Reference

Running document of implemented canvas UX interactions. Updated as features are added or changed.

---

## Node Types

Eight semantic node types, each with a distinct header color and icon:

| Type | Color | Semantic | Special Features |
|------|-------|----------|------------------|
| **Fact** | Slate blue (#3B5998) | Grounded, verified, sourced | Optional `source` citation line |
| **Idea** | Amber gold (#D4A017) | Speculative, generative | Plain text content |
| **Question** | Purple (#7B3FA0) | Open, uncertain, seeking | Plain text content |
| **Constraint** | Vermilion (#C0392B) | Hard boundary | Optional structured fields: parameter, min/max, unit |
| **Thesis** | Pine green (#1B5420) | Active stance | Wider min-width (200px), thicker border |
| **Action** | Teal (#0E7490) | Triggers workflow | State badge: empty / loaded / running / complete / failed |
| **Data Collection** | Indigo (#4338CA) | Bundled evidence | Optional item count indicator |
| **Untyped** | Gray (#9CA3AF) | Not yet classified | Dashed border; default for quick creation |

---

## Creating Nodes

### Double-Click on Canvas (primary)
1. Double-click on empty canvas area
2. A 4x2 grid menu appears centered on the click position showing all 8 type icons
3. Click a type icon to create a node of that type at the click position
4. Press **Escape** or click outside the menu to dismiss

Grid layout order:
```
 Idea   | Question  | Fact       | Constraint
 Thesis | Action    | Data Coll. | Untyped
```

### Press N (fast path)
- Press **N** when the canvas is focused (not editing text) to instantly create an **Untyped** node at the center of the current viewport
- The node can be promoted to a specific type later via right-click

### Node Connection
- Drag from a source handle (bottom of a node) to a target handle (top of another node)
- Creates a default edge (type: `similar_to` on the backend)

---

## Editing Nodes

### Label Editing (in header)
- **Double-click** the node header label to enter edit mode
- Type a new label, then **Enter** to confirm or **Escape** to cancel
- Click away (blur) also confirms the edit
- Empty labels revert to previous value

### Content Editing (in body)
- **Double-click** the content area to enter edit mode
- A textarea appears for multi-line editing
- **Escape** cancels editing
- Click away (blur) confirms and saves the edit
- Changes are picked up by auto-save

---

## Right-Click Context Menu

Right-click on any node to open the context menu:

| Action | Behavior |
|--------|----------|
| **Change type** | Hover to expand submenu showing all 8 types; current type marked with checkmark; click to change |
| **Duplicate** | Creates a copy offset 40px right and 40px down |
| **Delete** | Removes the node and all its connected edges |

Dismiss with **Escape** or by clicking outside the menu.

### Type Promotion (Gradual Crystallization)
Changing type preserves all content — only the visual appearance and backend type field update. Works in both directions: promote untyped to typed, or demote typed back to untyped.

---

## Persistence

### Auto-Save
- Changes are saved automatically after a **5-second debounce** (no save during rapid editing)
- Save status indicator in the top-right panel: `Saved` | `Saving...` | `Unsaved` | `Save failed`
- Only active when a `workspaceId` is set (workspace loaded from backend)

### Manual Save
- **Save** button in the top-right panel triggers an immediate save, cancelling any pending debounce

### Backend Format
- Nodes are serialized with their React Flow type (e.g., `fact`, `thesis`, `untyped`) which maps 1:1 to backend types
- Unknown backend types fall back to `untyped` on load
- Edges always include type (defaults to `similar_to`); positions always included in save payload

---

## Keyboard Shortcuts

| Key | Context | Action |
|-----|---------|--------|
| **N** | Canvas focused, not editing text | Create untyped node at viewport center |
| **Escape** | Creation/context menu open | Close menu |
| **Escape** | Editing node label or content | Cancel edit, revert |
| **Enter** | Editing node label | Confirm label change |
| **Delete/Backspace** | Node selected | React Flow default: delete selected |

---

## Visual States

### Committed vs Uncommitted (wired for Step 4)
- **Committed** (default): Full opacity, solid border
- **Uncommitted** (`committed: false` in data): 70% opacity, dashed border
- Currently all nodes render as committed; toggle coming in Step 4

### Selection
- Selected nodes get a highlight ring (2px `--color-highlight` box shadow)

### Node Type Borders
- **Untyped**: Dashed border (visually provisional)
- **Constraint**: Red border (`#C0392B`)
- **Thesis**: 3px border (thicker than default 2px)
- All others: Default 2px solid `--color-dominant` border

---

## Architecture Notes

### Component Structure
```
App (ReactFlowProvider wrapper)
  └── CanvasInner (React Flow + panel)
        ├── useCanvasMenus hook (menu state, node CRUD, keyboard)
        ├── useAutoSave hook (debounced persistence)
        ├── NodeCreationMenu (double-click popover)
        ├── NodeContextMenu (right-click menu)
        └── Node components (via nodeTypes registry)
              └── NodeShell (shared header + handles + content layout)
                    └── NodeTypeIcon (shared SVG icon component)
```

### Registry Pattern
All node type metadata (colors, icons, labels, default data) lives in `canvas/src/nodes/registry.ts`. Adding a new type requires:
1. Entry in `nodeTypeRegistry`
2. New component file extending `NodeShell`
3. Import + assignment in `nodes/index.ts`

### Serialization
- `toBackendFormat()`: React Flow nodes/edges to backend payload
- `fromBackendFormat()`: Backend workspace detail to React Flow format
- Type mapping uses registry's known types with `untyped` fallback
