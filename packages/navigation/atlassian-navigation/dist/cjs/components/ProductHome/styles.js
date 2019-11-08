"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var constants_1 = require("../../common/constants");
var styles_1 = require("../../common/styles");
var gridSize = theme_1.gridSize();
exports.containerCSS = (_a = {
        alignItems: 'center',
        display: 'flex'
    },
    _a["@media (max-width: " + (constants_1.PRODUCT_HOME_BREAKPOINT - 1) + "px)"] = {
        marginRight: gridSize + "px",
    },
    _a["@media (min-width: " + constants_1.PRODUCT_HOME_BREAKPOINT + "px)"] = {
        marginRight: gridSize * 2 + "px",
    },
    _a);
exports.containerSkeletonCSS = exports.containerCSS;
var height = 40;
var heightCSS = {
    height: height + "px",
};
exports.productIconCSS = (_b = {},
    _b["@media (min-width: " + constants_1.PRODUCT_HOME_BREAKPOINT + "px)"] = {
        display: 'none',
    },
    _b);
var iconHeight = 28;
exports.productIconSkeletonCSS = function (theme) { return (tslib_1.__assign(tslib_1.__assign({ borderRadius: '50%', width: iconHeight + "px", height: iconHeight + "px" }, exports.productIconCSS), styles_1.skeletonCSS(theme))); };
exports.customProductIconCSS = tslib_1.__assign(tslib_1.__assign({}, heightCSS), exports.productIconCSS);
exports.productLogoCSS = (_c = {},
    _c["@media (max-width: " + (constants_1.PRODUCT_HOME_BREAKPOINT - 1) + "px)"] = {
        display: 'none',
    },
    _c);
exports.productLogoSkeletonCSS = function (theme) { return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ borderRadius: height / 2 + "px", width: '120px' }, heightCSS), exports.productLogoCSS), styles_1.skeletonCSS(theme))); };
exports.customProductLogoCSS = tslib_1.__assign(tslib_1.__assign({}, heightCSS), exports.productLogoCSS);
//# sourceMappingURL=styles.js.map