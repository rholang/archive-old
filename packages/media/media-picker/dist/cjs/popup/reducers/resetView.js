"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var resetView_1 = require("../actions/resetView");
var hasEndOrErrorEvent = function (localUpload) {
    return !!localUpload.events.find(function (event) { return event.name === 'upload-end' || event.name === 'upload-error'; });
};
function resetView(state, action) {
    if (resetView_1.isResetViewAction(action)) {
        var selectedItems = [];
        var oldUploads_1 = state.uploads;
        var uploads = Object.keys(oldUploads_1)
            .filter(function (uploadId) {
            // remove files that has finished uploading and processing
            return !hasEndOrErrorEvent(oldUploads_1[uploadId]);
        })
            .reduce(function (uploads, fileIdToKeep) {
            uploads[fileIdToKeep] = oldUploads_1[fileIdToKeep];
            return uploads;
        }, {});
        return tslib_1.__assign(tslib_1.__assign({}, state), { selectedItems: selectedItems,
            uploads: uploads });
    }
    else {
        return state;
    }
}
exports.default = resetView;
//# sourceMappingURL=resetView.js.map