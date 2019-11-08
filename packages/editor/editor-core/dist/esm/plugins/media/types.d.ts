import { FileIdentifier } from '@atlaskit/media-client';
import { Context, MediaClientConfig } from '@atlaskit/media-core';
import { MediaFile, UploadParams } from '@atlaskit/media-picker';
import { XOR } from '@atlaskit/type-helpers';
export declare type MediaStateStatus = 'unknown' | 'ready' | 'cancelled' | 'preview' | 'error' | 'mobile-upload-end';
export interface MediaState {
    id: string;
    status?: MediaStateStatus;
    fileName?: string;
    fileSize?: number;
    fileMimeType?: string;
    collection?: string;
    dimensions?: {
        width: number | undefined;
        height: number | undefined;
    };
    scaleFactor?: number;
    error?: {
        name: string;
        description: string;
    };
    /** still require to support Mobile */
    publicId?: string;
    contextId?: string;
}
export interface FeatureFlags {
}
declare type MediaProviderBase = {
    uploadParams?: UploadParams;
    /**
     * (optional) Used for creating new uploads and finalizing files.
     * NOTE: We currently don't accept MediaClientConfig, because we need config properties
     *       to initialize
     */
    uploadMediaClientConfig?: MediaClientConfig;
    /**
     * @deprecated Use uploadMediaClientConfig instead.
     */
    uploadContext?: Promise<Context>;
    /**
     * (optional) For any additional feature to be enabled
     */
    featureFlags?: FeatureFlags;
};
export declare type WithViewMediaClientConfig = {
    /**
     * Used for displaying Media Cards and downloading files.
     */
    viewMediaClientConfig: MediaClientConfig;
};
export declare type WithViewContext = {
    /**
     * @deprecated Use viewMediaClientConfig instead.
     */
    viewContext: Promise<Context>;
};
export declare type MediaProvider = MediaProviderBase & XOR<WithViewMediaClientConfig, WithViewContext>;
export declare type Listener = (data: any) => void;
export interface CustomMediaPicker {
    on(event: string, cb: Listener): void;
    removeAllListeners(event: any): void;
    emit(event: string, data: any): void;
    destroy(): void;
    setUploadParams(uploadParams: UploadParams): void;
}
export declare type MobileUploadEndEventPayload = {
    readonly file: MediaFile & {
        readonly collectionName?: string;
        readonly publicId?: string;
    };
};
export declare type MediaEditorState = {
    mediaClientConfig?: MediaClientConfig;
    editor?: {
        pos: number;
        identifier: FileIdentifier;
    };
};
export declare type OpenMediaEditor = {
    type: 'open';
    pos: number;
    identifier: FileIdentifier;
};
export declare type UploadAnnotation = {
    type: 'upload';
    newIdentifier: FileIdentifier;
};
export declare type CloseMediaEditor = {
    type: 'close';
};
export declare type SetMediaMediaClientConfig = {
    type: 'setMediaClientConfig';
    mediaClientConfig?: MediaClientConfig;
};
export declare type MediaEditorAction = OpenMediaEditor | CloseMediaEditor | UploadAnnotation | SetMediaMediaClientConfig;
export {};
