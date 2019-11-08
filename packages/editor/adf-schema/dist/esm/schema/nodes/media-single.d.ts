import { NodeSpec, Node } from 'prosemirror-model';
import { MediaDefinition as Media } from './media';
import { LinkDefinition } from '../marks/link';
export declare type Layout = 'wrap-right' | 'center' | 'wrap-left' | 'wide' | 'full-width' | 'align-end' | 'align-start';
/**
 * @name mediaSingle_node
 */
export interface MediaSingleDefinition {
    type: 'mediaSingle';
    /**
     * @minItems 1
     * @maxItems 1
     */
    content: Array<Media>;
    attrs?: MediaSingleAttributes;
    marks?: Array<LinkDefinition>;
}
export interface MediaSingleAttributes {
    /**
     * @minimum 0
     * @maximum 100
     */
    width?: number;
    layout: Layout;
}
export declare const defaultAttrs: {
    width: {
        default: null;
    };
    layout: {
        default: string;
    };
};
export declare const mediaSingle: NodeSpec;
export declare const toJSON: (node: Node<any>) => {
    attrs: any;
};
