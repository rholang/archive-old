"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var unlinkCloudAccount_1 = require("../actions/unlinkCloudAccount");
function default_1(state, action) {
    if (action.type === unlinkCloudAccount_1.UNLINK_ACCOUNT) {
        var accounts = state.accounts.then(function (accounts) {
            return accounts.slice().filter(function (account) { return account.id !== action.account.id; });
        });
        return tslib_1.__assign(tslib_1.__assign({}, state), { accounts: accounts });
    }
    else {
        return state;
    }
}
exports.default = default_1;
//# sourceMappingURL=accountUnlink.js.map