"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CANCEL_UPLOAD = 'CANCEL_UPLOAD';
function isCancelUploadAction(action) {
    return action.type === exports.CANCEL_UPLOAD;
}
exports.isCancelUploadAction = isCancelUploadAction;
function cancelUpload(payload) {
    return {
        type: exports.CANCEL_UPLOAD,
        payload: payload,
    };
}
exports.cancelUpload = cancelUpload;
//# sourceMappingURL=cancelUpload.js.map