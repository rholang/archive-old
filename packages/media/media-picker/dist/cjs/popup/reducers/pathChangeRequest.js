"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var changeCloudAccountFolder_1 = require("../actions/changeCloudAccountFolder");
function pathChangeRequest(state, action) {
    if (changeCloudAccountFolder_1.isChangeCloudAccountFolderAction(action)) {
        var view = tslib_1.__assign(tslib_1.__assign({}, state.view), {
            isLoading: true,
            path: action.path,
            currentCursor: undefined,
            nextCursor: undefined,
        });
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: view });
    }
    else {
        return state;
    }
}
exports.default = pathChangeRequest;
//# sourceMappingURL=pathChangeRequest.js.map