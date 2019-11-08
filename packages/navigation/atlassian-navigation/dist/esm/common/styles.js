var _a, _b;
import { __assign } from "tslib";
import { CREATE_BREAKPOINT } from './constants';
export var actionSectionDesktopCSS = (_a = {},
    _a["@media (max-width: " + (CREATE_BREAKPOINT - 1) + "px)"] = {
        display: 'none',
    },
    _a);
export var actionSectionMobileCSS = (_b = {},
    _b["@media (min-width: " + CREATE_BREAKPOINT + "px)"] = {
        display: 'none',
    },
    _b);
export var skeletonCSS = function (_a) {
    var skeleton = _a.mode.skeleton;
    return (__assign({ opacity: 0.15 }, skeleton));
};
//# sourceMappingURL=styles.js.map