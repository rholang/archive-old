"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var actions_1 = require("../actions");
function editorClose(state, action) {
    if (actions_1.isEditorCloseAction(action)) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { editorData: undefined });
    }
    return state;
}
exports.default = editorClose;
//# sourceMappingURL=editorClose.js.map