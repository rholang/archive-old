import { NodeSpec } from 'prosemirror-model';
/**
 * @name emoji_node
 */
export interface EmojiDefinition {
    type: 'emoji';
    attrs: EmojiAttributes;
}
export interface EmojiAttributes {
    id?: string;
    shortName: string;
    text?: string;
}
export declare const emoji: NodeSpec;
