"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fileClick_1 = require("../actions/fileClick");
function fileClick(state, action) {
    if (fileClick_1.isFileClickAction(action)) {
        var file_1 = action.file;
        var selectedItems = state.selectedItems, _a = state.config.singleSelect, singleSelect = _a === void 0 ? false : _a;
        var itemFound = selectedItems.some(function (item) { return item.id === file_1.id; });
        if (itemFound) {
            return tslib_1.__assign(tslib_1.__assign({}, state), { selectedItems: selectedItems.filter(function (item) { return item.id !== file_1.id; }) });
        }
        else if (singleSelect) {
            return tslib_1.__assign(tslib_1.__assign({}, state), { selectedItems: [file_1] });
        }
        else {
            return tslib_1.__assign(tslib_1.__assign({}, state), { selectedItems: tslib_1.__spread(selectedItems, [file_1]) });
        }
    }
    else {
        return state;
    }
}
exports.default = fileClick;
//# sourceMappingURL=fileClick.js.map