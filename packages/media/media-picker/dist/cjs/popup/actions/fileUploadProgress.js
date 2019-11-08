"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_UPLOAD_PROGRESS = 'FILE_UPLOAD_PROGRESS';
function isFileUploadProgressAction(action) {
    return action.type === exports.FILE_UPLOAD_PROGRESS;
}
exports.isFileUploadProgressAction = isFileUploadProgressAction;
function fileUploadProgress(payload) {
    return {
        type: exports.FILE_UPLOAD_PROGRESS,
        file: payload.file,
        progress: payload.progress.portion,
        originalEvent: {
            name: 'upload-status-update',
            data: payload,
        },
    };
}
exports.fileUploadProgress = fileUploadProgress;
//# sourceMappingURL=fileUploadProgress.js.map