"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_UPLOAD_ERROR = 'FILE_UPLOAD_ERROR';
function isFileUploadErrorAction(action) {
    return action.type === exports.FILE_UPLOAD_ERROR;
}
exports.isFileUploadErrorAction = isFileUploadErrorAction;
function fileUploadError(payload) {
    return {
        type: exports.FILE_UPLOAD_ERROR,
        file: payload.file,
        error: payload.error,
        originalEvent: {
            name: 'upload-error',
            data: payload,
        },
    };
}
exports.fileUploadError = fileUploadError;
//# sourceMappingURL=fileUploadError.js.map