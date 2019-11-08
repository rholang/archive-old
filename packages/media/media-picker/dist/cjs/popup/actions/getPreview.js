"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PREVIEW = 'GET_PREVIEW';
function isGetPreviewAction(action) {
    return action.type === exports.GET_PREVIEW;
}
exports.isGetPreviewAction = isGetPreviewAction;
function getPreview(tenantFileId, file, collection) {
    return {
        type: exports.GET_PREVIEW,
        uploadId: tenantFileId,
        file: file,
        collection: collection,
    };
}
exports.getPreview = getPreview;
//# sourceMappingURL=getPreview.js.map