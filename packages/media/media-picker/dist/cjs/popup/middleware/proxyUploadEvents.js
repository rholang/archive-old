"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("@atlaskit/media-client/constants");
var uploadHasProxy_1 = require("../tools/uploadHasProxy");
var finalizeUpload_1 = require("../actions/finalizeUpload");
var sendUploadEvent_1 = require("../actions/sendUploadEvent");
exports.proxyUploadEvents = function (store) { return function (next) { return function (action) {
    if ([
        'FILE_PREVIEW_UPDATE',
        'FILE_UPLOAD_PROGRESS',
        'FILE_UPLOAD_PROCESSING_START',
        'FILE_UPLOAD_END',
        'FILE_UPLOAD_ERROR',
    ].indexOf(action.type) > -1) {
        var uploads = store.getState().uploads;
        var file = action.file, originalEvent = action.originalEvent;
        if (file) {
            var upload = uploads[file.id];
            if (upload && upload.proxy && uploadHasProxy_1.uploadHasProxy(upload)) {
                var event_1 = tslib_1.__assign({}, originalEvent);
                upload.proxy.forEach(function (uploadId) {
                    if (event_1.name === 'upload-processing') {
                        var localFile = event_1.data.file;
                        var source = {
                            id: localFile.id,
                            collection: constants_1.RECENTS_COLLECTION,
                        };
                        store.dispatch(finalizeUpload_1.finalizeUpload(localFile, uploadId, source, uploadId));
                    }
                    else if (event_1.name !== 'upload-end') {
                        // TODO: MSW-376 upload-status-update events from the user has a public Id that should be sanitized here.
                        store.dispatch(sendUploadEvent_1.sendUploadEvent({ event: event_1, uploadId: uploadId }));
                    }
                });
            }
        }
    }
    return next(action);
}; }; };
//# sourceMappingURL=proxyUploadEvents.js.map