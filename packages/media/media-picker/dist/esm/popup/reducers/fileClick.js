import { __assign, __read, __spread } from "tslib";
import { isFileClickAction } from '../actions/fileClick';
export default function fileClick(state, action) {
    if (isFileClickAction(action)) {
        var file_1 = action.file;
        var selectedItems = state.selectedItems, _a = state.config.singleSelect, singleSelect = _a === void 0 ? false : _a;
        var itemFound = selectedItems.some(function (item) { return item.id === file_1.id; });
        if (itemFound) {
            return __assign(__assign({}, state), { selectedItems: selectedItems.filter(function (item) { return item.id !== file_1.id; }) });
        }
        else if (singleSelect) {
            return __assign(__assign({}, state), { selectedItems: [file_1] });
        }
        else {
            return __assign(__assign({}, state), { selectedItems: __spread(selectedItems, [file_1]) });
        }
    }
    else {
        return state;
    }
}
//# sourceMappingURL=fileClick.js.map