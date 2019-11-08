"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var lodash_throttle_1 = tslib_1.__importDefault(require("lodash.throttle"));
var prefetch_1 = require("../prefetch");
var performance_now_1 = tslib_1.__importDefault(require("../utils/performance-now"));
var analytics_1 = require("../utils/analytics");
var package_context_1 = tslib_1.__importDefault(require("../utils/package-context"));
var THROTTLE_EXPIRES = 60 * 1000; // 60 seconds
var THROTTLE_OPTIONS = {
    leading: true,
    trailing: false,
};
var TRIGGER_CONTEXT = tslib_1.__assign({ componentName: analytics_1.TRIGGER_COMPONENT }, package_context_1.default);
var PrefetchTrigger = /** @class */ (function (_super) {
    tslib_1.__extends(PrefetchTrigger, _super);
    function PrefetchTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireOperationalEvent = function (payload) {
            if (_this.props.createAnalyticsEvent) {
                _this.props
                    .createAnalyticsEvent(tslib_1.__assign({ eventType: analytics_1.OPERATIONAL_EVENT_TYPE, actionSubject: analytics_1.TRIGGER_SUBJECT }, payload))
                    .fire(analytics_1.NAVIGATION_CHANNEL);
            }
        };
        _this.triggerPrefetch = lodash_throttle_1.default(function () {
            prefetch_1.prefetch(_this.props);
            _this.fireOperationalEvent({
                action: 'triggered',
            });
        }, THROTTLE_EXPIRES, THROTTLE_OPTIONS);
        _this.handleMouseEnter = function () {
            _this.triggerPrefetch();
            _this.lastEnteredAt = performance_now_1.default();
        };
        _this.handleMouseClick = function () {
            if (_this.lastEnteredAt) {
                var hoverToClick = Math.round(performance_now_1.default() - _this.lastEnteredAt);
                _this.fireOperationalEvent({
                    action: 'clicked',
                    attributes: { hoverToClick: hoverToClick },
                });
            }
        };
        return _this;
    }
    PrefetchTrigger.prototype.render = function () {
        var _a = this.props, children = _a.children, _b = _a.Container, Container = _b === void 0 ? 'div' : _b;
        return (React.createElement(Container, { onFocus: this.handleMouseEnter, onMouseEnter: this.handleMouseEnter, onClick: this.handleMouseClick }, children));
    };
    return PrefetchTrigger;
}(React.Component));
var PrefetchTriggerWithEvents = analytics_1.withAnalyticsEvents()(PrefetchTrigger);
exports.default = (function (props) { return (React.createElement(analytics_1.NavigationAnalyticsContext, { data: TRIGGER_CONTEXT },
    React.createElement(PrefetchTriggerWithEvents, tslib_1.__assign({}, props)))); });
//# sourceMappingURL=prefetch-trigger.js.map