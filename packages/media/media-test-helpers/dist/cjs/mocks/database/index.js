"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var kakapo_1 = require("kakapo");
var v4_1 = tslib_1.__importDefault(require("uuid/v4"));
var collection_1 = require("./collection");
var collection_item_1 = require("./collection-item");
var upload_1 = require("./upload");
var mediaClientProvider_1 = require("../../mediaClientProvider");
var collectionNames_1 = require("../../collectionNames");
var constants_1 = require("@atlaskit/media-client/constants");
tslib_1.__exportStar(require("./collection"), exports);
tslib_1.__exportStar(require("./collection-item"), exports);
exports.tenantAuth = {
    clientId: v4_1.default(),
    token: 'some-tenant-token',
    baseUrl: mediaClientProvider_1.defaultBaseUrl,
};
exports.userAuth = {
    clientId: v4_1.default(),
    token: 'some-user-token',
    baseUrl: mediaClientProvider_1.defaultBaseUrl,
};
exports.userAuthProvider = function () { return Promise.resolve(exports.userAuth); };
exports.tenantAuthProvider = function () { return Promise.resolve(exports.tenantAuth); };
function createDatabase(collections) {
    if (collections === void 0) { collections = {}; }
    var database = new kakapo_1.Database();
    database.register('collectionItem', collection_item_1.createCollectionItem);
    database.register('collection', collection_1.createCollection);
    database.register('upload', upload_1.createUpload);
    database.register('chunk');
    if (Object.keys(collections).length > 0) {
        Object.keys(collections).forEach(function (collectionName) {
            database.push('collection', {
                name: collectionName,
                createdAt: Date.now(),
            });
            collections[collectionName].forEach(function (_a) {
                var id = _a.id, name = _a.name, blob = _a.blob, mimeType = _a.mimeType;
                return database.push('collectionItem', collection_item_1.createCollectionItem({
                    id: id,
                    collectionName: collectionName,
                    blob: blob,
                    occurrenceKey: v4_1.default(),
                    mimeType: mimeType,
                    name: name,
                }));
            });
        });
    }
    else {
        database.push('collection', {
            name: constants_1.RECENTS_COLLECTION,
            createdAt: Date.now(),
        });
        database.push('collection', {
            name: collectionNames_1.defaultCollectionName,
            createdAt: Date.now(),
        });
    }
    return database;
}
exports.createDatabase = createDatabase;
//# sourceMappingURL=index.js.map