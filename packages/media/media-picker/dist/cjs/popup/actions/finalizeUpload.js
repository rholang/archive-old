"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FINALIZE_UPLOAD = 'FINALIZE_UPLOAD';
function isFinalizeUploadAction(action) {
    return action.type === exports.FINALIZE_UPLOAD;
}
exports.isFinalizeUploadAction = isFinalizeUploadAction;
function finalizeUpload(file, uploadId, source, replaceFileId) {
    return {
        type: exports.FINALIZE_UPLOAD,
        file: file,
        uploadId: uploadId,
        source: source,
        replaceFileId: replaceFileId,
    };
}
exports.finalizeUpload = finalizeUpload;
//# sourceMappingURL=finalizeUpload.js.map