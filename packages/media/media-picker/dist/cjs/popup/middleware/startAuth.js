"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var updateServiceList_1 = require("../actions/updateServiceList");
var startAuth_1 = require("../actions/startAuth");
var changeAccount_1 = require("../actions/changeAccount");
exports.startCloudAccountOAuthFlow = function (fetcher, cloudService) { return function (store) { return function (next) { return function (action) {
    if (action.type === startAuth_1.START_AUTH) {
        var _a = store.getState(), redirectUrl = _a.redirectUrl, userMediaClient_1 = _a.userMediaClient;
        var serviceName_1 = action.serviceName;
        var accounts = cloudService
            .startAuth(redirectUrl, serviceName_1)
            .then(function () { return userMediaClient_1.config.authProvider(); })
            .then(function (auth) { return fetcher.getServiceList(auth); });
        store.dispatch(updateServiceList_1.updateServiceList(accounts));
        accounts.then(function (accounts) {
            var selectedAccount = accounts.find(function (account) { return account.type === serviceName_1; });
            if (selectedAccount) {
                store.dispatch(changeAccount_1.changeAccount(serviceName_1, selectedAccount.id));
            }
        });
    }
    return next(action);
}; }; }; };
//# sourceMappingURL=startAuth.js.map