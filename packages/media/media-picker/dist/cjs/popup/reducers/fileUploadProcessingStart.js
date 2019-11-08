"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fileUploadProcessingStart_1 = require("../actions/fileUploadProcessingStart");
function fileUploadProcessingStart(state, action) {
    if (fileUploadProcessingStart_1.isFileUploadProcessingStartAction(action)) {
        var uploads = tslib_1.__assign({}, state.uploads);
        if (uploads[action.file.id]) {
            uploads[action.file.id].progress = 1; // no specific UI, just setting 100% in progress
            uploads[action.file.id].events.push(action.originalEvent);
        }
        return tslib_1.__assign(tslib_1.__assign({}, state), { uploads: uploads });
    }
    else {
        return state;
    }
}
exports.default = fileUploadProcessingStart;
//# sourceMappingURL=fileUploadProcessingStart.js.map