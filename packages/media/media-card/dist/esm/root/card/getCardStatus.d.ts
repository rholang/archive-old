import { FileState } from '@atlaskit/media-client';
import { CardState, CardProps, CardStatus } from '../../';
export declare const getCardStatus: (state: CardState, props: CardProps) => CardStatus;
export declare const getCardStatusFromFileState: (fileState: FileState, dataURI?: string | undefined) => CardStatus;
export declare const getCardProgressFromFileState: (fileState: FileState, dataURI?: string | undefined) => number | undefined;
export declare type AnalyticsLoadingAction = 'succeeded' | 'failed';
export declare const getAnalyticsStatusFromCardStatus: (cardStatus: CardStatus) => void | "succeeded" | "failed";
export declare type AnalyticsErrorStateAttributes = {
    failReason?: 'media-client-error' | 'file-status-error';
    error?: string;
};
export declare const getAnalyticsErrorStateAttributes: (fileState?: import("@atlaskit/media-client").UploadingFileState | import("@atlaskit/media-client").ProcessingFileState | import("@atlaskit/media-client").ProcessedFileState | import("@atlaskit/media-client").ErrorFileState | import("@atlaskit/media-client").ProcessingFailedState | undefined, error?: Error | undefined) => AnalyticsErrorStateAttributes;
