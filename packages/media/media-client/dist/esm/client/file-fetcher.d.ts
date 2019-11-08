import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '@atlaskit/media-core';
import { MediaStore, UploadableFile, UploadController, MediaCollectionItemFullDetails, ResponseFileItem, MediaFileArtifacts, TouchFileDescriptor, TouchedFiles, UploadableFileUpfrontIds, FileState, GetFileOptions, MediaFile, MediaStoreCopyFileWithTokenParams } from '..';
import { Dimensions } from '../utils/getDimensionsFromBlob';
export declare type DataloaderMap = {
    [id: string]: DataloaderResult;
};
export declare const getItemsFromKeys: (dataloaderKeys: DataloaderKey[], fileItems: ResponseFileItem[]) => DataloaderResult[];
interface DataloaderKey {
    id: string;
    collection?: string;
}
export interface SourceFile {
    id: string;
    collection?: string;
    authProvider: AuthProvider;
}
export interface CopyDestination extends MediaStoreCopyFileWithTokenParams {
    authProvider: AuthProvider;
}
declare type DataloaderResult = MediaCollectionItemFullDetails | undefined;
export declare type ExternalUploadPayload = {
    uploadableFileUpfrontIds: UploadableFileUpfrontIds;
    dimensions: Dimensions;
};
export interface FileFetcher {
    getFileState(id: string, options?: GetFileOptions): Observable<FileState>;
    getArtifactURL(artifacts: MediaFileArtifacts, artifactName: keyof MediaFileArtifacts, collectionName?: string): Promise<string>;
    touchFiles(descriptors: TouchFileDescriptor[], collection?: string): Promise<TouchedFiles>;
    upload(file: UploadableFile, controller?: UploadController, uploadableFileUpfrontIds?: UploadableFileUpfrontIds): Observable<FileState>;
    uploadExternal(url: string, collection?: string): Promise<ExternalUploadPayload>;
    downloadBinary(id: string, name?: string, collectionName?: string): Promise<void>;
    getCurrentState(id: string, options?: GetFileOptions): Promise<FileState>;
    copyFile(source: SourceFile, destination: CopyDestination): Promise<MediaFile>;
    getFileBinaryURL(id: string, collectionName?: string): Promise<string>;
}
export declare class FileFetcherImpl implements FileFetcher {
    private readonly mediaStore;
    private readonly dataloader;
    constructor(mediaStore: MediaStore);
    private batchLoadingFunc;
    getFileState(id: string, options?: GetFileOptions): Observable<FileState>;
    getCurrentState(id: string, options?: GetFileOptions): Promise<FileState>;
    getArtifactURL(artifacts: MediaFileArtifacts, artifactName: keyof MediaFileArtifacts, collectionName?: string): Promise<string>;
    getFileBinaryURL(id: string, collectionName?: string): Promise<string>;
    private createDownloadFileStream;
    touchFiles(descriptors: TouchFileDescriptor[], collection?: string): Promise<TouchedFiles>;
    private generateUploadableFileUpfrontIds;
    uploadExternal(url: string, collection?: string): Promise<ExternalUploadPayload>;
    upload(file: UploadableFile, controller?: UploadController, uploadableFileUpfrontIds?: UploadableFileUpfrontIds): Observable<FileState>;
    downloadBinary(id: string, name?: string, collectionName?: string): Promise<void>;
    copyFile(source: SourceFile, destination: CopyDestination): Promise<MediaFile>;
}
export {};
