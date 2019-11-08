"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var changeAccount_1 = require("../actions/changeAccount");
var changeCloudAccountFolder_1 = require("../actions/changeCloudAccountFolder");
var domain_1 = require("../domain");
exports.default = (function (store) { return function (next) { return function (action) {
    if (changeAccount_1.isChangeAccountAction(action)) {
        var serviceName = action.serviceName, accountId = action.accountId;
        if (domain_1.isRemoteCloudAccount(serviceName) && accountId !== '') {
            store.dispatch(changeCloudAccountFolder_1.changeCloudAccountFolder(serviceName, accountId, []));
        }
    }
    return next(action);
}; }; });
//# sourceMappingURL=changeAccount.js.map