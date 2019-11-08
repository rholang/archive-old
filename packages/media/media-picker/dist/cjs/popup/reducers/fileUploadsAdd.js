"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fileUploadsStart_1 = require("../actions/fileUploadsStart");
function fileUploadsAdd(state, action) {
    if (fileUploadsStart_1.isFileUploadsStartAction(action)) {
        var uploads = state.uploads, selectedItems = state.selectedItems, lastUploadIndex = state.lastUploadIndex;
        var files = action.files;
        var newUploads_1 = {};
        var newLastUploadIndex_1 = lastUploadIndex;
        files.forEach(function (_a) {
            var id = _a.id, name = _a.name, type = _a.type, size = _a.size, occurrenceKey = _a.occurrenceKey;
            newUploads_1[id] = {
                file: {
                    metadata: {
                        id: id,
                        name: name,
                        mimeType: type,
                        size: size,
                        occurrenceKey: occurrenceKey,
                    },
                },
                timeStarted: Date.now(),
                progress: 0,
                events: [],
                index: newLastUploadIndex_1++,
            };
        });
        var newSelectedItems = files.map(function (_a) {
            var id = _a.id, name = _a.name, type = _a.type, size = _a.size, occurrenceKey = _a.occurrenceKey;
            return ({
                date: 0,
                id: id,
                occurrenceKey: occurrenceKey,
                mimeType: type,
                name: name,
                parentId: '',
                size: size,
                serviceName: 'upload',
            });
        });
        return tslib_1.__assign(tslib_1.__assign({}, state), { uploads: tslib_1.__assign(tslib_1.__assign({}, uploads), newUploads_1), selectedItems: tslib_1.__spread(selectedItems, newSelectedItems), lastUploadIndex: newLastUploadIndex_1 });
    }
    else {
        return state;
    }
}
exports.default = fileUploadsAdd;
//# sourceMappingURL=fileUploadsAdd.js.map