import { NodeSpec } from 'prosemirror-model';
import { Inline, MarksObject, NoMark } from './doc';
import { AlignmentMarkDefinition, IndentationMarkDefinition } from '../marks';
/**
 * @name paragraph_node
 */
export interface ParagraphBaseDefinition {
    type: 'paragraph';
    /**
     * @allowUnsupportedInline true
     */
    content?: Array<Inline>;
    marks?: Array<any>;
}
/**
 * @name paragraph_with_no_marks_node
 */
export declare type ParagraphDefinition = ParagraphBaseDefinition & NoMark;
/**
 * NOTE: Need this because TS is too smart and inline everything.
 * So we need to give them separate identity.
 * Probably there's a way to solve it but that will need time and exploration.
 * // http://bit.ly/2raXFX5
 * type T1 = X | Y
 * type T2 = A | T1 | B // T2 = A | X | Y | B
 */
/**
 * @name paragraph_with_alignment_node
 */
export declare type ParagraphWithAlignmentDefinition = ParagraphBaseDefinition & MarksObject<AlignmentMarkDefinition>;
/**
 * @name paragraph_with_indentation_node
 */
export declare type ParagraphWithIndentationDefinition = ParagraphBaseDefinition & MarksObject<IndentationMarkDefinition>;
export declare type ParagraphWithMarksDefinition = ParagraphWithAlignmentDefinition | ParagraphWithIndentationDefinition;
export declare const paragraph: NodeSpec;
