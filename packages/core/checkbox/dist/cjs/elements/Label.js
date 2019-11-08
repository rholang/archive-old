"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var utils_1 = require("../utils");
exports.labelCSS = function (_a) {
    var isDisabled = _a.isDisabled, tokens = _a.tokens;
    return (tslib_1.__assign({ alignItems: 'flex-start', display: 'flex', color: isDisabled
            ? tokens.label.textColor.disabled
            : tokens.label.textColor.rest }, (isDisabled && { cursor: 'not-allowed' })));
};
function Label(_a) {
    var attributesFn = _a.attributesFn, children = _a.children, isDisabled = _a.isDisabled, onMouseUp = _a.onMouseUp, onMouseDown = _a.onMouseDown, onMouseLeave = _a.onMouseLeave, onMouseEnter = _a.onMouseEnter, tokens = _a.tokens, cssFn = _a.cssFn, testId = _a.testId;
    return (core_1.jsx("label", tslib_1.__assign({}, attributesFn({ isDisabled: isDisabled }), { onMouseUp: onMouseUp, onMouseDown: onMouseDown, onMouseLeave: onMouseLeave, onMouseEnter: onMouseEnter, css: cssFn({ isDisabled: isDisabled, tokens: tokens }), "data-testid": testId }), children));
}
exports.Label = Label;
exports.default = {
    component: Label,
    cssFn: exports.labelCSS,
    attributesFn: utils_1.defaultAttributesFn,
};
//# sourceMappingURL=Label.js.map