import { NodeSpec } from 'prosemirror-model';
/**
 * @name placeholder_node
 */
export interface PlaceholderDefinition {
    type: 'placeholder';
    attrs: {
        text: string;
    };
}
export declare const placeholder: NodeSpec;
