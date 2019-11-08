"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var theme_1 = require("../../theme");
var styles_1 = require("./styles");
exports.IconButtonSkeleton = function (props) {
    var theme = theme_1.useTheme();
    return (core_1.jsx("div", { className: props.className, css: styles_1.iconButtonSkeletonCSS(theme, props) }));
};
//# sourceMappingURL=skeleton.js.map