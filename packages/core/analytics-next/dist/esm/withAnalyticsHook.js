import { __assign } from "tslib";
/**
 * This HOC will eventually be a replacement for `withAnalyticsEvents` once we are ready
 * to make the major bump to solely use hooks and new React context API. For now it let's
 * us test the hook logic to make sure that it accomplishes the expected behavior.
 */
import React from 'react';
import { usePatchedProps } from './usePatchedProps';
import { useAnalyticsEvents } from './useAnalyticsEvents';
var withAnalyticsHook = function (createEventMap) { return function (WrappedComponent) {
    var WithAnalyticsHook = React.forwardRef(function (props, ref) {
        var patchedEventProps = usePatchedProps(createEventMap, props).patchedEventProps;
        var createAnalyticsEvent = useAnalyticsEvents().createAnalyticsEvent;
        return (React.createElement(WrappedComponent, __assign({}, props, patchedEventProps, { createAnalyticsEvent: createAnalyticsEvent, ref: ref })));
    });
    // @ts-ignore
    WithAnalyticsHook.displayName = "WithAnalyticsHook(" + (WrappedComponent.displayName ||
        WrappedComponent.name) + ")";
    return WithAnalyticsHook;
}; };
export default withAnalyticsHook;
//# sourceMappingURL=withAnalyticsHook.js.map