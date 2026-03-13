import type { ComponentType } from 'react'
import type { NodeProps } from '@xyflow/react'

export interface NodeTypeDefinition {
  component: ComponentType<NodeProps<any>>
  label: string
  headerColor: string
  headerColorDark: string
  icon: string // SVG path data or identifier
  defaultData: Record<string, unknown>
}

// Colors per type (light / dark)
export const NODE_COLORS = {
  fact:            { light: '#3B5998', dark: '#7B9BD2' },
  idea:            { light: '#D4A017', dark: '#E8C65A' },
  question:        { light: '#7B3FA0', dark: '#B07DD6' },
  constraint:      { light: '#C0392B', dark: '#E07B6F' },
  thesis:          { light: '#1B5420', dark: '#4A9E54' },
  action:          { light: '#0E7490', dark: '#38B2CC' },
  data_collection: { light: '#4338CA', dark: '#7C74E0' },
  untyped:         { light: '#9CA3AF', dark: '#6B7280' },
} as const

// SVG icon paths (16x16 viewBox)
export const NODE_ICONS: Record<string, string> = {
  // Document/citation icon for facts
  fact: 'M4 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1zm1 3h6m-6 3h6m-6 3h4',
  // Lightbulb for ideas
  idea: 'M8 1a5 5 0 013 9v1.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 015 11.5V10a5 5 0 013-9zm-1.5 13h3',
  // Question mark
  question: 'M6 5a2 2 0 114 0c0 1.5-2 2-2 3.5m0 2.5h.01',
  // Shield for constraints
  constraint: 'M8 1l6 3v4c0 3.5-2.5 6.5-6 8-3.5-1.5-6-4.5-6-8V4l6-3z',
  // Compass/target for thesis
  thesis: 'M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 100 4 2 2 0 000-4z',
  // Gear for actions
  action: 'M8 3.5a.5.5 0 01.5.5v1.05a3.5 3.5 0 011.45.6l.74-.74a.5.5 0 01.71.71l-.74.74c.3.43.51.92.6 1.45H12.3a.5.5 0 010 1h-1.05a3.5 3.5 0 01-.6 1.45l.74.74a.5.5 0 01-.71.71l-.74-.74a3.5 3.5 0 01-1.45.6V12.3a.5.5 0 01-1 0v-1.05a3.5 3.5 0 01-1.45-.6l-.74.74a.5.5 0 01-.71-.71l.74-.74a3.5 3.5 0 01-.6-1.45H3.7a.5.5 0 010-1h1.05a3.5 3.5 0 01.6-1.45l-.74-.74a.5.5 0 01.71-.71l.74.74A3.5 3.5 0 017.5 5.05V4a.5.5 0 01.5-.5zM8 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z',
  // Stack/layers for data collection
  data_collection: 'M2 5l6-3 6 3-6 3-6-3zm0 3l6 3 6-3m-12 3l6 3 6-3',
  // Dash for untyped
  untyped: 'M4 8h8',
}

// Build the registry — components are set after import to avoid circular deps.
// Use `setRegistryComponents()` to populate.
export const nodeTypeRegistry: Record<string, NodeTypeDefinition> = {
  fact: {
    component: null!,
    label: 'Fact',
    headerColor: NODE_COLORS.fact.light,
    headerColorDark: NODE_COLORS.fact.dark,
    icon: 'fact',
    defaultData: { label: '', text: '', source: '' },
  },
  idea: {
    component: null!,
    label: 'Idea',
    headerColor: NODE_COLORS.idea.light,
    headerColorDark: NODE_COLORS.idea.dark,
    icon: 'idea',
    defaultData: { label: '', text: '' },
  },
  question: {
    component: null!,
    label: 'Question',
    headerColor: NODE_COLORS.question.light,
    headerColorDark: NODE_COLORS.question.dark,
    icon: 'question',
    defaultData: { label: '', text: '' },
  },
  constraint: {
    component: null!,
    label: 'Constraint',
    headerColor: NODE_COLORS.constraint.light,
    headerColorDark: NODE_COLORS.constraint.dark,
    icon: 'constraint',
    defaultData: { label: '', text: '' },
  },
  thesis: {
    component: null!,
    label: 'Thesis',
    headerColor: NODE_COLORS.thesis.light,
    headerColorDark: NODE_COLORS.thesis.dark,
    icon: 'thesis',
    defaultData: { label: '', text: '' },
  },
  action: {
    component: null!,
    label: 'Action',
    headerColor: NODE_COLORS.action.light,
    headerColorDark: NODE_COLORS.action.dark,
    icon: 'action',
    defaultData: { label: '', text: '', state: 'empty' },
  },
  data_collection: {
    component: null!,
    label: 'Data Collection',
    headerColor: NODE_COLORS.data_collection.light,
    headerColorDark: NODE_COLORS.data_collection.dark,
    icon: 'data_collection',
    defaultData: { label: '', text: '' },
  },
  untyped: {
    component: null!,
    label: 'Untyped',
    headerColor: NODE_COLORS.untyped.light,
    headerColorDark: NODE_COLORS.untyped.dark,
    icon: 'untyped',
    defaultData: { label: '', text: '' },
  },
}

/** All valid node type keys */
export const NODE_TYPES = Object.keys(nodeTypeRegistry) as string[]

/** Display order for the creation menu (2x4 grid) — curated, not alphabetical */
export const CREATION_MENU_ORDER: string[] = [
  'idea', 'question', 'fact', 'constraint',
  'thesis', 'action', 'data_collection', 'untyped',
]
