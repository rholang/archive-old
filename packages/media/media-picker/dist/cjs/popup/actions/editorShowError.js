"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDITOR_SHOW_ERROR = 'EDITOR_SHOW_ERROR';
function isEditorShowErrorAction(action) {
    return action.type === exports.EDITOR_SHOW_ERROR;
}
exports.isEditorShowErrorAction = isEditorShowErrorAction;
function editorShowError(message, retryHandler) {
    return {
        type: exports.EDITOR_SHOW_ERROR,
        error: {
            message: message,
            retryHandler: retryHandler,
        },
    };
}
exports.editorShowError = editorShowError;
//# sourceMappingURL=editorShowError.js.map