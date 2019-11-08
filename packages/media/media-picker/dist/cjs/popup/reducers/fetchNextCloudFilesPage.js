"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fetchNextCloudFilesPage_1 = require("../actions/fetchNextCloudFilesPage");
function fetchNextPage(state, action) {
    if (fetchNextCloudFilesPage_1.isFetchNextCloudFilesPageAction(action)) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { isLoading: true, currentCursor: action.nextCursor, nextCursor: undefined }) });
    }
    else {
        return state;
    }
}
exports.default = fetchNextPage;
//# sourceMappingURL=fetchNextCloudFilesPage.js.map