"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_service_support_1 = require("@atlaskit/util-service-support");
exports.DEFAULT_SHARE_PATH = 'share';
exports.SHARE_CONFIG_PATH = 'share/config';
exports.DEFAULT_SHARE_SERVICE_URL = '/gateway/api';
var ShareServiceClient = /** @class */ (function () {
    function ShareServiceClient(serviceConfig) {
        this.serviceConfig = serviceConfig || {
            url: exports.DEFAULT_SHARE_SERVICE_URL,
        };
    }
    /**
     * To send a POST request to the share endpoint in Share service
     */
    ShareServiceClient.prototype.share = function (content, recipients, metadata, comment) {
        var options = {
            path: exports.DEFAULT_SHARE_PATH,
            requestInit: {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    content: content,
                    recipients: recipients,
                    metadata: metadata,
                    comment: comment,
                }),
            },
        };
        return util_service_support_1.utils.requestService(this.serviceConfig, options);
    };
    ShareServiceClient.prototype.getConfig = function (product, cloudId) {
        var options = {
            path: exports.SHARE_CONFIG_PATH,
            queryParams: { product: product, cloudId: cloudId },
            requestInit: { method: 'get' },
        };
        return util_service_support_1.utils.requestService(this.serviceConfig, options);
    };
    return ShareServiceClient;
}());
exports.ShareServiceClient = ShareServiceClient;
//# sourceMappingURL=ShareServiceClient.js.map