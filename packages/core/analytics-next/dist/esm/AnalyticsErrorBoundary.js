import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import withAnalyticsEvents from './withAnalyticsEvents';
import AnalyticsContext from './AnalyticsContext';
var isObject = function (o) {
    return typeof o === 'object' && o !== null && !Array.isArray(o);
};
var BaseAnalyticsErrorBoundary = /** @class */ (function (_super) {
    __extends(BaseAnalyticsErrorBoundary, _super);
    function BaseAnalyticsErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAnalytics = function (analyticsErrorPayload) {
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, channel = _a.channel, data = _a.data;
            createAnalyticsEvent({
                action: 'UnhandledError',
                eventType: 'ui',
                attributes: __assign(__assign({ browserInfo: window && window.navigator && window.navigator.userAgent
                        ? window.navigator.userAgent
                        : 'unknown' }, data), (isObject(analyticsErrorPayload) ? analyticsErrorPayload : {})),
            }).fire(channel);
        };
        return _this;
    }
    BaseAnalyticsErrorBoundary.prototype.componentDidCatch = function (error, info) {
        var payload = {
            error: error,
            info: info,
        };
        this.fireAnalytics(payload);
    };
    BaseAnalyticsErrorBoundary.prototype.render = function () {
        var _a = this.props, data = _a.data, children = _a.children;
        return React.createElement(AnalyticsContext, { data: data }, children);
    };
    return BaseAnalyticsErrorBoundary;
}(Component));
export { BaseAnalyticsErrorBoundary };
var AnalyticsErrorBoundary = withAnalyticsEvents()(BaseAnalyticsErrorBoundary);
export default AnalyticsErrorBoundary;
//# sourceMappingURL=AnalyticsErrorBoundary.js.map