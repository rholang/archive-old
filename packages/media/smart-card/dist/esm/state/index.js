import { useSmartCardState as useSmartLinkState } from './store';
import { useSmartCardActions as useSmartLinkActions } from './actions';
import { useEffect } from 'react';
export function useSmartLink(url, dispatchAnalytics) {
    var state = useSmartLinkState(url);
    var actions = useSmartLinkActions(url, dispatchAnalytics);
    // Register the current card.
    var register = function () {
        actions.register();
    };
    useEffect(register, [url]);
    // Provide the state and card actions to consumers.
    return { state: state, actions: actions };
}
export * from './context';
//# sourceMappingURL=index.js.map