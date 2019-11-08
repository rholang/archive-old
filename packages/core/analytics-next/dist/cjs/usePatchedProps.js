"use strict";
/**
 * Internal hook used for the `withAnalyticsHook` HOC and eventually
 * will be used to replace `AnalyticsContextConsumer`.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var useAnalyticsEvents_1 = require("./useAnalyticsEvents");
function usePatchedProps(createEventMap, wrappedComponentProps) {
    if (createEventMap === void 0) { createEventMap = {}; }
    var createAnalyticsEvent = useAnalyticsEvents_1.useAnalyticsEvents().createAnalyticsEvent;
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
                    providedCallback.apply(void 0, tslib_1.__spread(args, [analyticsEvent]));
                }
            };
            return tslib_1.__assign(tslib_1.__assign({}, modified), (_a = {}, _a[propCallbackName] = modifiedCallback, _a));
        }, {});
    };
    var _a = tslib_1.__read(react_1.useState(Object.keys(createEventMap).reduce(function (a, c) {
        var _a;
        return (tslib_1.__assign(tslib_1.__assign({}, a), (_a = {}, _a[c] = wrappedComponentProps[c], _a)));
    }, {})), 2), originalProps = _a[0], setOriginalProps = _a[1];
    var _b = tslib_1.__read(react_1.useState(mapCreateEventsToProps(Object.keys(createEventMap), wrappedComponentProps)), 2), patchedProps = _b[0], setPatchedProps = _b[1];
    var updatePatchedEventProps = function (props) {
        var changedPropCallbacks = Object.keys(createEventMap).filter(function (p) { return originalProps[p] !== props[p]; });
        if (changedPropCallbacks.length > 0) {
            setPatchedProps(tslib_1.__assign(tslib_1.__assign({}, patchedProps), mapCreateEventsToProps(changedPropCallbacks, props)));
            var updatedProps = changedPropCallbacks.reduce(function (a, c) {
                var _a;
                return (tslib_1.__assign(tslib_1.__assign({}, a), (_a = {}, _a[c] = props[c], _a)));
            }, {});
            setOriginalProps(tslib_1.__assign(tslib_1.__assign({}, originalProps), updatedProps));
        }
        return patchedProps;
    };
    return {
        patchedEventProps: updatePatchedEventProps(wrappedComponentProps),
    };
}
exports.usePatchedProps = usePatchedProps;
//# sourceMappingURL=usePatchedProps.js.map