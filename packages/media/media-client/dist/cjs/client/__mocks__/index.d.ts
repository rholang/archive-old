/// <reference types="jest" />
import { MediaClientConfig } from '@atlaskit/media-core';
import { CollectionFetcher } from '../collection-fetcher';
import { FileFetcher } from '../file-fetcher';
export declare class MediaClient {
    readonly config: MediaClientConfig;
    readonly collection: CollectionFetcher;
    readonly file: FileFetcher;
    constructor(config: MediaClientConfig);
    getImage: jest.Mock<unknown>;
    getImageUrl: jest.Mock<unknown>;
    getImageMetadata: jest.Mock<unknown>;
}
