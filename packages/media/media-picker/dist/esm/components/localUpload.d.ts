import { MediaClient } from '@atlaskit/media-client';
import { UploadService } from '../service/types';
import { UploadEventPayloadMap } from '../domain/uploadEvent';
import { UploadComponent } from './component';
import { UploadParams } from '../domain/config';
import { LocalUploadConfig } from './types';
export declare class LocalUploadComponent<M extends UploadEventPayloadMap = UploadEventPayloadMap> extends UploadComponent<M> implements LocalUploadComponent {
    protected readonly uploadService: UploadService;
    protected readonly mediaClient: MediaClient;
    protected config: LocalUploadConfig;
    constructor(mediaClient: MediaClient, config: LocalUploadConfig);
    addFiles: (files: File[]) => void;
    cancel(uniqueIdentifier?: string): void;
    setUploadParams(uploadParams: UploadParams): void;
    private onFilesAdded;
    private onFilePreviewUpdate;
    private onFileUploading;
    private onFileConverting;
    private onFileConverted;
    private onUploadError;
}
