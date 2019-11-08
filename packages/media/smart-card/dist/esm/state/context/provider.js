import { __assign } from "tslib";
import * as React from 'react';
import { useContext } from 'react';
import { createStore } from 'redux';
import { cardReducer } from '../reducers';
import { SmartCardContext } from '.';
import { MAX_RELOAD_DELAY, MAX_LOADING_DELAY } from '../actions/constants';
import CardClient from '../../client';
export function SmartCardProvider(_a) {
    var _b = _a.client, client = _b === void 0 ? new CardClient() : _b, _c = _a.cacheOptions, cacheOptions = _c === void 0 ? {
        maxAge: MAX_RELOAD_DELAY,
        maxLoadingDelay: MAX_LOADING_DELAY,
    } : _c, _d = _a.storeOptions, storeOptions = _d === void 0 ? { initialState: {} } : _d, _e = _a.authFlow, authFlow = _e === void 0 ? 'oauth2' : _e, children = _a.children;
    var context = useContext(SmartCardContext);
    if (context) {
        return (React.createElement(SmartCardContext.Provider, { value: context }, children));
    }
    else {
        var initialState = storeOptions.initialState;
        var store = createStore(cardReducer, initialState);
        return (React.createElement(SmartCardContext.Provider, { value: {
                store: store,
                connections: {
                    client: client,
                },
                config: __assign(__assign({}, cacheOptions), { authFlow: authFlow }),
            } }, children));
    }
}
export default SmartCardProvider;
//# sourceMappingURL=provider.js.map