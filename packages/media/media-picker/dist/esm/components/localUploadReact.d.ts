import { Component } from 'react';
import { MediaClient } from '@atlaskit/media-client';
import { UploadService } from '../service/types';
import { UploadEndEventPayload, UploadErrorEventPayload, UploadPreviewUpdateEventPayload, UploadProcessingEventPayload, UploadsStartEventPayload, UploadStatusUpdateEventPayload, UploadEventPayloadMap } from '../domain/uploadEvent';
import { UploadComponent } from './component';
import { UploadParams } from '../domain/config';
import { LocalUploadConfig } from './types';
export declare type LocalUploadComponentBaseProps = {
    mediaClient: MediaClient;
    config: LocalUploadConfig;
    onUploadsStart?: (payload: UploadsStartEventPayload) => void;
    onPreviewUpdate?: (payload: UploadPreviewUpdateEventPayload) => void;
    onStatusUpdate?: (payload: UploadStatusUpdateEventPayload) => void;
    onProcessing?: (payload: UploadProcessingEventPayload) => void;
    onEnd?: (payload: UploadEndEventPayload) => void;
    onError?: (payload: UploadErrorEventPayload) => void;
};
export declare class LocalUploadComponentReact<Props extends LocalUploadComponentBaseProps, M extends UploadEventPayloadMap = UploadEventPayloadMap> extends Component<Props, {}> {
    protected readonly uploadService: UploadService;
    protected uploadComponent: UploadComponent<UploadEventPayloadMap>;
    constructor(props: Props);
    cancel: (uniqueIdentifier?: string | undefined) => void;
    setUploadParams(uploadParams: UploadParams): void;
    private onFilesAdded;
    private onFilePreviewUpdate;
    private onFileUploading;
    private onFileConverting;
    private onFileConverted;
    private onUploadError;
}
