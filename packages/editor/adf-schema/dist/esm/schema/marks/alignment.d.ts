import { MarkSpec } from 'prosemirror-model';
/** TODO: Flip these positions for RTL */
export declare const alignmentPositionMap: {
    [key: string]: string;
};
export interface AlignmentAttributes {
    align: 'center' | 'end';
}
/**
 * @name alignment_mark
 */
export interface AlignmentMarkDefinition {
    type: 'alignment';
    attrs: AlignmentAttributes;
}
export declare const alignment: MarkSpec;
