import { NodeSpec } from 'prosemirror-model';
import { MediaDefinition as Media } from './media';
/**
 * @name mediaGroup_node
 */
export interface MediaGroupDefinition {
    type: 'mediaGroup';
    /**
     * @minItems 1
     */
    content: Array<Media>;
}
export declare const mediaGroup: NodeSpec;
