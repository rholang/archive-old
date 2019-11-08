/**
 * Internal hook used for the `withAnalyticsHook` HOC and eventually
 * will be used to replace `AnalyticsContextConsumer`.
 */
import { __assign, __read, __spread } from "tslib";
import { useState } from 'react';
import { useAnalyticsEvents } from './useAnalyticsEvents';
export function usePatchedProps(createEventMap, wrappedComponentProps) {
    if (createEventMap === void 0) { createEventMap = {}; }
    var createAnalyticsEvent = useAnalyticsEvents().createAnalyticsEvent;
    var mapCreateEventsToProps = function (changedPropNames, props) {
        return changedPropNames.reduce(function (modified, propCallbackName) {
            var _a;
            var eventCreator = createEventMap[propCallbackName];
            var providedCallback = props[propCallbackName];
            if (!['object', 'function'].includes(typeof eventCreator)) {
                return modified;
            }
            var modifiedCallback = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var analyticsEvent = typeof eventCreator === 'function'
                    ? eventCreator(createAnalyticsEvent, props)
                    : createAnalyticsEvent(eventCreator);
                if (providedCallback) {
                    providedCallback.apply(void 0, __spread(args, [analyticsEvent]));
                }
            };
            return __assign(__assign({}, modified), (_a = {}, _a[propCallbackName] = modifiedCallback, _a));
        }, {});
    };
    var _a = __read(useState(Object.keys(createEventMap).reduce(function (a, c) {
        var _a;
        return (__assign(__assign({}, a), (_a = {}, _a[c] = wrappedComponentProps[c], _a)));
    }, {})), 2), originalProps = _a[0], setOriginalProps = _a[1];
    var _b = __read(useState(mapCreateEventsToProps(Object.keys(createEventMap), wrappedComponentProps)), 2), patchedProps = _b[0], setPatchedProps = _b[1];
    var updatePatchedEventProps = function (props) {
        var changedPropCallbacks = Object.keys(createEventMap).filter(function (p) { return originalProps[p] !== props[p]; });
        if (changedPropCallbacks.length > 0) {
            setPatchedProps(__assign(__assign({}, patchedProps), mapCreateEventsToProps(changedPropCallbacks, props)));
            var updatedProps = changedPropCallbacks.reduce(function (a, c) {
                var _a;
                return (__assign(__assign({}, a), (_a = {}, _a[c] = props[c], _a)));
            }, {});
            setOriginalProps(__assign(__assign({}, originalProps), updatedProps));
        }
        return patchedProps;
    };
    return {
        patchedEventProps: updatePatchedEventProps(wrappedComponentProps),
    };
}
//# sourceMappingURL=usePatchedProps.js.map