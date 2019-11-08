"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fileListUpdate_1 = require("../actions/fileListUpdate");
var pathsEqual_1 = require("../tools/pathsEqual");
function fileListUpdate(state, action) {
    if (action.type === fileListUpdate_1.FILE_LIST_UPDATE) {
        if (pathsEqual_1.pathsEqual(action.path, state.view.path) &&
            action.accountId === state.view.service.accountId &&
            state.view.currentCursor === action.currentCursor) {
            return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { items: action.items, isLoading: false, currentCursor: action.currentCursor, nextCursor: action.nextCursor }) });
        }
    }
    return state;
}
exports.default = fileListUpdate;
//# sourceMappingURL=fileListUpdate.js.map