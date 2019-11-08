"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_util_1 = require("../../util/analytics-util");
var UnwrappedAnalyticsEventFiredOnMount = /** @class */ (function (_super) {
    tslib_1.__extends(UnwrappedAnalyticsEventFiredOnMount, _super);
    function UnwrappedAnalyticsEventFiredOnMount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnwrappedAnalyticsEventFiredOnMount.prototype.componentDidMount = function () {
        if (this.props.createAnalyticsEvent) {
            var event_1 = this.props.createAnalyticsEvent({});
            event_1.update(this.props.payloadProvider()).fire(analytics_util_1.DEFAULT_GAS_CHANNEL);
            this.props.onEventFired();
        }
    };
    UnwrappedAnalyticsEventFiredOnMount.prototype.render = function () {
        return null;
    };
    return UnwrappedAnalyticsEventFiredOnMount;
}(React.Component));
exports.UnwrappedAnalyticsEventFiredOnMount = UnwrappedAnalyticsEventFiredOnMount;
exports.default = analytics_next_1.withAnalyticsEvents()(UnwrappedAnalyticsEventFiredOnMount);
//# sourceMappingURL=AnalyticsEventFiredOnMount.js.map