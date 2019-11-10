"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var __1 = require("..");
var defaultImageOptions = {
    'max-age': 3600,
    allowAnimated: true,
    mode: 'crop',
};
var defaultGetCollectionItems = {
    limit: 30,
    sortDirection: 'desc',
};
var extendImageParams = function (params, fetchMaxRes) {
    if (fetchMaxRes === void 0) { fetchMaxRes = false; }
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, defaultImageOptions), params), (fetchMaxRes ? { width: 4096, height: 4096 } : {}));
};
var jsonHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};
var MediaStore = /** @class */ (function () {
    function MediaStore(config) {
        var _this = this;
        this.config = config;
        this.getFile = function (fileId, params) {
            if (params === void 0) { params = {}; }
            return _this.request("/file/" + fileId, {
                params: params,
                authContext: { collectionName: params.collection },
            }).then(__1.mapResponseToJson);
        };
        this.getFileImageURL = function (id, params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var auth;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.config.authProvider()];
                    case 1:
                        auth = _a.sent();
                        return [2 /*return*/, __1.createUrl(auth.baseUrl + "/file/" + id + "/image", {
                                params: extendImageParams(params),
                                auth: auth,
                            })];
                }
            });
        }); };
        this.getFileBinaryURL = function (id, collectionName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var auth;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.config.authProvider({ collectionName: collectionName })];
                    case 1:
                        auth = _a.sent();
                        return [2 /*return*/, __1.createUrl(auth.baseUrl + "/file/" + id + "/binary", {
                                params: { dl: true, collection: collectionName },
                                auth: auth,
                            })];
                }
            });
        }); };
        this.getArtifactURL = function (artifacts, artifactName, collectionName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var artifactUrl, auth;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        artifactUrl = __1.getArtifactUrl(artifacts, artifactName);
                        if (!artifactUrl) {
                            throw new Error("artifact " + artifactName + " not found");
                        }
                        return [4 /*yield*/, this.config.authProvider({ collectionName: collectionName })];
                    case 1:
                        auth = _a.sent();
                        return [2 /*return*/, __1.createUrl("" + auth.baseUrl + artifactUrl, {
                                params: { collection: collectionName },
                                auth: auth,
                            })];
                }
            });
        }); };
        this.getImage = function (id, params, controller, fetchMaxRes) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var isWebpSupported, headers;
            return tslib_1.__generator(this, function (_a) {
                isWebpSupported = false;
                if (isWebpSupported) {
                    headers = {
                        accept: 'image/webp,image/*,*/*;q=0.8',
                    };
                }
                return [2 /*return*/, this.request("/file/" + id + "/image", {
                        headers: headers,
                        params: extendImageParams(params, fetchMaxRes),
                        authContext: { collectionName: params && params.collection },
                    }, controller).then(__1.mapResponseToBlob)];
            });
        }); };
        this.getItems = function (ids, collectionName) {
            var descriptors = ids.map(function (id) { return ({
                type: 'file',
                id: id,
                collection: collectionName,
            }); });
            return _this.request('/items', {
                method: 'POST',
                body: JSON.stringify({ descriptors: descriptors }),
                headers: jsonHeaders,
                authContext: { collectionName: collectionName },
            }).then(__1.mapResponseToJson);
        };
        this.getImageMetadata = function (id, params) {
            return _this.request("/file/" + id + "/image/metadata", {
                params: params,
                authContext: { collectionName: params && params.collection },
            }).then(__1.mapResponseToJson);
        };
    }
    MediaStore.prototype.createCollection = function (collectionName) {
        return this.request('/collection', {
            method: 'POST',
            body: JSON.stringify({ name: collectionName }),
            authContext: { collectionName: collectionName },
            headers: jsonHeaders,
        }).then(__1.mapResponseToJson);
    };
    MediaStore.prototype.getCollection = function (collectionName) {
        return this.request("/collection/" + collectionName, {
            authContext: { collectionName: collectionName },
            headers: {
                Accept: 'application/json',
            },
        }).then(__1.mapResponseToJson);
    };
    MediaStore.prototype.getCollectionItems = function (collectionName, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, _a, contents, nextInclusiveStartKey, contentsWithoutEmptyFiles;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.request("/collection/" + collectionName + "/items", {
                            authContext: { collectionName: collectionName },
                            params: tslib_1.__assign(tslib_1.__assign({}, defaultGetCollectionItems), params),
                            headers: {
                                Accept: 'application/json',
                            },
                        })];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, __1.mapResponseToJson(response)];
                    case 2:
                        _a = (_b.sent()).data, contents = _a.contents, nextInclusiveStartKey = _a.nextInclusiveStartKey;
                        contentsWithoutEmptyFiles = contents.filter(function (item) { return item.details.size && item.details.size > 0; });
                        return [2 /*return*/, {
                                data: {
                                    contents: contentsWithoutEmptyFiles,
                                    nextInclusiveStartKey: nextInclusiveStartKey,
                                },
                            }];
                }
            });
        });
    };
    MediaStore.prototype.removeCollectionFile = function (id, collectionName, occurrenceKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var body;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            actions: [
                                {
                                    action: 'remove',
                                    item: {
                                        type: 'file',
                                        id: id,
                                        occurrenceKey: occurrenceKey,
                                    },
                                },
                            ],
                        };
                        return [4 /*yield*/, this.request("/collection/" + collectionName, {
                                method: 'PUT',
                                authContext: { collectionName: collectionName },
                                body: JSON.stringify(body),
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MediaStore.prototype.createUpload = function (createUpTo, collectionName) {
        if (createUpTo === void 0) { createUpTo = 1; }
        return this.request("/upload", {
            method: 'POST',
            authContext: { collectionName: collectionName },
            params: {
                createUpTo: createUpTo,
            },
            headers: {
                Accept: 'application/json',
            },
        }).then(__1.mapResponseToJson);
    };
    MediaStore.prototype.uploadChunk = function (etag, blob, collectionName) {
        return this.request("/chunk/" + etag, {
            method: 'PUT',
            authContext: { collectionName: collectionName },
            body: blob,
        }).then(__1.mapResponseToVoid);
    };
    MediaStore.prototype.probeChunks = function (chunks, collectionName) {
        return this.request("/chunk/probe", {
            method: 'POST',
            authContext: { collectionName: collectionName },
            body: JSON.stringify({
                chunks: chunks,
            }),
            headers: jsonHeaders,
        }).then(__1.mapResponseToJson);
    };
    MediaStore.prototype.createFileFromUpload = function (body, params) {
        if (params === void 0) { params = {}; }
        return this.request('/file/upload', {
            method: 'POST',
            authContext: { collectionName: params.collection },
            params: params,
            body: JSON.stringify(body),
            headers: jsonHeaders,
        }).then(__1.mapResponseToJson);
    };
    MediaStore.prototype.touchFiles = function (body, params) {
        if (params === void 0) { params = {}; }
        return this.request('/upload/createWithFiles', {
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify(body),
            authContext: { collectionName: params.collection },
        }).then(__1.mapResponseToJson);
    };
    MediaStore.prototype.createFile = function (params) {
        if (params === void 0) { params = {}; }
        return this.request('/file', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            params: params,
            authContext: { collectionName: params.collection },
        }).then(__1.mapResponseToJson);
    };
    MediaStore.prototype.createFileFromBinary = function (blob, params) {
        if (params === void 0) { params = {}; }
        return this.request('/file/binary', {
            method: 'POST',
            body: blob,
            params: params,
            headers: {
                Accept: 'application/json',
                'Content-Type': blob.type,
            },
            authContext: { collectionName: params.collection },
        }).then(__1.mapResponseToJson);
    };
    MediaStore.prototype.appendChunksToUpload = function (uploadId, body, collectionName) {
        return this.request("/upload/" + uploadId + "/chunks", {
            method: 'PUT',
            authContext: { collectionName: collectionName },
            body: JSON.stringify(body),
            headers: jsonHeaders,
        }).then(__1.mapResponseToVoid);
    };
    MediaStore.prototype.copyFileWithToken = function (body, params) {
        return this.request('/file/copy/withToken', {
            method: 'POST',
            authContext: { collectionName: params.collection },
            body: JSON.stringify(body),
            headers: jsonHeaders,
            params: params,
        }).then(__1.mapResponseToJson);
    };
    MediaStore.prototype.request = function (path, options, controller) {
        if (options === void 0) { options = {
            method: 'GET',
            authContext: {},
        }; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var authProvider, method, authContext, params, headers, body, auth;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authProvider = this.config.authProvider;
                        method = options.method, authContext = options.authContext, params = options.params, headers = options.headers, body = options.body;
                        return [4 /*yield*/, authProvider(authContext)];
                    case 1:
                        auth = _a.sent();
                        return [2 /*return*/, __1.request("" + auth.baseUrl + path, {
                                method: method,
                                auth: auth,
                                params: params,
                                headers: headers,
                                body: body,
                            }, controller)];
                }
            });
        });
    };
    return MediaStore;
}());
exports.MediaStore = MediaStore;
//# sourceMappingURL=media-store.js.map