import { Mark, Node as PMNode } from 'prosemirror-model';
export declare type NodeSerializer = (opts: NodeSerializerOpts) => string;
export declare type MarkSerializer = (opts: MarkSerializerOpts) => string;
export declare type Style = {
    [key: string]: string | number | undefined;
};
export declare type Attrs = {
    [key: string]: string;
};
export interface NodeSerializerOpts {
    node: PMNode;
    attrs: {
        [key: string]: any;
    };
    marks: Mark[];
    text?: string | null;
    parent?: PMNode;
    context?: MetaDataContext;
}
export interface MarkSerializerOpts {
    mark: Mark;
    text: string;
}
export interface SmartCardWithUrlAttributes {
    url: string;
}
interface ScData {
    '@type': string;
    generator: {
        '@type': string;
        name: string;
    };
    name: string;
    url: string;
    summary: string;
}
export interface SmartCardWithDataAttributes {
    data: ScData;
}
export interface EmailSerializerOpts {
    isImageStubEnabled: boolean;
    isInlineCSSEnabled: boolean;
}
export declare type MediaType = 'image' | 'doc' | 'video' | 'audio' | 'archive' | 'unknown';
export interface MediaMetaDataContextItem {
    name: string;
    mediaType: MediaType;
    mimeType: string;
    size: number;
}
export interface MetaDataContext {
    mediaMetaData?: {
        [key: string]: MediaMetaDataContextItem;
    };
    inlineCardConversion?: {
        [key: string]: string;
    };
}
export {};
