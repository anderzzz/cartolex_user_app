/**
 * Node type registry for the Cartolex Canvas
 */

import type { NodeTypes } from '@xyflow/react'
import { BasicNode } from './BasicNode'

export const nodeTypes: NodeTypes = {
  basic: BasicNode,
}

export { BasicNode }
