"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var x = tslib_1.__importStar(require("@atlaskit/analytics-next"));
var version_json_1 = require("./version.json");
exports.withAnalyticsEvents = x.withAnalyticsEvents;
exports.withAnalyticsContext = x.withAnalyticsContext;
exports.createAndFire = x.createAndFireEvent('atlaskit');
exports.defaultAnalyticsAttributes = {
    componentName: 'help',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
};
//# sourceMappingURL=analytics.js.map