"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var version_json_1 = require("../version.json");
exports.ELEMENTS_CHANNEL = 'fabric-elements';
exports.createStatusAnalyticsAndFire = function (createAnalyticsEvent) { return function (payload) {
    var statusPayload = tslib_1.__assign(tslib_1.__assign({}, payload), { eventType: 'ui' });
    if (!statusPayload.attributes) {
        statusPayload.attributes = {};
    }
    statusPayload.attributes.packageName = version_json_1.name;
    statusPayload.attributes.packageVersion = version_json_1.version;
    statusPayload.attributes.componentName = 'status';
    var event = createAnalyticsEvent(statusPayload);
    event.fire(exports.ELEMENTS_CHANNEL);
    return event;
}; };
//# sourceMappingURL=analytics.js.map