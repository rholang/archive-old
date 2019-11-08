import { NodeSpec } from 'prosemirror-model';
import { DecisionItemDefinition as DecisionItemNode } from './decision-item';
/**
 * @name decisionList_node
 */
export interface DecisionListDefinition {
    type: 'decisionList';
    /**
     * @minItems 1
     */
    content: Array<DecisionItemNode>;
    attrs: {
        localId: string;
    };
}
export declare const decisionListSelector: string;
export declare const decisionList: NodeSpec;
