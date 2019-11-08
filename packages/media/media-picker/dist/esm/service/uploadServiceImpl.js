import { __assign, __awaiter, __generator } from "tslib";
import uuidV4 from 'uuid/v4';
import { getMediaTypeFromMimeType, getFileStreamsCache, MediaClient, globalMediaEventEmitter, } from '@atlaskit/media-client';
import { RECENTS_COLLECTION } from '@atlaskit/media-client/constants';
import { MediaStore, UploadController, } from '@atlaskit/media-store';
import { EventEmitter2 } from 'eventemitter2';
import { mapAuthToSourceFileOwner } from '../popup/domain/source-file';
import { getPreviewFromImage } from '../util/getPreviewFromImage';
import { SmartMediaProgress } from '../domain/progress';
import { LocalFileSource } from '../service/types';
import { getPreviewFromBlob } from '../util/getPreviewFromBlob';
var UploadServiceImpl = /** @class */ (function () {
    function UploadServiceImpl(tenantMediaClient, tenantUploadParams, shouldCopyFileToRecents) {
        var _this = this;
        this.tenantMediaClient = tenantMediaClient;
        this.tenantUploadParams = tenantUploadParams;
        this.shouldCopyFileToRecents = shouldCopyFileToRecents;
        this.emit = function (event, payload) {
            _this.emitter.emit(event, payload);
        };
        this.onFileSuccess = function (cancellableFileUpload, fileId) { return __awaiter(_this, void 0, void 0, function () {
            var mediaFile;
            var _this = this;
            return __generator(this, function (_a) {
                mediaFile = cancellableFileUpload.mediaFile;
                this.copyFileToUsersCollection(fileId)
                    // eslint-disable-next-line no-console
                    .catch(console.log); // We intentionally swallow these errors
                this.emit('file-converting', {
                    file: mediaFile,
                });
                this.emit('file-converted', {
                    file: mediaFile,
                });
                cancellableFileUpload.cancel = function () {
                    _this.releaseCancellableFile(mediaFile);
                };
                return [2 /*return*/];
            });
        }); };
        this.onFileProgress = function (_a, portion) {
            var mediaFile = _a.mediaFile, file = _a.file;
            var size = file.size;
            var progress = new SmartMediaProgress(size, size * portion, mediaFile.creationDate, Date.now());
            _this.emit('file-uploading', {
                file: mediaFile,
                progress: progress.toJSON(),
            });
        };
        this.onFileError = function (mediaFile, mediaErrorName, error) {
            _this.releaseCancellableFile(mediaFile);
            if (error === 'canceled') {
                // Specific error coming from chunkinator via rejected fileId promise.
                // We do not want to trigger error in this case.
                return;
            }
            var description = error instanceof Error ? error.message : error;
            _this.emit('file-upload-error', {
                file: mediaFile,
                error: {
                    fileId: mediaFile.id,
                    description: description,
                    name: mediaErrorName,
                },
            });
        };
        this.emitter = new EventEmitter2();
        this.cancellableFilesUploads = {};
        var userAuthProvider = tenantMediaClient.config.userAuthProvider;
        if (userAuthProvider) {
            this.userMediaStore = new MediaStore({
                authProvider: userAuthProvider,
            });
            // We need to use the userAuth to upload this file (recents)
            this.userMediaClient = new MediaClient({
                userAuthProvider: userAuthProvider,
                authProvider: userAuthProvider,
            });
        }
    }
    UploadServiceImpl.prototype.setUploadParams = function (uploadParams) {
        this.tenantUploadParams = uploadParams;
    };
    // Used for testing
    UploadServiceImpl.prototype.createUploadController = function () {
        return new UploadController();
    };
    UploadServiceImpl.prototype.addFiles = function (files) {
        this.addFilesWithSource(files.map(function (file) { return ({
            file: file,
            source: LocalFileSource.LocalUpload,
        }); }));
    };
    UploadServiceImpl.prototype.addFilesWithSource = function (files) {
        var _this = this;
        if (files.length === 0) {
            return;
        }
        var creationDate = Date.now();
        var _a = this, userMediaClient = _a.userMediaClient, tenantMediaClient = _a.tenantMediaClient, shouldCopyFileToRecents = _a.shouldCopyFileToRecents;
        var mediaClient = shouldCopyFileToRecents
            ? tenantMediaClient
            : userMediaClient;
        var collection = shouldCopyFileToRecents
            ? this.tenantUploadParams.collection
            : RECENTS_COLLECTION;
        if (!mediaClient) {
            return;
        }
        var touchFileDescriptors = [];
        for (var i = 0; i < files.length; i++) {
            touchFileDescriptors.push({
                fileId: uuidV4(),
                occurrenceKey: uuidV4(),
                collection: collection,
            });
        }
        var promisedTouchFiles = mediaClient.file.touchFiles(touchFileDescriptors, collection);
        var cancellableFileUploads = files.map(function (fileWithSource, i) {
            var file = fileWithSource.file, source = fileWithSource.source;
            var _a = touchFileDescriptors[i], id = _a.fileId, occurrenceKey = _a.occurrenceKey;
            var deferredUploadId = promisedTouchFiles.then(function (touchedFiles) {
                var touchedFile = touchedFiles.created.find(function (touchedFile) { return touchedFile.fileId === id; });
                if (!touchedFile) {
                    throw new Error('Cant retrieve uploadId from result of touch endpoint call');
                }
                return touchedFile.uploadId;
            });
            var uploadableFile = {
                collection: collection,
                content: file,
                name: file.name,
                mimeType: file.type,
            };
            var uploadableUpfrontIds = {
                id: id,
                occurrenceKey: occurrenceKey,
                deferredUploadId: deferredUploadId,
            };
            var controller = _this.createUploadController();
            var sourceFileObservable = mediaClient.file.upload(uploadableFile, controller, uploadableUpfrontIds);
            var mediaFile = {
                id: id,
                name: file.name,
                size: file.size,
                creationDate: creationDate,
                type: file.type,
                occurrenceKey: occurrenceKey,
            };
            var cancellableFileUpload = {
                mediaFile: mediaFile,
                file: file,
                source: source,
                cancel: function () {
                    // we can't do "cancellableFileUpload.cancel = controller.abort" because will change the "this" mediaClient
                    controller.abort();
                },
            };
            var subscription = sourceFileObservable.subscribe({
                next: function (state) {
                    if (state.status === 'uploading') {
                        _this.onFileProgress(cancellableFileUpload, state.progress);
                    }
                    if (state.status === 'processing') {
                        subscription.unsubscribe();
                        if (shouldCopyFileToRecents) {
                            mediaClient.emit('file-added', state);
                            globalMediaEventEmitter.emit('file-added', state);
                        }
                        _this.onFileSuccess(cancellableFileUpload, id);
                    }
                },
                error: function (error) {
                    _this.onFileError(mediaFile, 'upload_fail', error);
                },
            });
            _this.cancellableFilesUploads[id] = cancellableFileUpload;
            // Save observable in the cache
            getFileStreamsCache().set(id, sourceFileObservable);
            return cancellableFileUpload;
        });
        var mediaFiles = cancellableFileUploads.map(function (cancellableFileUpload) { return cancellableFileUpload.mediaFile; });
        this.emit('files-added', { files: mediaFiles });
        this.emitPreviews(cancellableFileUploads);
    };
    UploadServiceImpl.prototype.cancel = function (id) {
        var _this = this;
        if (id) {
            var cancellableFileUpload = this.cancellableFilesUploads[id];
            if (cancellableFileUpload && cancellableFileUpload.cancel) {
                cancellableFileUpload.cancel();
            }
        }
        else {
            Object.keys(this.cancellableFilesUploads).forEach(function (key) {
                var cancellableFileUpload = _this.cancellableFilesUploads[key];
                if (cancellableFileUpload.cancel) {
                    cancellableFileUpload.cancel();
                }
            });
        }
    };
    UploadServiceImpl.prototype.on = function (event, listener) {
        this.emitter.on(event, listener);
    };
    UploadServiceImpl.prototype.off = function (event, listener) {
        this.emitter.off(event, listener);
    };
    UploadServiceImpl.prototype.emitPreviews = function (cancellableFileUploads) {
        var _this = this;
        cancellableFileUploads.forEach(function (cancellableFileUpload) {
            var file = cancellableFileUpload.file, mediaFile = cancellableFileUpload.mediaFile, source = cancellableFileUpload.source;
            var mediaType = _this.getMediaTypeFromFile(file);
            if (mediaType === 'image') {
                getPreviewFromImage(file, source === LocalFileSource.PastedScreenshot
                    ? window.devicePixelRatio
                    : undefined).then(function (preview) {
                    _this.emit('file-preview-update', {
                        file: mediaFile,
                        preview: preview,
                    });
                });
            }
            else {
                getPreviewFromBlob(file, mediaType).then(function (preview) {
                    _this.emit('file-preview-update', {
                        file: mediaFile,
                        preview: preview,
                    });
                });
            }
        });
    };
    UploadServiceImpl.prototype.getMediaTypeFromFile = function (file) {
        var type = file.type;
        return getMediaTypeFromMimeType(type);
    };
    UploadServiceImpl.prototype.releaseCancellableFile = function (mediaFile) {
        delete this.cancellableFilesUploads[mediaFile.id];
    };
    // This method copies the file from the "tenant collection" to the "user collection" (recents).
    // that means we need "tenant auth" as input and "user auth" as output
    UploadServiceImpl.prototype.copyFileToUsersCollection = function (sourceFileId) {
        var _a = this, shouldCopyFileToRecents = _a.shouldCopyFileToRecents, userMediaStore = _a.userMediaStore, tenantUploadParams = _a.tenantUploadParams;
        if (!shouldCopyFileToRecents || !userMediaStore) {
            return Promise.resolve();
        }
        var sourceCollection = tenantUploadParams.collection;
        var tenantAuthProvider = this.tenantMediaClient.config.authProvider;
        return tenantAuthProvider({ collectionName: sourceCollection }).then(function (auth) {
            var body = {
                sourceFile: {
                    id: sourceFileId,
                    collection: sourceCollection,
                    owner: __assign({}, mapAuthToSourceFileOwner(auth)),
                },
            };
            var params = {
                collection: RECENTS_COLLECTION,
            };
            return userMediaStore.copyFileWithToken(body, params);
        });
    };
    return UploadServiceImpl;
}());
export { UploadServiceImpl };
//# sourceMappingURL=uploadServiceImpl.js.map