"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var AnalyticsReactContext_1 = require("./AnalyticsReactContext");
var UIAnalyticsEvent_1 = tslib_1.__importDefault(require("./UIAnalyticsEvent"));
function useAnalyticsEvents() {
    var _a = react_1.useContext(AnalyticsReactContext_1.AnalyticsReactContext), getAtlaskitAnalyticsEventHandlers = _a.getAtlaskitAnalyticsEventHandlers, getAtlaskitAnalyticsContext = _a.getAtlaskitAnalyticsContext;
    if ((getAtlaskitAnalyticsEventHandlers === null ||
        getAtlaskitAnalyticsContext === null) &&
        process.env.NODE_ENV !== 'production') {
        /* eslint-disable-next-line no-console */
        console.warn("No compatible AnalyticsListener is listening to this event fire. Use of this hook requires the firing component/hook to be wrapped in an AnalyticsListener from @atlaskit/analytics-next@^6.3.0 or above.");
    }
    var createAnalyticsEvent = react_1.useCallback(function (payload) {
        return new UIAnalyticsEvent_1.default({
            context: getAtlaskitAnalyticsContext(),
            handlers: getAtlaskitAnalyticsEventHandlers(),
            payload: payload,
        });
    }, [getAtlaskitAnalyticsEventHandlers, getAtlaskitAnalyticsContext]);
    return {
        createAnalyticsEvent: createAnalyticsEvent,
    };
}
exports.useAnalyticsEvents = useAnalyticsEvents;
//# sourceMappingURL=useAnalyticsEvents.js.map