import { MarkSpec } from 'prosemirror-model';
/**
 * @name annotation_mark
 */
export interface AnnotationMarkDefinition {
    type: 'annotation';
    attrs: AnnotationMarkAttributes;
}
export interface AnnotationMarkAttributes {
    id: string;
    annotationType: AnnotationType;
}
export declare const INLINE_COMMENT = "inlineComment";
export declare type AnnotationType = 'inlineComment';
export declare const annotation: MarkSpec;
