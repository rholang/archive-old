"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDITOR_CLOSE = 'EDITOR_CLOSE';
function isEditorCloseAction(action) {
    return action.type === exports.EDITOR_CLOSE;
}
exports.isEditorCloseAction = isEditorCloseAction;
function editorClose(selection) {
    return {
        type: exports.EDITOR_CLOSE,
        selection: selection,
    };
}
exports.editorClose = editorClose;
//# sourceMappingURL=editorClose.js.map