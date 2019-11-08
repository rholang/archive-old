import { NodeSpec } from 'prosemirror-model';
import { ListItemDefinition as ListItemNode } from './list-item';
/**
 * @name bulletList_node
 */
export interface BulletListDefinition {
    type: 'bulletList';
    /**
     * @minItems 1
     */
    content: Array<ListItemNode>;
}
export declare const bulletListSelector = ".ak-ul";
export declare const bulletList: NodeSpec;
