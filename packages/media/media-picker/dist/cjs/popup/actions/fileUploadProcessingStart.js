"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_UPLOAD_PROCESSING_START = 'FILE_UPLOAD_PROCESSING_START';
function isFileUploadProcessingStartAction(action) {
    return action.type === exports.FILE_UPLOAD_PROCESSING_START;
}
exports.isFileUploadProcessingStartAction = isFileUploadProcessingStartAction;
function fileUploadProcessingStart(payload) {
    return {
        type: exports.FILE_UPLOAD_PROCESSING_START,
        file: payload.file,
        originalEvent: {
            name: 'upload-processing',
            data: payload,
        },
    };
}
exports.fileUploadProcessingStart = fileUploadProcessingStart;
//# sourceMappingURL=fileUploadProcessingStart.js.map