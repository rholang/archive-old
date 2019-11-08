import { NodeSpec } from 'prosemirror-model';
/**
 * @name date_node
 */
export interface DateDefinition {
    type: 'date';
    attrs: {
        /**
         * @minLength 1
         */
        timestamp: string;
    };
}
export declare const date: NodeSpec;
