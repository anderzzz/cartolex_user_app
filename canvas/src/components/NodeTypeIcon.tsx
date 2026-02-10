import { NODE_ICONS, NODE_COLORS } from '../nodes/registry'

interface NodeTypeIconProps {
  type: string
  size?: number
  /** Override stroke color (defaults to white for headers, type color for menus) */
  color?: string
}

/**
 * Shared SVG icon for node types. Used in:
 * - NodeShell headers (white stroke, 16px)
 * - NodeCreationMenu (type-colored stroke, 20px)
 * - NodeContextMenu (type-colored stroke, 14px)
 */
export function NodeTypeIcon({ type, size = 16, color }: NodeTypeIconProps) {
  const pathData = NODE_ICONS[type]
  if (!pathData) return null

  const strokeColor = color ?? NODE_COLORS[type as keyof typeof NODE_COLORS]?.light ?? '#9CA3AF'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d={pathData} />
    </svg>
  )
}
