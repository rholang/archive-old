"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var client_1 = tslib_1.__importDefault(require("../client"));
var state_1 = require("../state");
var Hook = function (props) {
    props.callback();
    return null;
};
exports.renderHook = function (callback) {
    return React.createElement(Hook, { callback: callback });
};
exports.renderSmartLinkHook = function (callback, providerProps) {
    return (React.createElement(state_1.SmartCardProvider, tslib_1.__assign({ client: new client_1.default() }, providerProps),
        React.createElement(Hook, { callback: callback }),
        ";"));
};
//# sourceMappingURL=test-utils.js.map