import { __assign, __awaiter, __generator } from "tslib";
import uuid from 'uuid/v4';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { getFileStreamsCache, getMediaTypeFromMimeType, isPreviewableType, globalMediaEventEmitter, observableToPromise, isErrorFileState, } from '@atlaskit/media-client';
import { RECENTS_COLLECTION } from '@atlaskit/media-client/constants';
import { isStartImportAction } from '../actions/startImport';
import { finalizeUpload } from '../actions/finalizeUpload';
import { remoteUploadStart } from '../actions/remoteUploadStart';
import { getPreview } from '../actions/getPreview';
import { handleCloudFetchingEvent } from '../actions/handleCloudFetchingEvent';
import { setEventProxy } from '../actions/setEventProxy';
import { hidePopup } from '../actions/hidePopup';
import { resetView } from '../actions/resetView';
import { RemoteUploadActivity } from '../tools/websocket/upload/remoteUploadActivity';
import { copyMediaFileForUpload } from '../../domain/file';
import { sendUploadEvent } from '../actions/sendUploadEvent';
import { getPreviewFromMetadata } from '../../domain/preview';
export var isRemoteFileItem = function (item) {
    return ['dropbox', 'google', 'giphy'].indexOf(item.serviceName) !== -1;
};
export var isRemoteService = function (serviceName) {
    return ['dropbox', 'google', 'giphy'].indexOf(serviceName) !== -1;
};
var mapSelectedItemToSelectedUploadFile = function (_a, tenantFileId, collection) {
    var id = _a.id, name = _a.name, mimeType = _a.mimeType, size = _a.size, date = _a.date, serviceName = _a.serviceName, accountId = _a.accountId, _b = _a.occurrenceKey, occurrenceKey = _b === void 0 ? uuid() : _b;
    return ({
        file: {
            id: id,
            name: name,
            size: size,
            creationDate: date || Date.now(),
            type: mimeType,
            occurrenceKey: occurrenceKey,
        },
        serviceName: serviceName,
        accountId: accountId,
        touchFileDescriptor: {
            fileId: tenantFileId,
            occurrenceKey: occurrenceKey,
            collection: collection,
        },
    });
};
export function importFilesMiddleware(eventEmitter, wsProvider) {
    return function (store) { return function (next) { return function (action) {
        if (isStartImportAction(action)) {
            importFiles(eventEmitter, store, wsProvider);
        }
        return next(action);
    }; }; };
}
var getPreviewByService = function (store, serviceName, mediaType, fileId) {
    var _a = store.getState(), userMediaClient = _a.userMediaClient, giphy = _a.giphy;
    if (serviceName === 'giphy') {
        var selectedGiphy = giphy.imageCardModels.find(function (cardModel) { return cardModel.metadata.id === fileId; });
        if (selectedGiphy) {
            return {
                value: selectedGiphy.dataURI,
            };
        }
    }
    else if (serviceName === 'upload') {
        var observable_1 = getFileStreamsCache().get(fileId);
        if (observable_1) {
            return new Promise(function (resolve) {
                var subscription = observable_1.subscribe({
                    next: function (state) {
                        if (state.status !== 'error') {
                            setTimeout(function () { return subscription.unsubscribe(); }, 0);
                            resolve(state.preview);
                        }
                    },
                });
            });
        }
    }
    else if (serviceName === 'recent_files' && isPreviewableType(mediaType)) {
        return new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
            var blob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userMediaClient.getImage(fileId, {
                            collection: RECENTS_COLLECTION,
                            mode: 'fit',
                        }, undefined, true)];
                    case 1:
                        blob = _a.sent();
                        resolve({ value: blob });
                        return [2 /*return*/];
                }
            });
        }); });
    }
    return undefined;
};
/**
 * Take selected file (that can be local uploads, recents or remote file (giphy, google, dropbox))
 * and convert it to FileState that will become tenant file state.
 * If selected file already in the cache (for local uploads and recents) we take everything it has, change it's id
 * to new tenant id (generated on client side) and add a preview.
 * If selected file is not in the cache (for remote selected files) we generate new file state
 * with details found in selected file.
 */
