import { __assign, __extends } from "tslib";
import * as React from 'react';
import throttle from 'lodash.throttle';
import { prefetch } from '../prefetch';
import now from '../utils/performance-now';
import { NAVIGATION_CHANNEL, NavigationAnalyticsContext, OPERATIONAL_EVENT_TYPE, TRIGGER_COMPONENT, TRIGGER_SUBJECT, withAnalyticsEvents, } from '../utils/analytics';
import packageContext from '../utils/package-context';
var THROTTLE_EXPIRES = 60 * 1000; // 60 seconds
var THROTTLE_OPTIONS = {
    leading: true,
    trailing: false,
};
var TRIGGER_CONTEXT = __assign({ componentName: TRIGGER_COMPONENT }, packageContext);
var PrefetchTrigger = /** @class */ (function (_super) {
    __extends(PrefetchTrigger, _super);
    function PrefetchTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireOperationalEvent = function (payload) {
            if (_this.props.createAnalyticsEvent) {
                _this.props
                    .createAnalyticsEvent(__assign({ eventType: OPERATIONAL_EVENT_TYPE, actionSubject: TRIGGER_SUBJECT }, payload))
                    .fire(NAVIGATION_CHANNEL);
            }
        };
        _this.triggerPrefetch = throttle(function () {
            prefetch(_this.props);
            _this.fireOperationalEvent({
                action: 'triggered',
            });
        }, THROTTLE_EXPIRES, THROTTLE_OPTIONS);
        _this.handleMouseEnter = function () {
            _this.triggerPrefetch();
            _this.lastEnteredAt = now();
        };
        _this.handleMouseClick = function () {
            if (_this.lastEnteredAt) {
                var hoverToClick = Math.round(now() - _this.lastEnteredAt);
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
var PrefetchTriggerWithEvents = withAnalyticsEvents()(PrefetchTrigger);
export default (function (props) { return (React.createElement(NavigationAnalyticsContext, { data: TRIGGER_CONTEXT },
    React.createElement(PrefetchTriggerWithEvents, __assign({}, props)))); });
//# sourceMappingURL=prefetch-trigger.js.map