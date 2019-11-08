"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("./constants");
exports.actionSectionDesktopCSS = (_a = {},
    _a["@media (max-width: " + (constants_1.CREATE_BREAKPOINT - 1) + "px)"] = {
        display: 'none',
    },
    _a);
exports.actionSectionMobileCSS = (_b = {},
    _b["@media (min-width: " + constants_1.CREATE_BREAKPOINT + "px)"] = {
        display: 'none',
    },
    _b);
exports.skeletonCSS = function (_a) {
    var skeleton = _a.mode.skeleton;
    return (tslib_1.__assign({ opacity: 0.15 }, skeleton));
};
//# sourceMappingURL=styles.js.map