import { NodeSpec, Node as PMNode } from 'prosemirror-model';
import { TextDefinition as Text } from './text';
import { NoMark, MarksObject } from './doc';
import { BreakoutMarkDefinition } from '../marks/breakout';
/**
 * @name codeBlock_node
 */
export declare type CodeBlockBaseDefinition = {
    type: 'codeBlock';
    content?: Array<Text & NoMark>;
    marks?: Array<any>;
    attrs?: CodeBlockAttrs;
};
export declare type CodeBlockAttrs = {
    language?: string;
};
/**
 * @name codeBlock_with_no_marks_node
 */
export declare type CodeBlockDefinition = CodeBlockBaseDefinition & NoMark;
/**
 * @name codeBlock_with_marks_node
 */
export declare type CodeBlockWithMarksDefinition = CodeBlockBaseDefinition & MarksObject<BreakoutMarkDefinition>;
export declare const codeBlock: NodeSpec;
export declare const toJSON: (node: PMNode<any>) => {
    attrs: Record<string, any>;
};
