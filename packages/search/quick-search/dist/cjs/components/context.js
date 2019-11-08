"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var defaultState = {
    sendAnalytics: function () { },
    onMouseEnter: function () { },
    onMouseLeave: function () { },
    registerResult: function () { },
    unregisterResult: function () { },
    getIndex: function (n) { return Number(n); },
};
exports.ResultContext = React.createContext(defaultState);
exports.SelectedResultIdContext = React.createContext(null);
//# sourceMappingURL=context.js.map