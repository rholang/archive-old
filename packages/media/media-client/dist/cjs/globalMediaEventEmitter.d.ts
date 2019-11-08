import { UploadEventPayloadMap, EventPayloadListener } from './client/events';
export declare const globalMediaEventEmitter: {
    on<E extends "file-added" | "media-viewed">(event: E, listener: EventPayloadListener<UploadEventPayloadMap, E, any>): void;
    off<E_1 extends "file-added" | "media-viewed">(event: E_1, listener: EventPayloadListener<UploadEventPayloadMap, E_1, any>): void;
    emit<E_2 extends "file-added" | "media-viewed">(event: E_2, payload: UploadEventPayloadMap[E_2]): boolean | undefined;
};
