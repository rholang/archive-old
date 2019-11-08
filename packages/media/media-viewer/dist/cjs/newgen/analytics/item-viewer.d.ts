import { GasPayload } from '@atlaskit/analytics-gas-types';
import { ProcessedFileState } from '@atlaskit/media-client';
export declare type ViewerLoadPayload = {
    status: 'success' | 'error';
    errorMessage?: string;
};
export declare type AnalyticViewerProps = {
    onLoad: (payload: ViewerLoadPayload) => void;
};
export declare const mediaFileCommencedEvent: (id: string) => GasPayload;
export declare const mediaFileLoadSucceededEvent: (file: ProcessedFileState) => GasPayload;
export declare const mediaFileLoadFailedEvent: (id: string, failReason: string, file?: ProcessedFileState | undefined) => GasPayload;
export declare const mediaPreviewFailedEvent: (failReason: string, fileState?: import("@atlaskit/media-client").UploadingFileState | import("@atlaskit/media-client").ProcessingFileState | ProcessedFileState | import("@atlaskit/media-client").ErrorFileState | import("@atlaskit/media-client").ProcessingFailedState | undefined) => GasPayload;
