import { Database } from 'kakapo';
import uuidV4 from 'uuid/v4';
import { createCollection } from './collection';
import { createCollectionItem } from './collection-item';
import { createUpload } from './upload';
import { defaultBaseUrl } from '../../mediaClientProvider';
import { defaultCollectionName } from '../../collectionNames';
import { RECENTS_COLLECTION } from '@atlaskit/media-client/constants';
export * from './collection';
export * from './collection-item';
export var tenantAuth = {
    clientId: uuidV4(),
    token: 'some-tenant-token',
    baseUrl: defaultBaseUrl,
};
export var userAuth = {
    clientId: uuidV4(),
    token: 'some-user-token',
    baseUrl: defaultBaseUrl,
};
export var userAuthProvider = function () { return Promise.resolve(userAuth); };
export var tenantAuthProvider = function () { return Promise.resolve(tenantAuth); };
export function createDatabase(collections) {
    if (collections === void 0) { collections = {}; }
    var database = new Database();
    database.register('collectionItem', createCollectionItem);
    database.register('collection', createCollection);
    database.register('upload', createUpload);
    database.register('chunk');
    if (Object.keys(collections).length > 0) {
        Object.keys(collections).forEach(function (collectionName) {
            database.push('collection', {
                name: collectionName,
                createdAt: Date.now(),
            });
            collections[collectionName].forEach(function (_a) {
                var id = _a.id, name = _a.name, blob = _a.blob, mimeType = _a.mimeType;
                return database.push('collectionItem', createCollectionItem({
                    id: id,
                    collectionName: collectionName,
                    blob: blob,
                    occurrenceKey: uuidV4(),
                    mimeType: mimeType,
                    name: name,
                }));
            });
        });
    }
    else {
        database.push('collection', {
            name: RECENTS_COLLECTION,
            createdAt: Date.now(),
        });
        database.push('collection', {
            name: defaultCollectionName,
            createdAt: Date.now(),
        });
    }
    return database;
}
//# sourceMappingURL=index.js.map