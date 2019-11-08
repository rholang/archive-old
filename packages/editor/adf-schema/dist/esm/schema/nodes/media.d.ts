import { NodeSpec, Node as PMNode } from 'prosemirror-model';
export declare type MediaType = 'file' | 'link' | 'external';
export declare type DisplayType = 'file' | 'thumbnail';
export declare type DefaultAttributes<T> = {
    [P in keyof T]: {
        default?: T[P] | null;
    };
};
/**
 * @name media_node
 */
export interface MediaDefinition {
    type: 'media';
    /**
     * @minItems 1
     */
    attrs: MediaAttributes | ExternalMediaAttributes;
}
export interface MediaBaseAttributes {
    /**
     * @minLength 1
     */
    id: string;
    collection: string;
    height?: number;
    width?: number;
    /**
     * @minLength 1
     */
    occurrenceKey?: string;
    __fileName?: string | null;
    __fileSize?: number | null;
    __fileMimeType?: string | null;
    __displayType?: DisplayType | null;
    __contextId?: string;
}
export interface MediaAttributes extends MediaBaseAttributes {
    type: 'file' | 'link';
}
export interface ExternalMediaAttributes {
    type: 'external';
    url: string;
    width?: number;
    height?: number;
}
export declare const defaultAttrs: DefaultAttributes<MediaAttributes | ExternalMediaAttributes>;
export declare const media: NodeSpec;
export declare const camelCaseToKebabCase: (str: string) => string;
export declare const copyPrivateAttributes: (from: Record<string, any>, to: Record<string, any>, map?: ((str: string) => string) | undefined) => void;
export declare const toJSON: (node: PMNode<any>) => {
    attrs: Record<string, any>;
};
