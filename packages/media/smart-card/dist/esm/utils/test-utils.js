import { __assign } from "tslib";
import * as React from 'react';
import CardClient from '../client';
import { SmartCardProvider } from '../state';
var Hook = function (props) {
    props.callback();
    return null;
};
export var renderHook = function (callback) {
    return React.createElement(Hook, { callback: callback });
};
export var renderSmartLinkHook = function (callback, providerProps) {
    return (React.createElement(SmartCardProvider, __assign({ client: new CardClient() }, providerProps),
        React.createElement(Hook, { callback: callback }),
        ";"));
};
//# sourceMappingURL=test-utils.js.map