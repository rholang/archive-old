import { __assign, __awaiter, __generator, __read, __spread } from "tslib";
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { publishReplay } from 'rxjs/operators/publishReplay';
import uuid from 'uuid/v4';
import Dataloader from 'dataloader';
import { authToOwner, } from '@atlaskit/media-core';
import { MediaStore, uploadFile, mapMediaItemToFileState, getFileStreamsCache, mapMediaFileToFileState, globalMediaEventEmitter, RECENTS_COLLECTION, } from '..';
import isValidId from 'uuid-validate';
import { getMediaTypeFromUploadableFile } from '../utils/getMediaTypeFromUploadableFile';
import { convertBase64ToBlob } from '../utils/convertBase64ToBlob';
import { observableToPromise } from '../utils/observableToPromise';
import { getDimensionsFromBlob, } from '../utils/getDimensionsFromBlob';
import { getMediaTypeFromMimeType } from '../utils/getMediaTypeFromMimeType';
var POLLING_INTERVAL = 1000;
var maxNumberOfItemsPerCall = 100;
var makeCacheKey = function (id, collection) {
    return collection ? id + "-" + collection : id;
};
export var getItemsFromKeys = function (dataloaderKeys, fileItems) {
    var itemsByKey = fileItems.reduce(function (prev, nextFileItem) {
        var id = nextFileItem.id, collection = nextFileItem.collection;
        var key = makeCacheKey(id, collection);
        prev[key] = nextFileItem.details;
        return prev;
    }, {});
    return dataloaderKeys.map(function (dataloaderKey) {
        var id = dataloaderKey.id, collection = dataloaderKey.collection;
        var key = makeCacheKey(id, collection);
        return itemsByKey[key];
    });
};
var FileFetcherImpl = /** @class */ (function () {
    function FileFetcherImpl(mediaStore) {
        var _this = this;
        this.mediaStore = mediaStore;
        // Returns an array of the same length as the keys filled with file items
        this.batchLoadingFunc = function (keys) { return __awaiter(_this, void 0, void 0, function () {
            var nonCollectionName, fileIdsByCollection, items;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nonCollectionName = '__media-single-file-collection__';
                        fileIdsByCollection = keys.reduce(function (prev, next) {
                            var collectionName = next.collection || nonCollectionName;
                            var fileIds = prev[collectionName] || [];
                            fileIds.push(next.id);
                            prev[collectionName] = fileIds;
                            return prev;
                        }, {});
                        items = [];
                        return [4 /*yield*/, Promise.all(Object.keys(fileIdsByCollection).map(function (collectionNameKey) { return __awaiter(_this, void 0, void 0, function () {
                                var fileIds, collectionName, response;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            fileIds = fileIdsByCollection[collectionNameKey];
                                            collectionName = collectionNameKey === nonCollectionName
                                                ? undefined
                                                : collectionNameKey;
                                            return [4 /*yield*/, this.mediaStore.getItems(fileIds, collectionName)];
                                        case 1:
                                            response = _a.sent();
                                            items.push.apply(items, __spread(response.data.items));
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, getItemsFromKeys(keys, items)];
                }
            });
        }); };
        this.createDownloadFileStream = function (id, collection) {
            return Observable.create(function (observer) { return __awaiter(_this, void 0, void 0, function () {
                var timeoutId, fetchFile;
                var _this = this;
                return __generator(this, function (_a) {
                    fetchFile = function () { return __awaiter(_this, void 0, void 0, function () {
                        var response, fileState, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.dataloader.load({ id: id, collection: collection })];
                                case 1:
                                    response = _a.sent();
                                    if (!response) {
                                        return [2 /*return*/];
                                    }
                                    fileState = mapMediaItemToFileState(id, response);
                                    observer.next(fileState);
                                    if (fileState.status === 'processing') {
                                        timeoutId = window.setTimeout(fetchFile, POLLING_INTERVAL);
                                    }
                                    else {
                                        observer.complete();
                                    }
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_1 = _a.sent();
                                    observer.error(e_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); };
                    fetchFile();
                    return [2 /*return*/, function () {
                            window.clearTimeout(timeoutId);
                        }];
                });
            }); });
        };
        this.dataloader = new Dataloader(this.batchLoadingFunc, {
            maxBatchSize: maxNumberOfItemsPerCall,
        });
    }
    FileFetcherImpl.prototype.getFileState = function (id, options) {
        var _this = this;
        if (!isValidId(id)) {
            return Observable.create(function (observer) {
                observer.error(id + " is not a valid file id");
            });
        }
        return getFileStreamsCache().getOrInsert(id, function () {
            var collection = options && options.collectionName;
            var fileStream$ = publishReplay(1)(_this.createDownloadFileStream(id, collection));
            fileStream$.connect();
            return fileStream$;
        });
    };
    FileFetcherImpl.prototype.getCurrentState = function (id, options) {
        return observableToPromise(this.getFileState(id, options));
    };
    FileFetcherImpl.prototype.getArtifactURL = function (artifacts, artifactName, collectionName) {
        return this.mediaStore.getArtifactURL(artifacts, artifactName, collectionName);
    };
    FileFetcherImpl.prototype.getFileBinaryURL = function (id, collectionName) {
        return this.mediaStore.getFileBinaryURL(id, collectionName);
    };
    FileFetcherImpl.prototype.touchFiles = function (descriptors, collection) {
        return this.mediaStore
            .touchFiles({ descriptors: descriptors }, { collection: collection })
            .then(function (_a) {
            var data = _a.data;
            return data;
        });
    };
    FileFetcherImpl.prototype.generateUploadableFileUpfrontIds = function (collection) {
        var id = uuid();
        var occurrenceKey = uuid();
        var touchFileDescriptor = {
            fileId: id,
            occurrenceKey: occurrenceKey,
            collection: collection,
        };
        var deferredUploadId = this.touchFiles([touchFileDescriptor], collection).then(function (touchedFiles) { return touchedFiles.created[0].uploadId; });
        return {
            id: id,
            occurrenceKey: occurrenceKey,
            deferredUploadId: deferredUploadId,
        };
    };
    FileFetcherImpl.prototype.uploadExternal = function (url, collection) {
        return __awaiter(this, void 0, void 0, function () {
            var uploadableFileUpfrontIds, id, occurrenceKey, subject, deferredBlob, preview, name, fileState;
            var _this = this;
            return __generator(this, function (_a) {
                uploadableFileUpfrontIds = this.generateUploadableFileUpfrontIds(collection);
                id = uploadableFileUpfrontIds.id, occurrenceKey = uploadableFileUpfrontIds.occurrenceKey;
                subject = new ReplaySubject(1);
                deferredBlob = fetch(url)
                    .then(function (response) { return response.blob(); })
                    .catch(function () { return undefined; });
                preview = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var blob;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, deferredBlob];
                            case 1:
                                blob = _a.sent();
                                if (!blob) {
                                    reject('Could not fetch the blob');
                                }
                                resolve({ value: blob });
                                return [2 /*return*/];
                        }
                    });
                }); });
                name = url.split('/').pop() || '';
                fileState = {
                    status: 'processing',
                    name: name,
                    size: 0,
                    mediaType: 'unknown',
                    mimeType: '',
                    id: id,
                    occurrenceKey: occurrenceKey,
                    preview: preview,
                };
                subject.next(fileState);
                // we save it into the cache as soon as possible, in case someone subscribes
                getFileStreamsCache().set(id, subject);
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var blob, type, size, file, mediaType, dimensions;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, deferredBlob];
                                case 1:
                                    blob = _a.sent();
                                    if (!blob) {
                                        return [2 /*return*/, reject('Could not download remote file')];
                                    }
                                    type = blob.type, size = blob.size;
                                    file = {
                                        content: blob,
                                        mimeType: type,
                                        collection: collection,
                                        name: name,
                                    };
                                    mediaType = getMediaTypeFromMimeType(type);
                                    // we emit a richer state after the blob is fetched
                                    subject.next({
                                        status: 'processing',
                                        name: name,
                                        size: size,
                                        mediaType: mediaType,
                                        mimeType: type,
                                        id: id,
                                        occurrenceKey: occurrenceKey,
                                        preview: preview,
                                    });
                                    // we don't want to wait for the file to be upload
                                    this.upload(file, undefined, uploadableFileUpfrontIds);
                                    return [4 /*yield*/, getDimensionsFromBlob(blob)];
                                case 2:
                                    dimensions = _a.sent();
                                    resolve({
                                        dimensions: dimensions,
                                        uploadableFileUpfrontIds: uploadableFileUpfrontIds,
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    FileFetcherImpl.prototype.upload = function (file, controller, uploadableFileUpfrontIds) {
        if (typeof file.content === 'string') {
            file.content = convertBase64ToBlob(file.content);
        }
        var content = file.content, _a = file.name, name = _a === void 0 ? '' : _a, // name property is not available in base64 image
        collection = file.collection;
        if (!uploadableFileUpfrontIds) {
            uploadableFileUpfrontIds = this.generateUploadableFileUpfrontIds(collection);
        }
        var id = uploadableFileUpfrontIds.id;
        var occurrenceKey = uploadableFileUpfrontIds.occurrenceKey;
        var mimeType = '';
        var size = 0;
        var preview;
        // TODO [MSW-796]: get file size for base64
        var mediaType = getMediaTypeFromUploadableFile(file);
        var subject = new ReplaySubject(1);
        if (content instanceof Blob) {
            size = content.size;
            mimeType = content.type;
            preview = {
                value: content,
            };
        }
        var stateBase = {
            name: name,
            size: size,
            mediaType: mediaType,
            mimeType: mimeType,
            id: id,
            occurrenceKey: occurrenceKey,
            preview: preview,
        };
        var onProgress = function (progress) {
            subject.next(__assign(__assign({ status: 'uploading' }, stateBase), { progress: progress }));
        };
        var onUploadFinish = function (error) {
            if (error) {
                return subject.error(error);
            }
            subject.next(__assign({ status: 'processing', representations: {} }, stateBase));
            subject.complete();
        };
        var cancel = uploadFile(file, this.mediaStore, uploadableFileUpfrontIds, {
            onUploadFinish: onUploadFinish,
            onProgress: onProgress,
        }).cancel;
        getFileStreamsCache().set(id, subject);
        // We should report progress asynchronously, since this is what consumer expects
        // (otherwise in newUploadService file-converting event will be emitted before files-added)
        setTimeout(function () {
            onProgress(0);
        }, 0);
        if (controller) {
            controller.setAbort(cancel);
        }
        return subject;
    };
    FileFetcherImpl.prototype.downloadBinary = function (id, name, collectionName) {
        if (name === void 0) { name = 'download'; }
        return __awaiter(this, void 0, void 0, function () {
            var isIE11, isSafari, iframeName, link, iframe, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        isIE11 = !!window.MSInputMethodContext &&
                            !!document.documentMode;
                        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                        iframeName = 'media-download-iframe';
                        link = document.createElement('a');
                        iframe = document.getElementById(iframeName);
                        if (!iframe) {
                            iframe = document.createElement('iframe');
                            iframe.style.display = 'none';
                            iframe.id = iframeName;
                            iframe.name = iframeName;
                            document.body.appendChild(iframe);
                        }
                        _a = link;
                        return [4 /*yield*/, this.mediaStore.getFileBinaryURL(id, collectionName)];
                    case 1:
                        _a.href = _b.sent();
                        link.download = name;
                        link.target = isIE11 || isSafari ? '_blank' : iframeName;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        globalMediaEventEmitter.emit('media-viewed', {
                            fileId: id,
                            isUserCollection: collectionName === RECENTS_COLLECTION,
                            viewingLevel: 'download',
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FileFetcherImpl.prototype.copyFile = function (source, destination) {
        return __awaiter(this, void 0, void 0, function () {
            var authProvider, sourceCollection, id, destinationAuthProvider, destinationCollectionName, replaceFileId, occurrenceKey, mediaStore, owner, _a, body, params, copiedFile, copiedFileObservable, copiedFileState;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        authProvider = source.authProvider, sourceCollection = source.collection, id = source.id;
                        destinationAuthProvider = destination.authProvider, destinationCollectionName = destination.collection, replaceFileId = destination.replaceFileId, occurrenceKey = destination.occurrenceKey;
                        mediaStore = new MediaStore({
                            authProvider: destinationAuthProvider,
                        });
                        _a = authToOwner;
                        return [4 /*yield*/, authProvider({ collectionName: sourceCollection })];
                    case 1:
                        owner = _a.apply(void 0, [_b.sent()]);
                        body = {
                            sourceFile: {
                                id: id,
                                collection: sourceCollection,
                                owner: owner,
                            },
                        };
                        params = {
                            collection: destinationCollectionName,
                            replaceFileId: replaceFileId,
                            occurrenceKey: occurrenceKey,
                        };
                        return [4 /*yield*/, mediaStore.copyFileWithToken(body, params)];
                    case 2:
                        copiedFile = (_b.sent()).data;
                        copiedFileObservable = new ReplaySubject(1);
                        copiedFileState = mapMediaFileToFileState({
                            data: copiedFile,
                        });
                        copiedFileObservable.next(copiedFileState);
                        getFileStreamsCache().set(copiedFile.id, copiedFileObservable);
                        return [2 /*return*/, copiedFile];
                }
            });
        });
    };
    return FileFetcherImpl;
}());
export { FileFetcherImpl };
//# sourceMappingURL=file-fetcher.js.map