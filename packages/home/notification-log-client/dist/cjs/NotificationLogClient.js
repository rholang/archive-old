"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_service_support_1 = require("@atlaskit/util-service-support");
var version_json_1 = require("./version.json");
exports.DEFAULT_SOURCE = 'atlaskitNotificationLogClient';
var NotificationLogClient = /** @class */ (function () {
    function NotificationLogClient(baseUrl, cloudId, source) {
        if (source === void 0) { source = exports.DEFAULT_SOURCE; }
        this.serviceConfig = { url: baseUrl };
        this.cloudId = cloudId;
        this.source = source;
    }
    NotificationLogClient.prototype.countUnseenNotifications = function (options) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mergedOptions;
            return tslib_1.__generator(this, function (_a) {
                mergedOptions = tslib_1.__assign(tslib_1.__assign({ path: 'api/2/notifications/count/unseen' }, options), { queryParams: tslib_1.__assign({ cloudId: this.cloudId, source: this.source }, (options.queryParams || {})), requestInit: tslib_1.__assign({ mode: 'cors', headers: {
                            'x-app-version': version_json_1.version + "-" + exports.DEFAULT_SOURCE,
                        } }, (options.requestInit || {})) });
                return [2 /*return*/, util_service_support_1.utils.requestService(this.serviceConfig, mergedOptions)];
            });
        });
    };
    return NotificationLogClient;
}());
exports.default = NotificationLogClient;
//# sourceMappingURL=NotificationLogClient.js.map