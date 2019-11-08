import { NodeSpec } from 'prosemirror-model';
import { CardAttributes } from './block-card';
export interface UrlType {
    url: string;
}
export interface DataType {
    /**
     * @additionalProperties true
     */
    data: object;
}
/**
 * @name inlineCard_node
 */
export interface InlineCardDefinition {
    type: 'inlineCard';
    attrs: CardAttributes;
}
export declare const inlineCard: NodeSpec;
