"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REMOTE_UPLOAD_START = 'REMOTE_UPLOAD_START';
function remoteUploadStart(uploadId) {
    return {
        type: exports.REMOTE_UPLOAD_START,
        uploadId: uploadId,
    };
}
exports.remoteUploadStart = remoteUploadStart;
//# sourceMappingURL=remoteUploadStart.js.map