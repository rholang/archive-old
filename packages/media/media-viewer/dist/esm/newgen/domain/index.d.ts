import { Identifier } from '@atlaskit/media-client';
export { Outcome } from './outcome';
export declare type ItemSource = {
    kind: 'COLLECTION';
    collectionName: string;
    pageSize: number;
} | {
    kind: 'ARRAY';
    items: Identifier[];
};
export declare type MediaViewerFeatureFlags = {};
