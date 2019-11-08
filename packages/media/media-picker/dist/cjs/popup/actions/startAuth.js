"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.START_AUTH = 'AUTH_START';
function isStartAuthAction(action) {
    return action.type === exports.START_AUTH;
}
exports.isStartAuthAction = isStartAuthAction;
function startAuth(serviceName) {
    return {
        type: exports.START_AUTH,
        serviceName: serviceName,
    };
}
exports.startAuth = startAuth;
//# sourceMappingURL=startAuth.js.map