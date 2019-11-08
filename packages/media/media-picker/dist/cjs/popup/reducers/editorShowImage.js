"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editorShowImage_1 = require("../actions/editorShowImage");
function editorShowImage(state, action) {
    if (editorShowImage_1.isEditorShowImageAction(action)) {
        var editorData = state.editorData;
        var imageUrl = action.imageUrl;
        var originalFile = action.originalFile || (editorData && editorData.originalFile);
        return tslib_1.__assign(tslib_1.__assign({}, state), { editorData: {
                imageUrl: imageUrl,
                originalFile: originalFile,
            } });
    }
    return state;
}
exports.default = editorShowImage;
//# sourceMappingURL=editorShowImage.js.map