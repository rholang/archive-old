"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editorShowError_1 = require("../actions/editorShowError");
function editorShowError(state, action) {
    if (editorShowError_1.isEditorShowErrorAction(action)) {
        var editorData = state.editorData;
        var error = action.error;
        return tslib_1.__assign(tslib_1.__assign({}, state), { editorData: tslib_1.__assign(tslib_1.__assign({}, editorData), { error: error }) });
    }
    return state;
}
exports.default = editorShowError;
//# sourceMappingURL=editorShowError.js.map