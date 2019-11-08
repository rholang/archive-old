import { FileState } from '../models/file-state';
export declare type EventPayloadMap<P> = {
    readonly [event: string]: P;
};
export declare type EventPayloadListener<M extends EventPayloadMap<P>, E extends keyof M, P = any> = (payload: M[E]) => void;
export interface MediaViewedEventPayload {
    fileId: string;
    viewingLevel: 'minimal' | 'full' | 'download';
    isUserCollection?: boolean;
}
export declare type UploadEventPayloadMap = {
    'file-added': FileState;
    'media-viewed': MediaViewedEventPayload;
};
