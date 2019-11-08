"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cancelUpload_1 = require("../actions/cancelUpload");
var removeEventProxy_1 = require("../actions/removeEventProxy");
exports.default = (function (store) { return function (next) { return function (action) {
    if (cancelUpload_1.isCancelUploadAction(action)) {
        var tenantUploadId_1 = action.payload.tenantUploadId;
        var _a = store.getState(), uploads_1 = _a.uploads, onCancelUpload_1 = _a.onCancelUpload;
        var shouldRemoveEventProxy_1 = function (proxy) {
            return proxy.some(function (proxyId) { return proxyId === tenantUploadId_1; });
        };
        Object.keys(uploads_1)
            .map(function (uploadId) {
            var upload = uploads_1[uploadId];
            var proxy = (upload && upload.proxy) || [];
            return {
                uploadId: uploadId,
                proxy: proxy,
            };
        })
            .filter(function (_a) {
            var proxy = _a.proxy;
            return shouldRemoveEventProxy_1(proxy);
        })
            .forEach(function (_a) {
            var uploadId = _a.uploadId, proxy = _a.proxy;
            store.dispatch(removeEventProxy_1.removeEventProxy({
                uploadId: uploadId,
                proxyId: tenantUploadId_1,
            }));
            if (proxy.length === 1) {
                onCancelUpload_1(uploadId);
            }
        });
    }
    return next(action);
}; }; });
//# sourceMappingURL=cancelUpload.js.map