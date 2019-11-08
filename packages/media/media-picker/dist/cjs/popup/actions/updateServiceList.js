"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_SERVICE_LIST = 'SERVICE_LIST_UPDATE';
function updateServiceList(accounts) {
    return {
        type: exports.UPDATE_SERVICE_LIST,
        accounts: accounts,
    };
}
exports.updateServiceList = updateServiceList;
//# sourceMappingURL=updateServiceList.js.map