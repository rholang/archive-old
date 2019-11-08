export declare type MediaFile = {
    readonly id: string;
    readonly name: string;
    readonly size: number;
    readonly creationDate: number;
    readonly type: string;
    readonly occurrenceKey?: string;
};
export declare function copyMediaFileForUpload({ name, size, creationDate, type, occurrenceKey }: MediaFile, fileId: string): MediaFile;
