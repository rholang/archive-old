import { MarkSpec } from 'prosemirror-model';
export interface IndentationMarkAttributes {
    /**
     * @minimum 1
     * @maximum 6
     */
    level: number;
}
/**
 * @name indentation_mark
 */
export interface IndentationMarkDefinition {
    type: 'indentation';
    attrs: IndentationMarkAttributes;
}
export declare const indentation: MarkSpec;
