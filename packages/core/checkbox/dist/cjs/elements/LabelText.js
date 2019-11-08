"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var utils_1 = require("../utils");
exports.labelTextCSS = function (_a) {
    var tokens = _a.tokens;
    return ({
        paddingTop: tokens.label.spacing.top,
        paddingRight: tokens.label.spacing.right,
        paddingBottom: tokens.label.spacing.bottom,
        paddingLeft: tokens.label.spacing.left,
    });
};
function LabelText(_a) {
    var attributesFn = _a.attributesFn, tokens = _a.tokens, children = _a.children, cssFn = _a.cssFn;
    return (core_1.jsx("span", tslib_1.__assign({}, attributesFn(), { css: cssFn({ tokens: tokens }) }), children));
}
exports.LabelText = LabelText;
exports.default = {
    component: LabelText,
    cssFn: exports.labelTextCSS,
    attributesFn: utils_1.defaultAttributesFn,
};
//# sourceMappingURL=LabelText.js.map