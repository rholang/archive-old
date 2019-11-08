"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_ACCOUNT = 'CHANGE_ACCOUNT';
function isChangeAccountAction(action) {
    return action.type === exports.CHANGE_ACCOUNT;
}
exports.isChangeAccountAction = isChangeAccountAction;
function changeAccount(serviceName, accountId) {
    return {
        type: exports.CHANGE_ACCOUNT,
        serviceName: serviceName,
        accountId: accountId,
    };
}
exports.changeAccount = changeAccount;
//# sourceMappingURL=changeAccount.js.map