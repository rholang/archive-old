import { MediaClient, FileState, Identifier } from '@atlaskit/media-client';
import { MediaViewerError } from './error';
export declare const DownloadButton: any;
export declare const createItemDownloader: (file: FileState, mediaClient: MediaClient, collectionName?: string | undefined) => () => Promise<void>;
export declare type ErrorViewDownloadButtonProps = {
    state: FileState;
    mediaClient: MediaClient;
    err: MediaViewerError;
    collectionName?: string;
};
export declare const ErrorViewDownloadButton: (props: ErrorViewDownloadButtonProps) => JSX.Element;
export declare type ToolbarDownloadButtonProps = {
    state: FileState;
    identifier: Identifier;
    mediaClient: MediaClient;
};
export declare const ToolbarDownloadButton: (props: ToolbarDownloadButtonProps) => JSX.Element | null;
export declare const DisabledToolbarDownloadButton: JSX.Element;
