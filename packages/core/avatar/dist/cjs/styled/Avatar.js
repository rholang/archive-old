"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../theme");
var Avatar = function (props) { return (react_1.default.createElement(theme_1.Theme.Consumer, tslib_1.__assign({}, props, { includeBorderWidth: true }), function (_a) {
    var dimensions = _a.dimensions;
    return (react_1.default.createElement("div", { "data-testid": props.testId, style: tslib_1.__assign({ display: 'inline-block', position: 'relative', outline: 0, zIndex: props.stackIndex }, dimensions) }, props.children));
})); };
exports.default = Avatar;
exports.PresenceWrapper = function (props) { return (react_1.default.createElement(theme_1.Theme.Consumer, tslib_1.__assign({}, props, { includeBorderWidth: true }), function (_a) {
    var presence = _a.presence;
    return (react_1.default.createElement("span", { style: tslib_1.__assign({ pointerEvents: 'none', position: 'absolute' }, presence) }, props.children));
})); };
exports.StatusWrapper = function (props) { return (react_1.default.createElement(theme_1.Theme.Consumer, tslib_1.__assign({}, props, { includeBorderWidth: true }), function (_a) {
    var status = _a.status;
    return (react_1.default.createElement("span", { style: tslib_1.__assign({ position: 'absolute' }, status) }, props.children));
})); };
//# sourceMappingURL=Avatar.js.map