"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var useAnalyticsEvents_1 = require("./useAnalyticsEvents");
exports.useCallbackWithAnalytics = function (method, payload, channel) {
    var createAnalyticsEvent = useAnalyticsEvents_1.useAnalyticsEvents().createAnalyticsEvent;
    // given input might be new function/object each render
    // we optimise and store in refs so we can memoize the callback
    // and at the same time avoid stale values
    var methodRef = react_1.useRef(method);
    var payloadRef = react_1.useRef(payload);
    react_1.useEffect(function () {
        methodRef.current = method;
        payloadRef.current = payload;
    }, [method, payload]);
    return react_1.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var pload = typeof payloadRef.current === 'function'
            ? payloadRef.current.apply(payloadRef, tslib_1.__spread(args)) : payloadRef.current;
        createAnalyticsEvent(pload).fire(channel);
        methodRef.current.apply(methodRef, tslib_1.__spread(args));
    }, [createAnalyticsEvent, methodRef, payloadRef, channel]);
};
//# sourceMappingURL=useCallbackWithAnalytics.js.map