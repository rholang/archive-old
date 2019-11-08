import { __assign } from "tslib";
import { UNLINK_ACCOUNT, } from '../actions/unlinkCloudAccount';
export default function (state, action) {
    if (action.type === UNLINK_ACCOUNT) {
        var accounts = state.accounts.then(function (accounts) {
            return accounts.slice().filter(function (account) { return account.id !== action.account.id; });
        });
        return __assign(__assign({}, state), { accounts: accounts });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=accountUnlink.js.map