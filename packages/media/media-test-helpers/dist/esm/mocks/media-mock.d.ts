import { MediaFile } from '@atlaskit/media-store';
export declare type MockCollections = {
    [key: string]: Array<MediaFile & {
        blob: Blob;
    }>;
};
export declare class MediaMock {
    readonly collections?: MockCollections | undefined;
    private server;
    constructor(collections?: MockCollections | undefined);
    enable(): void;
    disable(): void;
}
export declare function generateFilesFromTestData(files: (Partial<MediaFile> & {
    dataUri: string;
})[]): Array<MediaFile & {
    blob: Blob;
}>;
export declare const mediaMock: MediaMock;
