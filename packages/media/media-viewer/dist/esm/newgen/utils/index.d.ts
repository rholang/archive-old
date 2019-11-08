import { FileIdentifier, Identifier } from '@atlaskit/media-client';
import { MediaCollectionItem } from '@atlaskit/media-store';
export declare const toIdentifier: (item: MediaCollectionItem, collectionName: string) => FileIdentifier;
export declare const getSelectedIndex: (items: Identifier[], selectedItem: Identifier) => number;
