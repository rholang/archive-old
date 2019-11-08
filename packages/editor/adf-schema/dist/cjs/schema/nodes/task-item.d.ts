import { NodeSpec } from 'prosemirror-model';
import { Inline } from './doc';
/**
 * @name taskItem_node
 */
export interface TaskItemDefinition {
    type: 'taskItem';
    /**
     * @allowUnsupportedInline true
     */
    content?: Array<Inline>;
    attrs: {
        localId: string;
        state: 'TODO' | 'DONE';
    };
}
export declare const taskItem: NodeSpec;
