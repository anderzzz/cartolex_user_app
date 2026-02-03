/**
 * BasicNode - Simple example custom node for the Cartolex Canvas
 *
 * Uses Esevioz CSS variables for consistent theming with the Flask app.
 */

import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { BasicNodeType } from '../types'

export function BasicNode({ data }: NodeProps<BasicNodeType>) {
  return (
    <div className="canvas-node">
      <Handle type="target" position={Position.Top} />

      <div className="canvas-node-header">
        {data.label || 'Node'}
      </div>

      {data.content && (
        <div className="canvas-node-content">
          {data.content}
        </div>
      )}

      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}
