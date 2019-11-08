"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_SERVICE = 'SERVICE_CHANGE';
function isChangeServiceAction(action) {
    return action.type === exports.CHANGE_SERVICE;
}
exports.isChangeServiceAction = isChangeServiceAction;
function changeService(serviceName) {
    return {
        type: exports.CHANGE_SERVICE,
        serviceName: serviceName,
    };
}
exports.changeService = changeService;
//# sourceMappingURL=changeService.js.map