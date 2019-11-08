import { MediaPluginState, MediaNodeWithPosHandler } from '../pm-plugins/main';
export declare const findMediaSingleNode: (mediaPluginState: MediaPluginState, id: string) => MediaNodeWithPosHandler | null;
export declare const findAllMediaSingleNodes: (mediaPluginState: MediaPluginState, id: string) => MediaNodeWithPosHandler[];
export declare const findMediaNode: (mediaPluginState: MediaPluginState, id: string, isMediaSingle: boolean) => MediaNodeWithPosHandler | null;
export declare const isMobileUploadCompleted: (mediaPluginState: MediaPluginState, mediaId: string) => boolean | undefined;
