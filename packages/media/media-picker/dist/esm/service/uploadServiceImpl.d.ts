import { MediaClient } from '@atlaskit/media-client';
import { MediaFile } from '../domain/file';
import { UploadParams } from '..';
import { UploadService, UploadServiceEventListener, UploadServiceEventPayloadTypes } from './types';
import { LocalFileSource, LocalFileWithSource } from '../service/types';
export interface CancellableFileUpload {
    mediaFile: MediaFile;
    file: File;
    source: LocalFileSource;
    cancel?: () => void;
}
export declare class UploadServiceImpl implements UploadService {
    private readonly tenantMediaClient;
    private tenantUploadParams;
    private readonly shouldCopyFileToRecents;
    private readonly userMediaStore?;
    private readonly userMediaClient?;
    private readonly emitter;
    private cancellableFilesUploads;
    constructor(tenantMediaClient: MediaClient, tenantUploadParams: UploadParams, shouldCopyFileToRecents: boolean);
    setUploadParams(uploadParams: UploadParams): void;
    private createUploadController;
    addFiles(files: File[]): void;
    addFilesWithSource(files: LocalFileWithSource[]): void;
    cancel(id?: string): void;
    on<E extends keyof UploadServiceEventPayloadTypes>(event: E, listener: UploadServiceEventListener<E>): void;
    off<E extends keyof UploadServiceEventPayloadTypes>(event: E, listener: UploadServiceEventListener<E>): void;
    private readonly emit;
    private emitPreviews;
    private getMediaTypeFromFile;
    private releaseCancellableFile;
    private readonly onFileSuccess;
    private readonly onFileProgress;
    private readonly onFileError;
    private copyFileToUsersCollection;
}
