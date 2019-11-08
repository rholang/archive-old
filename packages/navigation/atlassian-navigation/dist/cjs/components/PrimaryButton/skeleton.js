"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var theme_1 = require("../../theme");
var styles_1 = require("./styles");
exports.PrimaryButtonSkeleton = function (props) {
    var theme = theme_1.useTheme();
    return core_1.jsx("div", tslib_1.__assign({}, props, { css: styles_1.primaryButtonSkeletonCSS(theme) }));
};
//# sourceMappingURL=skeleton.js.map