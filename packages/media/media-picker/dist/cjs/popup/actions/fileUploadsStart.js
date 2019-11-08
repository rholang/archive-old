"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_UPLOADS_START = 'FILE_UPLOADS_START';
function isFileUploadsStartAction(action) {
    return action.type === exports.FILE_UPLOADS_START;
}
exports.isFileUploadsStartAction = isFileUploadsStartAction;
function fileUploadsStart(payload) {
    return {
        type: exports.FILE_UPLOADS_START,
        files: payload.files,
    };
}
exports.fileUploadsStart = fileUploadsStart;
//# sourceMappingURL=fileUploadsStart.js.map