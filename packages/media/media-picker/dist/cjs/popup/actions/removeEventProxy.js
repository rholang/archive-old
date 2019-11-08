"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REMOVE_EVENT_PROXY = 'REMOVE_EVENT_PROXY';
function isRemoveEventProxyAction(action) {
    return action.type === exports.REMOVE_EVENT_PROXY;
}
exports.isRemoveEventProxyAction = isRemoveEventProxyAction;
function removeEventProxy(payload) {
    return {
        type: exports.REMOVE_EVENT_PROXY,
        payload: payload,
    };
}
exports.removeEventProxy = removeEventProxy;
//# sourceMappingURL=removeEventProxy.js.map