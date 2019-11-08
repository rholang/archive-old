"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_UPLOAD_END = 'FILE_UPLOAD_END';
function isFileUploadEndAction(action) {
    return action.type === exports.FILE_UPLOAD_END;
}
exports.isFileUploadEndAction = isFileUploadEndAction;
function fileUploadEnd(payload) {
    return {
        type: exports.FILE_UPLOAD_END,
        file: payload.file,
        originalEvent: {
            name: 'upload-end',
            data: payload,
        },
    };
}
exports.fileUploadEnd = fileUploadEnd;
//# sourceMappingURL=fileUploadEnd.js.map