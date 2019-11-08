import { NodeSpec } from 'prosemirror-model';
import { ParagraphDefinition as Paragraph } from './paragraph';
/**
 * @name blockquote_node
 */
export interface BlockQuoteDefinition {
    type: 'blockquote';
    /**
     * @minItems 1
     */
    content: Array<Paragraph>;
}
export declare const blockquote: NodeSpec;
