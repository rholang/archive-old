import { NodeSpec } from 'prosemirror-model';
export interface UrlType {
    url: string;
}
export interface DataType {
    /**
     * @additionalProperties true
     */
    data: object;
}
export declare type CardAttributes = UrlType | DataType;
/**
 * @name blockCard_node
 */
export interface BlockCardDefinition {
    type: 'blockCard';
    attrs: CardAttributes;
}
export declare const blockCard: NodeSpec;
