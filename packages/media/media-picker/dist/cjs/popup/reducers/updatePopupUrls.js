"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var updatePopupUrls_1 = require("../actions/updatePopupUrls");
function updatePopupUrls(state, action) {
    if (updatePopupUrls_1.isUpdatePopupUrlsAction(action)) {
        var urls = action.urls;
        return tslib_1.__assign(tslib_1.__assign({}, state), urls);
    }
    return state;
}
exports.default = updatePopupUrls;
//# sourceMappingURL=updatePopupUrls.js.map