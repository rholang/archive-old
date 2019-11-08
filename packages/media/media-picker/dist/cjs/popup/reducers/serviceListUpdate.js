"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var updateServiceList_1 = require("../actions/updateServiceList");
function serviceListUpdate(state, action) {
    if (action.type === updateServiceList_1.UPDATE_SERVICE_LIST) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { accounts: action.accounts });
    }
    else {
        return state;
    }
}
exports.default = serviceListUpdate;
//# sourceMappingURL=serviceListUpdate.js.map