export declare const isMediaBlobUrl: (url: string) => boolean;
export interface MediaBlobUrlAttrs {
    id: string;
    contextId: string;
    collection?: string;
    size?: number;
    name?: string;
    mimeType?: string;
    width?: number;
    height?: number;
    alt?: string;
}
export declare const getAttrsFromUrl: (blobUrl: string) => MediaBlobUrlAttrs | undefined;
export declare const objectToQueryString: (json: {
    [key: string]: string | number | boolean | undefined;
}) => string;
export declare const addFileAttrsToUrl: (url: string, fileAttrs: MediaBlobUrlAttrs) => string;
