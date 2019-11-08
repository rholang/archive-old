"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fileUploadPreviewUpdate_1 = require("../actions/fileUploadPreviewUpdate");
function filePreviewUpdate(state, action) {
    if (fileUploadPreviewUpdate_1.isFileUploadPreviewUpdateAction(action)) {
        // this event is not going to be recorded or sent to main window (you can't pass blobs)
        var uploads = tslib_1.__assign({}, state.uploads);
        if (uploads[action.file.id]) {
            uploads[action.file.id].file.blob = action.preview;
            uploads[action.file.id].events.push(action.originalEvent);
        }
        return tslib_1.__assign(tslib_1.__assign({}, state), { uploads: uploads });
    }
    else {
        return state;
    }
}
exports.default = filePreviewUpdate;
//# sourceMappingURL=filePreviewUpdate.js.map