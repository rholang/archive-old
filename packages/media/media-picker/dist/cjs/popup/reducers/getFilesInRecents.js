"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var getFilesInRecents_1 = require("../actions/getFilesInRecents");
exports.getRecentFilesStarted = function (state, action) {
    if (getFilesInRecents_1.isGetFilesInRecentsAction(action)) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { service: {
                    name: 'upload',
                    accountId: '',
                }, path: [], hasError: false }) });
    }
    else {
        return state;
    }
};
exports.getRecentFilesFullfilled = function (state, action) {
    if (getFilesInRecents_1.isGetFilesInRecentsFullfilledAction(action)) {
        var items = action.items;
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { isLoading: false }), recents: {
                items: items,
            } });
    }
    return state;
};
exports.getRecentFilesFailed = function (state, action) {
    if (getFilesInRecents_1.isGetFilesInRecentsFailedAction(action)) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { hasError: true, isLoading: false }) });
    }
    return state;
};
//# sourceMappingURL=getFilesInRecents.js.map