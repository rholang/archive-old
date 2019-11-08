"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var media_store_1 = require("@atlaskit/media-store");
var finalizeUpload_1 = require("../actions/finalizeUpload");
var source_file_1 = require("../domain/source-file");
var sendUploadEvent_1 = require("../actions/sendUploadEvent");
var actions_1 = require("../actions");
function default_1() {
    return function (store) { return function (next) { return function (action) {
        if (finalizeUpload_1.isFinalizeUploadAction(action)) {
            finalizeUpload(store, action);
        }
        return next(action);
    }; }; };
}
exports.default = default_1;
function finalizeUpload(store, _a) {
    var file = _a.file, uploadId = _a.uploadId, source = _a.source, replaceFileId = _a.replaceFileId;
    var userMediaClient = store.getState().userMediaClient;
    return userMediaClient.config
        .authProvider()
        .then(source_file_1.mapAuthToSourceFileOwner)
        .then(function (owner) {
        var sourceFile = tslib_1.__assign(tslib_1.__assign({}, source), { owner: owner });
        var copyFileParams = {
            store: store,
            file: file,
            uploadId: uploadId,
            sourceFile: sourceFile,
            replaceFileId: replaceFileId,
        };
        return copyFile(copyFileParams);
    });
}
exports.finalizeUpload = finalizeUpload;
// Trigers a fetch to the recently copied file, and populates the existing state with the remote one
var emitProcessedState = function (destinationFile, store) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                var _a, tenantMediaClient, config, collection, tenantSubject, response, firstItem, subscription_1;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = store.getState(), tenantMediaClient = _a.tenantMediaClient, config = _a.config;
                            collection = config.uploadParams && config.uploadParams.collection;
                            tenantSubject = tenantMediaClient.file.getFileState(destinationFile.id);
                            return [4 /*yield*/, tenantMediaClient.mediaStore.getItems([destinationFile.id], collection)];
                        case 1:
                            response = (_b.sent()).data;
                            firstItem = response.items[0];
                            // We need this check since the return type of getFileState might not be a ReplaySubject and won't have "next"
                            if (firstItem &&
                                firstItem.details.processingStatus === 'succeeded' &&
                                tenantSubject &&
                                tenantSubject.next) {
                                subscription_1 = tenantSubject.subscribe({
                                    next: function (currentState) {
                                        setTimeout(function () { return subscription_1.unsubscribe(); }, 0);
                                        setTimeout(function () {
                                            var _a = firstItem.details, artifacts = _a.artifacts, mediaType = _a.mediaType, mimeType = _a.mimeType, name = _a.name, size = _a.size, representations = _a.representations;
                                            // we emit a new state which extends the existing one + the remote fields
                                            // fields like "artifacts" will be later on required on MV and we don't have it locally beforehand
                                            tenantSubject.next(tslib_1.__assign(tslib_1.__assign({}, currentState), { status: 'processed', artifacts: artifacts,
                                                mediaType: mediaType,
                                                mimeType: mimeType,
                                                name: name,
                                                size: size,
                                                representations: representations }));
                                            resolve();
                                        }, 0);
                                    },
                                });
                            }
                            return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
function copyFile(_a) {
    var store = _a.store, file = _a.file, uploadId = _a.uploadId, sourceFile = _a.sourceFile, replaceFileId = _a.replaceFileId;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _b, tenantMediaClient, config, collection, mediaStore, body, params, _c, _d, destinationFile, tenantSubject, subscription_2, error_1;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _b = store.getState(), tenantMediaClient = _b.tenantMediaClient, config = _b.config;
                    collection = config.uploadParams && config.uploadParams.collection;
                    mediaStore = new media_store_1.MediaStore({
                        authProvider: tenantMediaClient.config.authProvider,
                    });
                    body = {
                        sourceFile: sourceFile,
                    };
                    _c = {
                        collection: collection
                    };
                    if (!replaceFileId) return [3 /*break*/, 2];
                    return [4 /*yield*/, replaceFileId];
                case 1:
                    _d = _e.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _d = undefined;
                    _e.label = 3;
                case 3:
                    params = (_c.replaceFileId = _d,
                        _c.occurrenceKey = file.occurrenceKey,
                        _c);
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, 6, 7, 8]);
                    return [4 /*yield*/, mediaStore.copyFileWithToken(body, params)];
                case 5:
                    destinationFile = _e.sent();
                    emitProcessedState(destinationFile.data, store);
                    tenantSubject = tenantMediaClient.file.getFileState(destinationFile.data.id);
                    subscription_2 = tenantSubject.subscribe({
                        next: function (fileState) {
                            setTimeout(function () { return subscription_2.unsubscribe(); }, 0);
                            if (fileState.status === 'processing') {
                                store.dispatch(sendUploadEvent_1.sendUploadEvent({
                                    event: {
                                        name: 'upload-processing',
                                        data: {
                                            file: file,
                                        },
                                    },
                                    uploadId: uploadId,
                                }));
                            }
                            else if (fileState.status === 'processed') {
                                store.dispatch(sendUploadEvent_1.sendUploadEvent({
                                    event: {
                                        name: 'upload-end',
                                        data: {
                                            file: file,
                                        },
                                    },
                                    uploadId: uploadId,
                                }));
                            }
                            else if (fileState.status === 'failed-processing' ||
                                fileState.status === 'error') {
                                store.dispatch(sendUploadEvent_1.sendUploadEvent({
                                    event: {
                                        name: 'upload-error',
                                        data: {
                                            file: file,
                                            error: {
                                                name: 'object_create_fail',
                                                description: 'There was an error while uploading a file',
                                            },
                                        },
                                    },
                                    uploadId: uploadId,
                                }));
                            }
                        },
                    });
                    return [3 /*break*/, 8];
                case 6:
                    error_1 = _e.sent();
                    store.dispatch(sendUploadEvent_1.sendUploadEvent({
                        event: {
                            name: 'upload-error',
                            data: {
                                file: file,
                                error: {
                                    name: 'object_create_fail',
                                    description: error_1.message,
                                },
                            },
                        },
                        uploadId: uploadId,
                    }));
                    return [3 /*break*/, 8];
                case 7:
                    store.dispatch(actions_1.resetView());
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=finalizeUpload.js.map