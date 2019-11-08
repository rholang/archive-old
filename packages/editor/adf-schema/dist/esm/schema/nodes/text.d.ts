import { NodeSpec } from 'prosemirror-model';
/**
 * @name text_node
 */
export interface TextDefinition {
    type: 'text';
    /**
     * @minLength 1
     */
    text: string;
    marks?: Array<any>;
}
export declare const text: NodeSpec & {
    toDebugString?: () => string;
};
