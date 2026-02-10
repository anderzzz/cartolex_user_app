import type { NodeTypes } from '@xyflow/react'
import { nodeTypeRegistry } from './registry'
import { FactNode } from './FactNode'
import { IdeaNode } from './IdeaNode'
import { QuestionNode } from './QuestionNode'
import { ConstraintNode } from './ConstraintNode'
import { ThesisNode } from './ThesisNode'
import { ActionNode } from './ActionNode'
import { DataCollectionNode } from './DataCollectionNode'
import { UntypedNode } from './UntypedNode'

// Populate registry components (avoids circular import in registry.ts)
nodeTypeRegistry.fact.component = FactNode
nodeTypeRegistry.idea.component = IdeaNode
nodeTypeRegistry.question.component = QuestionNode
nodeTypeRegistry.constraint.component = ConstraintNode
nodeTypeRegistry.thesis.component = ThesisNode
nodeTypeRegistry.action.component = ActionNode
nodeTypeRegistry.data_collection.component = DataCollectionNode
nodeTypeRegistry.untyped.component = UntypedNode

/** React Flow nodeTypes mapping — built directly for strict typing */
export const nodeTypes: NodeTypes = {
  fact: FactNode,
  idea: IdeaNode,
  question: QuestionNode,
  constraint: ConstraintNode,
  thesis: ThesisNode,
  action: ActionNode,
  data_collection: DataCollectionNode,
  untyped: UntypedNode,
}

// Re-export for convenience
export { nodeTypeRegistry } from './registry'
export { FactNode } from './FactNode'
export { IdeaNode } from './IdeaNode'
export { QuestionNode } from './QuestionNode'
export { ConstraintNode } from './ConstraintNode'
export { ThesisNode } from './ThesisNode'
export { ActionNode } from './ActionNode'
export { DataCollectionNode } from './DataCollectionNode'
export { UntypedNode } from './UntypedNode'
