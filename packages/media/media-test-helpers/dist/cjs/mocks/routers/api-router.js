"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// eslint-disable-line no-console
var kakapo_1 = require("kakapo");
var v4_1 = tslib_1.__importDefault(require("uuid/v4"));
var database_1 = require("../database");
var __1 = require("../..");
var upload_1 = require("../database/upload");
var mockData_1 = require("../database/mockData");
var utils_1 = require("../../utils");
var RouterWithLogging = /** @class */ (function (_super) {
    tslib_1.__extends(RouterWithLogging, _super);
    function RouterWithLogging(options) {
        return _super.call(this, options) || this;
    }
    RouterWithLogging.prototype.register = function (method, path, originalHandler) {
        var handler = function (request, database) {
            var response;
            var requestWithBodyObject;
            var error;
            try {
                response = originalHandler(request, database);
                var body = request.body;
                try {
                    body = JSON.parse(body);
                }
                catch (e) { }
                requestWithBodyObject = { request: tslib_1.__assign(tslib_1.__assign({}, request), { body: body }) };
            }
            catch (e) {
                error = e;
            }
            // eslint-disable-next-line no-console
            console.log({
                method: method,
                path: path,
                request: requestWithBodyObject,
                database: database,
                response: response,
                error: error,
            });
            if (error) {
                throw error;
            }
            else {
                return response;
            }
        };
        return _super.prototype.register.call(this, method, path, handler);
    };
    return RouterWithLogging;
}(kakapo_1.Router));
function createApiRouter() {
    var router = new RouterWithLogging({
        host: __1.defaultBaseUrl,
        requestDelay: 10,
    });
    router.post('/collection', function (_a, database) {
        var body = _a.body;
        var name = JSON.parse(body).name;
        var collection = database_1.createCollection(name);
        database.push('collection', collection);
        return { data: collection };
    });
    router.post('/file/binary', function (_a, database) {
        var headers = _a.headers, body = _a.body, query = _a.query;
        var mimeType = headers["Content-Type"];
        var collection = query.collection, name = query.name, occurrenceKey = query.occurrenceKey;
        var item = database_1.createCollectionItem({
            collectionName: collection,
            name: name,
            mimeType: mimeType,
            occurrenceKey: occurrenceKey,
            blob: body,
        });
        database.push('collectionItem', item);
        return {
            data: tslib_1.__assign({ id: item.id }, item.details),
        };
    });
    router.get('/collection/:collectionName/items', function (_a, database) {
        var params = _a.params;
        var collectionName = params.collectionName;
        var contents = database
            .find('collectionItem', {
            collectionName: collectionName,
        })
            .map(function (record) { return record.data; });
        return {
            data: {
                nextInclusiveStartKey: Math.floor(Math.random() * 99999),
                contents: contents,
            },
        };
    });
    router.get('/file/:fileId/image', function (_a, database) {
        var params = _a.params, query = _a.query;
        var fileId = params.fileId;
        var width = query.width, height = query.height, _b = query["max-age"], maxAge = _b === void 0 ? 3600 : _b;
        var record = database.findOne('collectionItem', { id: fileId });
        var blob;
        if (!record || record.data.blob.type === 'image/svg+xml') {
            var dataUri = mockData_1.mockDataUri(width, height);
            blob = utils_1.mapDataUriToBlob(dataUri);
        }
        else {
            blob = record.data.blob;
        }
        return new kakapo_1.Response(200, blob, {
            'content-type': blob.type,
            'content-length': blob.size.toString(),
            'cache-control': "private, max-age=" + maxAge,
        });
    });
    router.get('/file/:fileId/image/metadata', function () {
        return {
            metadata: {
                pending: false,
                preview: {},
                original: {
                    height: 4096,
                    width: 4096,
                },
            },
        };
    });
    router.get('/picker/accounts', function () {
        return {
            data: [],
        };
    });
    router.head('/chunk/:chunkId', function (_a, database) {
        var params = _a.params;
        var chunkId = params.chunkId;
        if (database.findOne('chunk', { id: chunkId })) {
            return new kakapo_1.Response(200, undefined, {});
        }
        else {
            return new kakapo_1.Response(404, undefined, {});
        }
    });
    router.put('/chunk/:chunkId', function (_a, database) {
        var params = _a.params, body = _a.body;
        var chunkId = params.chunkId;
        database.push('chunk', {
            id: chunkId,
            blob: body,
        });
        return new kakapo_1.Response(201, undefined, {});
    });
    router.post('/chunk/probe', function (_a, database) {
        var body = _a.body;
        var requestedChunks = body.chunks;
        var allChunks = database.all('chunk');
        var existingChunks = [];
        var nonExistingChunks = [];
        allChunks.forEach(function (_a) {
            var id = _a.data.id;
            if (requestedChunks.indexOf(id) > -1) {
                existingChunks.push(id);
            }
            else {
                nonExistingChunks.push(id);
            }
        });
        return new kakapo_1.Response(200, {
            data: {
                results: tslib_1.__spread(existingChunks.map(function () { return ({ exists: true }); }), nonExistingChunks.map(function () { return ({ exists: false }); })),
            },
        }, {});
    });
    router.post('/upload', function (_a, database) {
        var query = _a.query;
        var _b = query.createUpTo, createUpTo = _b === void 0 ? '1' : _b;
        var records = database.create('upload', Number.parseInt(createUpTo, 10));
        var data = records.map(function (record) { return record.data; });
        return {
            data: data,
        };
    });
    router.put('/upload/:uploadId/chunks', function (_a, database) {
        var params = _a.params, body = _a.body;
        var uploadId = params.uploadId;
        var chunks = JSON.parse(body).chunks /*, offset*/;
        var record = database.findOne('upload', { id: uploadId });
        database.update('upload', record.id, {
            chunks: tslib_1.__spread(record.data.chunks, chunks),
        });
        return new kakapo_1.Response(200, undefined, {});
    });
    router.post('/file', function (_a, database) {
        var query = _a.query;
        var collection = query.collection;
        var item = database_1.createCollectionItem({
            collectionName: collection,
        });
        database.push('collectionItem', item);
        return new kakapo_1.Response(201, {
            data: {
                id: item.id,
                insertedAt: Date.now(),
            },
        }, {});
    });
    router.post('/file/upload', function (_a, database) {
        var query = _a.query, body = _a.body;
        var collection = query.collection;
        var _b = JSON.parse(body), name = _b.name, mimeType = _b.mimeType /*, uploadId*/;
        var record = database.push('collectionItem', database_1.createCollectionItem({
            name: name,
            mimeType: mimeType,
            collectionName: collection,
        }));
        return {
            data: tslib_1.__assign(tslib_1.__assign({}, record.data.details), { id: record.data.id }),
        };
    });
    router.get('/file/:fileId', function (_a, database) {
        var params = _a.params, query = _a.query;
        var fileId = params.fileId;
        var collection = query.collection;
        var record = database.findOne('collectionItem', {
            id: fileId,
            collectionName: collection,
        });
        if (record) {
            return {
                data: tslib_1.__assign({ id: fileId }, record.data.details),
            };
        }
        else {
            return new kakapo_1.Response(404, undefined, {});
        }
    });
    router.post('/items', function (_a, database) {
        var body = _a.body;
        var descriptors = JSON.parse(body).descriptors;
        var records = descriptors.map(function (descriptor) {
            var record = database.findOne('collectionItem', {
                id: descriptor.id,
            });
            if (record) {
                return {
                    type: 'file',
                    id: descriptor.id,
                    collection: descriptor.collection,
                    details: record.data.details,
                };
            }
            return null;
        });
        if (records.length) {
            return {
                data: {
                    items: records,
                },
            };
        }
        else {
            return new kakapo_1.Response(404, undefined, {});
        }
    });
    router.post('/file/copy/withToken', function (request, database) {
        var body = request.body, query = request.query;
        var sourceFile = JSON.parse(body).sourceFile;
        var destinationCollection = query.collection, _a = query.replaceFileId, replaceFileId = _a === void 0 ? v4_1.default() : _a, _b = query.occurrenceKey, occurrenceKey = _b === void 0 ? v4_1.default() : _b;
        var sourceRecord = database.findOne('collectionItem', {
            id: sourceFile.id,
            collectionName: sourceFile.collection,
        });
        var _c = sourceRecord.data, details = _c.details, blob = _c.blob;
        var existingRecord = database.findOne('collectionItem', {
            id: replaceFileId,
            collectionName: destinationCollection,
            occurrenceKey: occurrenceKey,
        });
        var record = database.update('collectionItem', existingRecord.id, {
            id: replaceFileId,
            insertedAt: sourceRecord.data.insertedAt,
            occurrenceKey: occurrenceKey,
            details: details,
            blob: blob,
            collectionName: destinationCollection,
        });
        return {
            data: record.data,
        };
    });
    router.post('/upload/createWithFiles', function (_a, database) {
        var body = _a.body;
        var descriptors = JSON.parse(body).descriptors;
        var descriptor = descriptors[0];
        database.push('collectionItem', database_1.createCollectionItem({
            id: descriptor.fileId,
            collectionName: descriptor.collection,
            occurrenceKey: descriptor.occurrenceKey,
        }));
        var uploadRecord = upload_1.createUpload();
        database.push('upload', uploadRecord);
        return {
            data: {
                created: [
                    {
                        fileId: descriptor.fileId,
                        uploadId: uploadRecord.id,
                    },
                ],
            },
        };
    });
    return router;
}
exports.createApiRouter = createApiRouter;
//# sourceMappingURL=api-router.js.map