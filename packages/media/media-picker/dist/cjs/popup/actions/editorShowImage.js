"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDITOR_SHOW_IMAGE = 'EDITOR_SHOW_IMAGE';
function isEditorShowImageAction(action) {
    return action.type === exports.EDITOR_SHOW_IMAGE;
}
exports.isEditorShowImageAction = isEditorShowImageAction;
function editorShowImage(imageUrl, originalFile) {
    return {
        type: exports.EDITOR_SHOW_IMAGE,
        imageUrl: imageUrl,
        originalFile: originalFile,
    };
}
exports.editorShowImage = editorShowImage;
//# sourceMappingURL=editorShowImage.js.map