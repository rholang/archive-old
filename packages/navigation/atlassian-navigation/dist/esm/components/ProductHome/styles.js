var _a, _b, _c;
import { __assign } from "tslib";
import { gridSize as gridSizeFn } from '@atlaskit/theme';
import { PRODUCT_HOME_BREAKPOINT } from '../../common/constants';
import { skeletonCSS } from '../../common/styles';
var gridSize = gridSizeFn();
export var containerCSS = (_a = {
        alignItems: 'center',
        display: 'flex'
    },
    _a["@media (max-width: " + (PRODUCT_HOME_BREAKPOINT - 1) + "px)"] = {
        marginRight: gridSize + "px",
    },
    _a["@media (min-width: " + PRODUCT_HOME_BREAKPOINT + "px)"] = {
        marginRight: gridSize * 2 + "px",
    },
    _a);
export var containerSkeletonCSS = containerCSS;
var height = 40;
var heightCSS = {
    height: height + "px",
};
export var productIconCSS = (_b = {},
    _b["@media (min-width: " + PRODUCT_HOME_BREAKPOINT + "px)"] = {
        display: 'none',
    },
    _b);
var iconHeight = 28;
export var productIconSkeletonCSS = function (theme) { return (__assign(__assign({ borderRadius: '50%', width: iconHeight + "px", height: iconHeight + "px" }, productIconCSS), skeletonCSS(theme))); };
export var customProductIconCSS = __assign(__assign({}, heightCSS), productIconCSS);
export var productLogoCSS = (_c = {},
    _c["@media (max-width: " + (PRODUCT_HOME_BREAKPOINT - 1) + "px)"] = {
        display: 'none',
    },
    _c);
export var productLogoSkeletonCSS = function (theme) { return (__assign(__assign(__assign({ borderRadius: height / 2 + "px", width: '120px' }, heightCSS), productLogoCSS), skeletonCSS(theme))); };
export var customProductLogoCSS = __assign(__assign({}, heightCSS), productLogoCSS);
//# sourceMappingURL=styles.js.map