import { FileState } from '@atlaskit/media-client';
export interface FilePreview {
    src?: string;
    orientation?: number;
}
export declare const getDataURIFromFileState: (state: FileState) => Promise<FilePreview>;
