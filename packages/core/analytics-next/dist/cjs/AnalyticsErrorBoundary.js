"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var withAnalyticsEvents_1 = tslib_1.__importDefault(require("./withAnalyticsEvents"));
var AnalyticsContext_1 = tslib_1.__importDefault(require("./AnalyticsContext"));
var isObject = function (o) {
    return typeof o === 'object' && o !== null && !Array.isArray(o);
};
var BaseAnalyticsErrorBoundary = /** @class */ (function (_super) {
    tslib_1.__extends(BaseAnalyticsErrorBoundary, _super);
    function BaseAnalyticsErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAnalytics = function (analyticsErrorPayload) {
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, channel = _a.channel, data = _a.data;
            createAnalyticsEvent({
                action: 'UnhandledError',
                eventType: 'ui',
                attributes: tslib_1.__assign(tslib_1.__assign({ browserInfo: window && window.navigator && window.navigator.userAgent
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
        return react_1.default.createElement(AnalyticsContext_1.default, { data: data }, children);
    };
    return BaseAnalyticsErrorBoundary;
}(react_1.Component));
exports.BaseAnalyticsErrorBoundary = BaseAnalyticsErrorBoundary;
var AnalyticsErrorBoundary = withAnalyticsEvents_1.default()(BaseAnalyticsErrorBoundary);
exports.default = AnalyticsErrorBoundary;
//# sourceMappingURL=AnalyticsErrorBoundary.js.map