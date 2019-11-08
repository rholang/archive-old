import { NodeSpec } from 'prosemirror-model';
import { Inline, MarksObject, NoMark } from './doc';
import { AlignmentMarkDefinition, IndentationMarkDefinition } from '../marks';
/**
 * @name heading_node
 */
export interface HeadingBaseDefinition {
    type: 'heading';
    /**
     * @allowUnsupportedInline true
     */
    content?: Array<Inline>;
    marks?: Array<any>;
    attrs: {
        /**
         * @minimum 1
         * @maximum 6
         */
        level: number;
    };
}
/**
 * @name heading_with_no_marks_node
 */
export declare type HeadingDefinition = HeadingBaseDefinition & NoMark;
/**
 * @name heading_with_alignment_node
 */
export declare type HeadingWithAlignmentDefinition = HeadingBaseDefinition & MarksObject<AlignmentMarkDefinition>;
/**
 * @name heading_with_indentation_node
 */
export declare type HeadingWithIndentationDefinition = HeadingBaseDefinition & MarksObject<IndentationMarkDefinition>;
export declare type HeadingWithMarksDefinition = HeadingWithAlignmentDefinition | HeadingWithIndentationDefinition;
export declare const heading: NodeSpec;
