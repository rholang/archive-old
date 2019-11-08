"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var actions_1 = require("../actions");
function deselectItem(state, action) {
    if (actions_1.isDeslectItemAction(action)) {
        var selectedItems = state.selectedItems;
        if (selectedItems) {
            return tslib_1.__assign(tslib_1.__assign({}, state), { selectedItems: selectedItems.filter(function (item) { return item.id !== action.id; }) });
        }
    }
    return state;
}
exports.default = deselectItem;
//# sourceMappingURL=deselectItem.js.map