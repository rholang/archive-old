"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var getPreview_1 = require("../actions/getPreview");
var sendUploadEvent_1 = require("../actions/sendUploadEvent");
var preview_1 = require("../../domain/preview");
function default_1() {
    return function (store) { return function (next) { return function (action) {
        if (getPreview_1.isGetPreviewAction(action)) {
            getPreview(store, action);
        }
        return next(action);
    }; }; };
}
exports.default = default_1;
var dispatchPreviewUpdate = function (store, _a, preview) {
    var uploadId = _a.uploadId, file = _a.file;
    store.dispatch(sendUploadEvent_1.sendUploadEvent({
        event: {
            name: 'upload-preview-update',
            data: {
                file: file,
                preview: preview,
            },
        },
        uploadId: uploadId,
    }));
};
function getPreview(store, action) {
    var file = action.file, collection = action.collection;
    var userMediaClient = store.getState().userMediaClient;
    var subscription = userMediaClient.file
        .getFileState(file.id, { collectionName: collection })
        .subscribe({
        next: function (state) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var mediaType, metadata, preview, blob, _a, preview;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (state.status === 'error') {
                                return [2 /*return*/];
                            }
                            mediaType = state.mediaType;
                            // We need to wait for the next tick since rxjs might call "next" before returning from "subscribe"
                            window.setTimeout(function () { return subscription.unsubscribe(); });
                            if (!(mediaType === 'image' || mediaType === 'video')) return [3 /*break*/, 2];
                            return [4 /*yield*/, userMediaClient.getImageMetadata(file.id, {
                                    collection: collection,
                                })];
                        case 1:
                            metadata = _b.sent();
                            preview = preview_1.getPreviewFromMetadata(metadata);
                            dispatchPreviewUpdate(store, action, preview);
                            return [3 /*break*/, 5];
                        case 2:
                            _a = state.preview;
                            if (!_a) return [3 /*break*/, 4];
                            return [4 /*yield*/, state.preview];
                        case 3:
                            _a = (_b.sent());
                            _b.label = 4;
                        case 4:
                            blob = _a;
                            preview = {
                                file: state.preview && blob instanceof Blob ? blob : undefined,
                            };
                            dispatchPreviewUpdate(store, action, preview);
                            _b.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        },
    });
}
exports.getPreview = getPreview;
//# sourceMappingURL=getPreview.js.map