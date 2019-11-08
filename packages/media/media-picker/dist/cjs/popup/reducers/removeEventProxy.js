"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var removeEventProxy_1 = require("../actions/removeEventProxy");
function removeEventProxy(state, action) {
    if (removeEventProxy_1.isRemoveEventProxyAction(action)) {
        var _a = action.payload, uploadId = _a.uploadId, proxyId = _a.proxyId;
        var uploads = tslib_1.__assign({}, state.uploads);
        var upload = uploads[uploadId];
        if (upload) {
            var proxy = upload.proxy;
            if (proxy) {
                var pos = proxy.indexOf(proxyId);
                if (pos > -1) {
                    if (proxy.length === 1) {
                        delete uploads[uploadId];
                    }
                    else {
                        proxy.splice(pos, 1);
                    }
                }
            }
        }
        return tslib_1.__assign(tslib_1.__assign({}, state), { uploads: uploads });
    }
    else {
        return state;
    }
}
exports.default = removeEventProxy;
//# sourceMappingURL=removeEventProxy.js.map