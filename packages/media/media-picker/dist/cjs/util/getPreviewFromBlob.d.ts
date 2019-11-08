import { MediaType } from '@atlaskit/media-client';
import { Preview } from '../domain/preview';
export declare const getPreviewFromBlob: (file: Blob, mediaType: MediaType) => Promise<Preview>;
