import { MediaClientConfig } from '@atlaskit/media-core';
import { MediaStore, MediaStoreGetFileImageParams, ImageMetadata } from './media-store';
import { CollectionFetcher } from './collection-fetcher';
import { FileFetcher } from './file-fetcher';
import { UploadEventPayloadMap, EventPayloadListener } from './events';
export declare class MediaClient {
    readonly mediaClientConfig: MediaClientConfig;
    readonly mediaStore: MediaStore;
    readonly collection: CollectionFetcher;
    readonly file: FileFetcher;
    private readonly eventEmitter;
    readonly config: MediaClientConfig;
    constructor(mediaClientConfig: MediaClientConfig);
    getImage(id: string, params?: MediaStoreGetFileImageParams, controller?: AbortController, fetchMaxRes?: boolean): Promise<Blob>;
    getImageUrl(id: string, params?: MediaStoreGetFileImageParams): Promise<string>;
    getImageMetadata(id: string, params?: MediaStoreGetFileImageParams): Promise<ImageMetadata>;
    on<E extends keyof UploadEventPayloadMap>(event: E, listener: EventPayloadListener<UploadEventPayloadMap, E>): void;
    off<E extends keyof UploadEventPayloadMap>(event: E, listener: EventPayloadListener<UploadEventPayloadMap, E>): void;
    emit<E extends keyof UploadEventPayloadMap>(event: E, payload: UploadEventPayloadMap[E]): boolean;
}
