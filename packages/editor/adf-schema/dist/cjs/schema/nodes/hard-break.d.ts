import { NodeSpec } from 'prosemirror-model';
/**
 * @name hardBreak_node
 */
export interface HardBreakDefinition {
    type: 'hardBreak';
    attrs?: {
        text?: '\n';
    };
}
export declare const hardBreak: NodeSpec;
