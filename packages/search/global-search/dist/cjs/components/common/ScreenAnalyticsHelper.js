"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var AnalyticsEventFiredOnMount_1 = tslib_1.__importDefault(require("../analytics/AnalyticsEventFiredOnMount"));
var analytics_util_1 = require("../../util/analytics-util");
var getAnalyticsComponent = function (subscreen, screenCounter, searchSessionId, analyticsKey, referralContextIdentifiers) {
    return screenCounter ? (React.createElement(AnalyticsEventFiredOnMount_1.default, { key: analyticsKey, onEventFired: function () { return screenCounter.increment(); }, payloadProvider: function () {
            return analytics_util_1.buildScreenEvent(subscreen, screenCounter.getCount(), searchSessionId, referralContextIdentifiers);
        } })) : null;
};
exports.PreQueryAnalyticsComponent = function (_a) {
    var screenCounter = _a.screenCounter, searchSessionId = _a.searchSessionId, referralContextIdentifiers = _a.referralContextIdentifiers;
    return getAnalyticsComponent(analytics_util_1.Screen.PRE_QUERY, screenCounter, searchSessionId, 'preQueryScreenEvent', referralContextIdentifiers);
};
exports.PostQueryAnalyticsComponent = function (_a) {
    var screenCounter = _a.screenCounter, searchSessionId = _a.searchSessionId, referralContextIdentifiers = _a.referralContextIdentifiers;
    return getAnalyticsComponent(analytics_util_1.Screen.POST_QUERY, screenCounter, searchSessionId, 'postQueryScreenEvent', referralContextIdentifiers);
};
//# sourceMappingURL=ScreenAnalyticsHelper.js.map