export var getTenantFileState = function (store, selectedUploadFile) { return __awaiter(void 0, void 0, void 0, function () {
    var selectedUserFile, serviceName, touchFileDescriptor, tenantFileId, selectedUserFileId, mediaType, preview, userFileObservable, userFileState;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                selectedUserFile = selectedUploadFile.file, serviceName = selectedUploadFile.serviceName, touchFileDescriptor = selectedUploadFile.touchFileDescriptor;
                tenantFileId = touchFileDescriptor.fileId;
                selectedUserFileId = selectedUserFile.id;
                mediaType = getMediaTypeFromMimeType(selectedUserFile.type);
                preview = getPreviewByService(store, serviceName, mediaType, selectedUserFileId);
                userFileObservable = getFileStreamsCache().get(selectedUserFileId);
                if (!userFileObservable) return [3 /*break*/, 2];
                return [4 /*yield*/, observableToPromise(userFileObservable)];
            case 1:
                userFileState = _a.sent();
                if (isErrorFileState(userFileState)) {
                    return [2 /*return*/, __assign(__assign({}, userFileState), { id: tenantFileId })];
                }
                else {
                    return [2 /*return*/, __assign(__assign({}, userFileState), { id: tenantFileId, preview: preview })];
                }
                return [3 /*break*/, 3];
            case 2: return [2 /*return*/, {
                    id: tenantFileId,
                    status: 'processing',
                    mediaType: mediaType,
                    mimeType: selectedUserFile.type,
                    name: selectedUserFile.name,
                    size: selectedUserFile.size,
                    preview: preview,
                    representations: {},
                }];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * Add tenant state to the cache and then emit this state to everyone who is listening on
 * 1. mediaClient even-emitter interface (mediaClient.on()).
 *  Note: There shouldn't be anyone listening here atm. This will be removed as soon as we remove Context API.
 * 2. globalMediaEventEmitter even-emitter interface.
 *  Note: This is different from `mediaPicker.on()` event-emitter interface!
 */
var distributeTenantFileState = function (store, tenantFileState, userSelectedFileId) { return __awaiter(void 0, void 0, void 0, function () {
    var tenantMediaClient, tenantFileSubject, userFileObservable;
    return __generator(this, function (_a) {
        tenantMediaClient = store.getState().tenantMediaClient;
        tenantFileSubject = new ReplaySubject(1);
        userFileObservable = getFileStreamsCache().get(userSelectedFileId);
        getFileStreamsCache().set(tenantFileState.id, tenantFileSubject);
        tenantFileSubject.next(tenantFileState);
        if (userFileObservable) {
            userFileObservable.subscribe({
                next: function (latestUserFileState) {
                    var previewOverride = !isErrorFileState(tenantFileState)
                        ? { preview: tenantFileState.preview }
                        : {};
                    tenantFileSubject.next(__assign(__assign(__assign({}, latestUserFileState), previewOverride), { id: tenantFileState.id }));
                },
            });
        }
        tenantMediaClient.emit('file-added', tenantFileState);
        globalMediaEventEmitter.emit('file-added', tenantFileState);
        return [2 /*return*/];
    });
}); };
/**
 * We call `/upload/createWithFiles` (touch) endpoint to create an empty file with client side
 * generated file ID that we use here as tenant file id.
 */
export var touchSelectedFiles = function (selectedUploadFiles, store) {
    if (selectedUploadFiles.length === 0) {
        return;
    }
    var _a = store.getState(), tenantMediaClient = _a.tenantMediaClient, config = _a.config;
    var tenantCollection = config.uploadParams && config.uploadParams.collection;
    var touchFileDescriptors = selectedUploadFiles.map(function (selectedUploadFile) { return selectedUploadFile.touchFileDescriptor; });
    return tenantMediaClient.file.touchFiles(touchFileDescriptors, tenantCollection);
};
export function importFiles(eventEmitter, store, wsProvider) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, uploads, selectedItems, userMediaClient, config, tenantCollection, userAuth, selectedUploadFiles;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = store.getState(), uploads = _a.uploads, selectedItems = _a.selectedItems, userMediaClient = _a.userMediaClient, config = _a.config;
                    tenantCollection = config.uploadParams && config.uploadParams.collection;
                    store.dispatch(hidePopup());
                    return [4 /*yield*/, userMediaClient.config.authProvider()];
                case 1:
                    userAuth = _b.sent();
                    selectedUploadFiles = selectedItems.map(function (item) {
                        var tenantFileId = uuid();
                        return mapSelectedItemToSelectedUploadFile(item, tenantFileId, tenantCollection);
                    });
                    return [4 /*yield*/, Promise.all(selectedUploadFiles.map(function (selectedUploadFile) { return __awaiter(_this, void 0, void 0, function () {
                            var tenantFileStates, userSelectedFileId;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, getTenantFileState(store, selectedUploadFile)];
                                    case 1:
                                        tenantFileStates = _a.sent();
                                        userSelectedFileId = selectedUploadFile.file.id;
                                        // 2. We store them to the cache and notify all listeners of global event emitter
                                        distributeTenantFileState(store, tenantFileStates, userSelectedFileId);
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _b.sent();
                    // 3. We notify all listeners of mediaPicker event emitter about 'uploads-start' event
                    eventEmitter.emitUploadsStart(selectedUploadFiles.map(function (_a) {
                        var file = _a.file, touchFileDescriptor = _a.touchFileDescriptor;
                        return copyMediaFileForUpload(file, touchFileDescriptor.fileId);
                    }));
                    // 4. Now we touch the files
                    touchSelectedFiles(selectedUploadFiles, store);
                    // 5. Now, when empty file was created we can do all the necessary uploading/copy operations
                    // TODO here we don't have actually guarantee that empty file was created.
                    // https://product-fabric.atlassian.net/browse/MS-2165
                    selectedUploadFiles.forEach(function (selectedUploadFile) {
                        var file = selectedUploadFile.file, serviceName = selectedUploadFile.serviceName, touchFileDescriptor = selectedUploadFile.touchFileDescriptor;
                        var selectedItemId = file.id;
                        if (serviceName === 'upload') {
                            var localUpload = uploads[selectedItemId];
                            var fileId = touchFileDescriptor.fileId;
                            importFilesFromLocalUpload(selectedItemId, fileId, store, localUpload, fileId);
                        }
                        else if (serviceName === 'recent_files') {
                            importFilesFromRecentFiles(selectedUploadFile, store);
                        }
                        else if (isRemoteService(serviceName)) {
                            var wsConnectionHolder = wsProvider.getWsConnectionHolder(userAuth);
                            importFilesFromRemoteService(selectedUploadFile, store, wsConnectionHolder);
                        }
                    });
                    store.dispatch(resetView());
                    return [2 /*return*/];
            }
        });
    });
}
export var importFilesFromLocalUpload = function (selectedItemId, uploadId, store, localUpload, replaceFileId) {
    localUpload.events.forEach(function (originalEvent) {
        var event = __assign({}, originalEvent);
        if (event.name === 'upload-processing') {
            var file = event.data.file;
            var source = {
                id: file.id,
                collection: RECENTS_COLLECTION,
            };
            store.dispatch(finalizeUpload(file, uploadId, source, replaceFileId));
        }
        else if (event.name !== 'upload-end') {
            store.dispatch(sendUploadEvent({ event: event, uploadId: uploadId }));
        }
    });
    store.dispatch(setEventProxy(selectedItemId, uploadId));
};
export var importFilesFromRecentFiles = function (selectedUploadFile, store) {
    var file = selectedUploadFile.file, touchFileDescriptor = selectedUploadFile.touchFileDescriptor;
    var fileId = touchFileDescriptor.fileId;
    var source = {
        id: file.id,
        collection: RECENTS_COLLECTION,
    };
    store.dispatch(finalizeUpload(file, fileId, source, fileId));
    store.dispatch(getPreview(fileId, file, RECENTS_COLLECTION));
};
export var importFilesFromRemoteService = function (selectedUploadFile, store, wsConnectionHolder) {
    var touchFileDescriptor = selectedUploadFile.touchFileDescriptor, serviceName = selectedUploadFile.serviceName, accountId = selectedUploadFile.accountId, file = selectedUploadFile.file;
    var fileId = touchFileDescriptor.fileId;
    var uploadActivity = new RemoteUploadActivity(fileId, function (event, payload) {
        if (event === 'NotifyMetadata') {
            var preview = getPreviewFromMetadata(payload.metadata);
            store.dispatch(sendUploadEvent({
                event: {
                    name: 'upload-preview-update',
                    data: {
                        file: file,
                        preview: preview,
                    },
                },
                uploadId: fileId,
            }));
        }
        else {
            // TODO figure out the difference between this uploadId and the last MSW-405
            var newUploadId = payload.uploadId;
            var newFile = __assign(__assign({}, file), { id: newUploadId, creationDate: Date.now() });
            store.dispatch(handleCloudFetchingEvent(newFile, event, payload));
        }
    });
    uploadActivity.on('Started', function () {
        store.dispatch(remoteUploadStart(fileId));
    });
    wsConnectionHolder.openConnection(uploadActivity);
    wsConnectionHolder.send({
        type: 'fetchFile',
        params: {
            serviceName: serviceName,
            accountId: accountId,
            fileId: file.id,
            fileName: file.name,
            collection: RECENTS_COLLECTION,
            jobId: fileId,
        },
    });
};
//# sourceMappingURL=importFiles.js.map