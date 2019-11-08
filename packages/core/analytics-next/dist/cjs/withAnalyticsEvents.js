"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var AnalyticsContextConsumer_1 = tslib_1.__importDefault(require("./AnalyticsContextConsumer"));
var withAnalyticsEvents = function (createEventMap) { return function (WrappedComponent) {
    var WithAnalyticsEvents = react_1.default.forwardRef(function (props, ref) { return (react_1.default.createElement(AnalyticsContextConsumer_1.default, { createEventMap: createEventMap, wrappedComponentProps: props }, function (_a) {
        var createAnalyticsEvent = _a.createAnalyticsEvent, patchedEventProps = _a.patchedEventProps;
        return (react_1.default.createElement(WrappedComponent, tslib_1.__assign({}, props, patchedEventProps, { createAnalyticsEvent: createAnalyticsEvent, ref: ref })));
    })); });
    // @ts-ignore
    WithAnalyticsEvents.displayName = "WithAnalyticsEvents(" + (WrappedComponent.displayName ||
        WrappedComponent.name) + ")";
    return WithAnalyticsEvents;
}; };
exports.default = withAnalyticsEvents;
//# sourceMappingURL=withAnalyticsEvents.js.map