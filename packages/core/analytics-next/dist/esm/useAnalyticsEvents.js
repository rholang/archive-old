import { useContext, useCallback } from 'react';
import { AnalyticsReactContext } from './AnalyticsReactContext';
import UIAnalyticsEvent from './UIAnalyticsEvent';
export function useAnalyticsEvents() {
    var _a = useContext(AnalyticsReactContext), getAtlaskitAnalyticsEventHandlers = _a.getAtlaskitAnalyticsEventHandlers, getAtlaskitAnalyticsContext = _a.getAtlaskitAnalyticsContext;
    if ((getAtlaskitAnalyticsEventHandlers === null ||
        getAtlaskitAnalyticsContext === null) &&
        process.env.NODE_ENV !== 'production') {
        /* eslint-disable-next-line no-console */
        console.warn("No compatible AnalyticsListener is listening to this event fire. Use of this hook requires the firing component/hook to be wrapped in an AnalyticsListener from @atlaskit/analytics-next@^6.3.0 or above.");
    }
    var createAnalyticsEvent = useCallback(function (payload) {
        return new UIAnalyticsEvent({
            context: getAtlaskitAnalyticsContext(),
            handlers: getAtlaskitAnalyticsEventHandlers(),
            payload: payload,
        });
    }, [getAtlaskitAnalyticsEventHandlers, getAtlaskitAnalyticsContext]);
    return {
        createAnalyticsEvent: createAnalyticsEvent,
    };
}
//# sourceMappingURL=useAnalyticsEvents.js.map