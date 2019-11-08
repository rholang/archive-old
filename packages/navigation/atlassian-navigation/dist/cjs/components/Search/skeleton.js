"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var constants_1 = require("@atlaskit/theme/constants");
var core_1 = require("@emotion/core");
var react_1 = require("react");
var theme_1 = require("../../theme");
var skeleton_1 = require("../IconButton/skeleton");
var styles_1 = require("./styles");
exports.SearchSkeleton = function () {
    var theme = theme_1.useTheme();
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx("div", { css: styles_1.searchInputContainerCSS },
            core_1.jsx("div", { css: styles_1.searchInputSkeletonCSS(theme) })),
        core_1.jsx(skeleton_1.IconButtonSkeleton, { css: styles_1.searchIconSkeletonCSS, marginRight: 5, size: constants_1.gridSize() * 3.25 })));
};
//# sourceMappingURL=skeleton.js.map