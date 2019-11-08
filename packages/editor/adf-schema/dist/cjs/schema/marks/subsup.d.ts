import { MarkSpec, Mark } from 'prosemirror-model';
export interface SubSupAttributes {
    type: 'sub' | 'sup';
}
/**
 * @name subsup_mark
 */
export interface SubSupDefinition {
    type: 'subsup';
    attrs: SubSupAttributes;
}
export interface SubSupMark extends Mark {
    attrs: SubSupAttributes;
}
export declare const subsup: MarkSpec;
