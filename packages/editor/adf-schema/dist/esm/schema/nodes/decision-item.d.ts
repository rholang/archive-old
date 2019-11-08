import { NodeSpec } from 'prosemirror-model';
import { Inline } from './doc';
/**
 * @name decisionItem_node
 */
export interface DecisionItemDefinition {
    type: 'decisionItem';
    /**
     * @allowUnsupportedInline true
     */
    content?: Array<Inline>;
    attrs: {
        localId: string;
        state: string;
    };
}
export declare const decisionItem: NodeSpec;
