"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_PREVIEW_UPDATE = 'FILE_PREVIEW_UPDATE';
function isFileUploadPreviewUpdateAction(action) {
    return action.type === exports.FILE_PREVIEW_UPDATE;
}
exports.isFileUploadPreviewUpdateAction = isFileUploadPreviewUpdateAction;
function fileUploadPreviewUpdate(payload) {
    return {
        type: exports.FILE_PREVIEW_UPDATE,
        file: payload.file,
        preview: payload.preview.file,
        originalEvent: {
            name: 'upload-preview-update',
            data: payload,
        },
    };
}
exports.fileUploadPreviewUpdate = fileUploadPreviewUpdate;
//# sourceMappingURL=fileUploadPreviewUpdate.js.map