import { NodeSpec } from 'prosemirror-model';
import { LayoutColumnDefinition } from './layout-column';
import { BreakoutMarkDefinition } from '../marks';
/**
 * @name layoutSection_node
 */
export declare type LayoutSectionDefinition = {
    type: 'layoutSection';
    /**
     * @minItems 2
     * @maxItems 3
     */
    content: Array<LayoutColumnDefinition>;
    marks?: Array<BreakoutMarkDefinition>;
};
export declare const layoutSection: NodeSpec;
