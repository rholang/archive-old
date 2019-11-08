import { __assign } from "tslib";
import { isGetFilesInRecentsAction, isGetFilesInRecentsFullfilledAction, isGetFilesInRecentsFailedAction, } from '../actions/getFilesInRecents';
export var getRecentFilesStarted = function (state, action) {
    if (isGetFilesInRecentsAction(action)) {
        return __assign(__assign({}, state), { view: __assign(__assign({}, state.view), { service: {
                    name: 'upload',
                    accountId: '',
                }, path: [], hasError: false }) });
    }
    else {
        return state;
    }
};
export var getRecentFilesFullfilled = function (state, action) {
    if (isGetFilesInRecentsFullfilledAction(action)) {
        var items = action.items;
        return __assign(__assign({}, state), { view: __assign(__assign({}, state.view), { isLoading: false }), recents: {
                items: items,
            } });
    }
    return state;
};
export var getRecentFilesFailed = function (state, action) {
    if (isGetFilesInRecentsFailedAction(action)) {
        return __assign(__assign({}, state), { view: __assign(__assign({}, state.view), { hasError: true, isLoading: false }) });
    }
    return state;
};
//# sourceMappingURL=getFilesInRecents.js.map