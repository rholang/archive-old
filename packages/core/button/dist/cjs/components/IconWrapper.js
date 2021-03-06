"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var utils_1 = require("./utils");
var constants_1 = require("@atlaskit/theme/constants");
exports.default = (function (_a) {
    var spacing = _a.spacing, icon = _a.icon, isOnlyChild = _a.isOnlyChild, isLoading = _a.isLoading, rest = tslib_1.__rest(_a, ["spacing", "icon", "isOnlyChild", "isLoading"]);
    return (core_1.jsx("span", tslib_1.__assign({ css: tslib_1.__assign({ alignSelf: 'center', display: 'flex', flexShrink: 0, lineHeight: 0, fontSize: 0, userSelect: 'none', margin: spacing === 'none'
                ? 0
                : isOnlyChild
                    ? "0 -" + constants_1.gridSize() / 4 + "px"
                    : "0 " + constants_1.gridSize() / 2 + "px" }, utils_1.getLoadingStyle(isLoading)) }, rest), icon));
});
//# sourceMappingURL=IconWrapper.js.map