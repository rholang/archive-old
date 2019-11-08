"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var changeAccount_1 = require("../actions/changeAccount");
function accountChange(state, action) {
    if (changeAccount_1.isChangeAccountAction(action)) {
        var accountId = action.accountId, serviceName = action.serviceName;
        // remove loading state from view, as we only reload the recents collection when the popup is shown
        var isLoading = serviceName === 'upload' ? false : state.view.isLoading;
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { isLoading: isLoading, hasError: false, service: {
                    accountId: accountId,
                    name: serviceName,
                }, path: [], items: [] }) });
    }
    else {
        return state;
    }
}
exports.default = accountChange;
//# sourceMappingURL=accountChange.js.map