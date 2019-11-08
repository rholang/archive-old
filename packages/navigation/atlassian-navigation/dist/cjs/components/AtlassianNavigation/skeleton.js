"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var constants_1 = require("@atlaskit/theme/constants");
var core_1 = require("@emotion/core");
var theme_1 = require("../../theme");
var skeleton_1 = require("../Create/skeleton");
var skeleton_2 = require("../IconButton/skeleton");
var skeleton_3 = require("../PrimaryItemsContainer/skeleton");
var skeleton_4 = require("../ProductHome/skeleton");
var skeleton_5 = require("../Profile/skeleton");
var skeleton_6 = require("../Search/skeleton");
var styles_1 = require("./styles");
exports.NavigationSkeleton = function (_a) {
    var _b = _a.primaryItemsCount, primaryItemsCount = _b === void 0 ? 4 : _b, _c = _a.secondaryItemsCount, secondaryItemsCount = _c === void 0 ? 4 : _c, _d = _a.theme, theme = _d === void 0 ? theme_1.defaultTheme : _d;
    return (core_1.jsx(theme_1.ThemeProvider, { value: theme },
        core_1.jsx("div", { css: styles_1.containerCSS(theme) },
            core_1.jsx("div", { css: styles_1.leftCSS },
                core_1.jsx(skeleton_4.ProductHomeSkeleton, null),
                core_1.jsx(skeleton_3.PrimaryItemsContainerSkeleton, { count: primaryItemsCount })),
            core_1.jsx("div", { css: styles_1.rightCSS },
                core_1.jsx(skeleton_1.CreateSkeleton, null),
                core_1.jsx(skeleton_6.SearchSkeleton, null),
                Array.from({ length: secondaryItemsCount }, function (_, index) { return (core_1.jsx(skeleton_2.IconButtonSkeleton, { key: index, marginLeft: 0, marginRight: 5, size: constants_1.gridSize() * 3.25 })); }),
                core_1.jsx(skeleton_5.ProfileSkeleton, null)))));
};
//# sourceMappingURL=skeleton.js.map