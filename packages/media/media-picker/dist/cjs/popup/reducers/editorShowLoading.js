"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editorShowLoading_1 = require("../actions/editorShowLoading");
function editorShowLoading(state, action) {
    if (action.type === editorShowLoading_1.EDITOR_SHOW_LOADING) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { editorData: { originalFile: action.originalFile } });
    }
    return state;
}
exports.default = editorShowLoading;
//# sourceMappingURL=editorShowLoading.js.map