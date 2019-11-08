"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var NotificationIndicator_1 = tslib_1.__importDefault(require("./NotificationIndicator"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var NotificationIndicatorWithAnalytics = analytics_next_1.withAnalyticsEvents()(NotificationIndicator_1.default);
exports.NotificationIndicator = NotificationIndicatorWithAnalytics;
//# sourceMappingURL=index.js.map