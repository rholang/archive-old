"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
exports.NavigationAnalyticsContext = analytics_namespaced_context_1.NavigationAnalyticsContext;
var analytics_next_1 = require("@atlaskit/analytics-next");
exports.withAnalyticsEvents = analytics_next_1.withAnalyticsEvents;
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
exports.UI_EVENT_TYPE = analytics_gas_types_1.UI_EVENT_TYPE;
exports.OPERATIONAL_EVENT_TYPE = analytics_gas_types_1.OPERATIONAL_EVENT_TYPE;
exports.NAVIGATION_CHANNEL = 'navigation';
exports.SWITCHER_SUBJECT = 'atlassianSwitcher';
exports.SWITCHER_ITEM_SUBJECT = 'atlassianSwitcherItem';
exports.SWITCHER_CHILD_ITEM_SUBJECT = 'atlassianSwitcherChildItem';
exports.SWITCHER_ITEM_EXPAND_SUBJECT = 'atlassianSwitcherItemExpand';
exports.SWITCHER_COMPONENT = 'atlassianSwitcher';
exports.SWITCHER_SOURCE = 'atlassianSwitcher';
exports.TRIGGER_COMPONENT = 'atlassianSwitcherPrefetch';
exports.TRIGGER_SUBJECT = 'atlassianSwitcherPrefetch';
exports.createAndFireNavigationEvent = analytics_next_1.createAndFireEvent(exports.NAVIGATION_CHANNEL);
exports.analyticsAttributes = function (attributes) { return ({
    attributes: attributes,
}); };
exports.withAnalyticsContextData = function (mapPropsToContext) {
    return function (WrappedComponent) {
        return function (props) { return (React.createElement(analytics_namespaced_context_1.NavigationAnalyticsContext, { data: mapPropsToContext(props) },
            React.createElement(WrappedComponent, tslib_1.__assign({}, props)))); };
    };
};
exports.RenderTracker = analytics_next_1.withAnalyticsEvents({
    onRender: function (createAnalyticsEvent, props) {
        return createAnalyticsEvent({
            eventType: analytics_gas_types_1.OPERATIONAL_EVENT_TYPE,
            action: 'rendered',
            actionSubject: props.subject,
            attributes: props.data,
        }).fire(exports.NAVIGATION_CHANNEL);
    },
})(/** @class */ (function (_super) {
    tslib_1.__extends(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_1.prototype.componentDidMount = function () {
        this.props.onRender();
    };
    class_1.prototype.render = function () {
        return null;
    };
    return class_1;
}(React.Component)));
exports.ViewedTracker = analytics_next_1.withAnalyticsEvents({
    onRender: function (createAnalyticsEvent, props) {
        return createAnalyticsEvent({
            eventType: analytics_gas_types_1.UI_EVENT_TYPE,
            action: 'viewed',
            actionSubject: exports.SWITCHER_SUBJECT,
            attributes: props.data,
        }).fire(exports.NAVIGATION_CHANNEL);
    },
})(/** @class */ (function (_super) {
    tslib_1.__extends(class_2, _super);
    function class_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_2.prototype.componentDidMount = function () {
        this.props.onRender();
    };
    class_2.prototype.render = function () {
        return null;
    };
    return class_2;
}(React.Component)));
//# sourceMappingURL=analytics.js.map