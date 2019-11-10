import { Database } from 'kakapo';
import { ClientBasedAuth } from '@atlaskit/media-core';
import { MediaCollection } from '@atlaskit/media-store';
import { CollectionItem } from './collection-item';
import { Upload } from './upload';
import { Chunk } from './chunk';
import { MockCollections } from '../media-mock';
export * from './collection';
export * from './collection-item';
export declare const tenantAuth: ClientBasedAuth;
export declare const userAuth: ClientBasedAuth;
export declare const userAuthProvider: () => Promise<ClientBasedAuth>;
export declare const tenantAuthProvider: () => Promise<ClientBasedAuth>;
export declare type DatabaseSchema = {
    collection: MediaCollection;
    collectionItem: CollectionItem;
    upload: Upload;
    chunk: Chunk;
};
export declare function createDatabase(collections?: MockCollections): Database<DatabaseSchema>;