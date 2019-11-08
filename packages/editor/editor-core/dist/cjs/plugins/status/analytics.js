"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var version_json_1 = require("../../version.json");
exports.FABRIC_CHANNEL = 'fabric-elements';
exports.createStatusAnalyticsAndFire = function (createAnalyticsEvent) { return function (payload) {
    if (createAnalyticsEvent && payload) {
        var statusPayload = tslib_1.__assign(tslib_1.__assign({}, payload), { eventType: 'ui' });
        if (!statusPayload.attributes) {
            statusPayload.attributes = {};
        }
        statusPayload.attributes.packageName = version_json_1.name;
        statusPayload.attributes.packageVersion = version_json_1.version;
        statusPayload.attributes.componentName = 'status';
        createAnalyticsEvent(statusPayload).fire(exports.FABRIC_CHANNEL);
    }
}; };
exports.analyticsState = function (isNew) {
    return isNew ? 'new' : 'update';
};
//# sourceMappingURL=analytics.js.map