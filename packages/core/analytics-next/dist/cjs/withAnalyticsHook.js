"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * This HOC will eventually be a replacement for `withAnalyticsEvents` once we are ready
 * to make the major bump to solely use hooks and new React context API. For now it let's
 * us test the hook logic to make sure that it accomplishes the expected behavior.
 */
var react_1 = tslib_1.__importDefault(require("react"));
var usePatchedProps_1 = require("./usePatchedProps");
var useAnalyticsEvents_1 = require("./useAnalyticsEvents");
var withAnalyticsHook = function (createEventMap) { return function (WrappedComponent) {
    var WithAnalyticsHook = react_1.default.forwardRef(function (props, ref) {
        var patchedEventProps = usePatchedProps_1.usePatchedProps(createEventMap, props).patchedEventProps;
        var createAnalyticsEvent = useAnalyticsEvents_1.useAnalyticsEvents().createAnalyticsEvent;
        return (react_1.default.createElement(WrappedComponent, tslib_1.__assign({}, props, patchedEventProps, { createAnalyticsEvent: createAnalyticsEvent, ref: ref })));
    });
    // @ts-ignore
    WithAnalyticsHook.displayName = "WithAnalyticsHook(" + (WrappedComponent.displayName ||
        WrappedComponent.name) + ")";
    return WithAnalyticsHook;
}; };
exports.default = withAnalyticsHook;
//# sourceMappingURL=withAnalyticsHook.js.map