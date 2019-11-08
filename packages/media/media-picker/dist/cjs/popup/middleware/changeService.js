"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var changeService_1 = require("../actions/changeService");
var changeAccount_1 = require("../actions/changeAccount");
var getConnectedRemoteAccounts_1 = require("../actions/getConnectedRemoteAccounts");
var loggableServices = ['google', 'dropbox'];
exports.changeService = function (store) { return function (next) { return function (action) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var serviceName, firstAccount, accountId;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!changeService_1.isChangeServiceAction(action)) return [3 /*break*/, 2];
                serviceName = action.serviceName;
                if (loggableServices.indexOf(serviceName) !== -1) {
                    store.dispatch(getConnectedRemoteAccounts_1.getConnectedRemoteAccounts());
                }
                return [4 /*yield*/, store.getState().accounts];
            case 1:
                firstAccount = (_a.sent()).find(function (account) { return account.type === action.serviceName; });
                accountId = firstAccount ? firstAccount.id : '';
                store.dispatch(changeAccount_1.changeAccount(serviceName, accountId));
                _a.label = 2;
            case 2: return [2 /*return*/, next(action)];
        }
    });
}); }; }; };
//# sourceMappingURL=changeService.js.map