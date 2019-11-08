"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var theme_1 = require("@atlaskit/theme");
exports.default = (function (_a) {
    var tokens = _a.tokens, props = tslib_1.__rest(_a, ["tokens"]);
    return (core_1.jsx("span", tslib_1.__assign({ css: {
            color: tokens.requiredIndicator.textColor.rest,
            paddingLeft: theme_1.math.multiply(theme_1.gridSize, 0.25) + "px;",
        } }, props)));
});
//# sourceMappingURL=RequiredIndicator.js.map