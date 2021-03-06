import { __read } from "tslib";
import { useSmartLinkContext } from '../context';
import { useEffect, useState } from 'react';
import { getUrl } from '../actions/helpers';
export function useSmartCardState(url) {
    var store = useSmartLinkContext().store;
    // Initially, card state should be pending and 'empty'.
    var _a = __read(useState(getUrl(store, url)), 2), state = _a[0], setState = _a[1];
    // Selector for initial and subsequent states.
    useEffect(function () {
        store.subscribe(function () {
            setState(getUrl(store, url));
        });
    }, [url, store]);
    // State for use in view components.
    return state;
}
//# sourceMappingURL=index.js.map