"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fileUploadProgress_1 = require("../actions/fileUploadProgress");
function fileUploadProgress(state, action) {
    if (fileUploadProgress_1.isFileUploadProgressAction(action)) {
        var uploads = tslib_1.__assign({}, state.uploads);
        if (uploads[action.file.id]) {
            uploads[action.file.id].progress = action.progress;
            uploads[action.file.id].events.push(action.originalEvent);
        }
        return tslib_1.__assign(tslib_1.__assign({}, state), { uploads: uploads });
    }
    else {
        return state;
    }
}
exports.default = fileUploadProgress;
//# sourceMappingURL=fileUploadProgress.js.map