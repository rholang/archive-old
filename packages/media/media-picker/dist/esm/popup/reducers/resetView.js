import { __assign } from "tslib";
import { isResetViewAction } from '../actions/resetView';
var hasEndOrErrorEvent = function (localUpload) {
    return !!localUpload.events.find(function (event) { return event.name === 'upload-end' || event.name === 'upload-error'; });
};
export default function resetView(state, action) {
    if (isResetViewAction(action)) {
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
        return __assign(__assign({}, state), { selectedItems: selectedItems,
            uploads: uploads });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=resetView.js.map