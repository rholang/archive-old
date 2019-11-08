"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var removeFileFromRecents_1 = require("../actions/removeFileFromRecents");
function removeFileFromRecents(state, action) {
    if (!removeFileFromRecents_1.isRemoveFileFromRecentsAction(action)) {
        return state;
    }
    var selectedItems = state.selectedItems.filter(function (item) { return item.id !== action.id; });
    var uploads = Object.keys(state.uploads)
        .filter(function (uploadId) { return state.uploads[uploadId].file.metadata.id !== action.id; })
        .reduce(function (uploadObject, uploadId) {
        var _a;
        return (tslib_1.__assign(tslib_1.__assign({}, uploadObject), (_a = {}, _a[uploadId] = state.uploads[uploadId], _a)));
    }, {});
    return tslib_1.__assign(tslib_1.__assign({}, state), { selectedItems: selectedItems,
        uploads: uploads });
}
exports.default = removeFileFromRecents;
//# sourceMappingURL=removeFileFromRecents.js.map