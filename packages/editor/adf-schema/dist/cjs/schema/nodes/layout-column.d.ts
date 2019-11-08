import { NodeSpec } from 'prosemirror-model';
import { BlockContent } from './doc';
/**
 * @name layoutColumn_node
 */
export interface LayoutColumnDefinition {
    type: 'layoutColumn';
    attrs: {
        /**
         * @minimum 0
         * @maximum 100
         */
        width: number;
    };
    /**
     * @minItems 1
     */
    content: Array<BlockContent>;
}
export declare const layoutColumn: NodeSpec;
