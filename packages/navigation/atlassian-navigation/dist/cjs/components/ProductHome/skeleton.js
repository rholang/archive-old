"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var theme_1 = require("../../theme");
var styles_1 = require("./styles");
exports.ProductHomeSkeleton = function () {
    var theme = theme_1.useTheme();
    return (core_1.jsx("div", { css: styles_1.containerSkeletonCSS },
        core_1.jsx("div", { css: styles_1.productLogoSkeletonCSS(theme) }),
        core_1.jsx("div", { css: styles_1.productIconSkeletonCSS(theme) })));
};
//# sourceMappingURL=skeleton.js.map