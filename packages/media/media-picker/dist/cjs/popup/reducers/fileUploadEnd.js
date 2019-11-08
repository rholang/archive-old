"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fileUploadEnd_1 = require("../actions/fileUploadEnd");
function fileUploadEnd(state, action) {
    if (fileUploadEnd_1.isFileUploadEndAction(action)) {
        var uploads = tslib_1.__assign({}, state.uploads);
        if (uploads[action.file.id]) {
            uploads[action.file.id].progress = null; // clearing progress will remove progress UI
            uploads[action.file.id].events.push(action.originalEvent);
        }
        return tslib_1.__assign(tslib_1.__assign({}, state), { uploads: uploads });
    }
    else {
        return state;
    }
}
exports.default = fileUploadEnd;
//# sourceMappingURL=fileUploadEnd.js.map