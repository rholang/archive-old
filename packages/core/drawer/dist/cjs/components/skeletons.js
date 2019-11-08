"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@emotion/core");
var avatar_1 = require("@atlaskit/avatar");
var constants_1 = require("@atlaskit/theme/constants");
var gridSize = constants_1.gridSize();
/* Primitives */
var Wrapper = function (_a) {
    var isAvatarHidden = _a.isAvatarHidden, isHeader = _a.isHeader, props = tslib_1.__rest(_a, ["isAvatarHidden", "isHeader"]);
    return (core_1.jsx("div", tslib_1.__assign({ css: tslib_1.__assign({ display: 'flex', alignItems: 'center', margin: isAvatarHidden
                ? gridSize * 2 + "px"
                : gridSize / 2 + "px " + gridSize + "px " + gridSize + "px " + gridSize * 2 + "px" }, (isHeader && !isAvatarHidden ? { marginLeft: gridSize + "px" } : {})) }, props)));
};
var headerStylesOverride = function (isAvatarHidden) { return (tslib_1.__assign(tslib_1.__assign({}, (!isAvatarHidden ? { marginLeft: gridSize * 2 + "px" } : null)), { width: gridSize * 18 + "px", opacity: 0.3 })); };
var SkeletonText = function (_a) {
    var isAvatarHidden = _a.isAvatarHidden, isHeader = _a.isHeader, itemTextWidth = _a.itemTextWidth;
    return (core_1.jsx("div", { css: tslib_1.__assign(tslib_1.__assign({ height: gridSize * 2.5 + "px", backgroundColor: 'currentColor', borderRadius: gridSize / 2, opacity: 0.15, width: itemTextWidth || gridSize * 17 + "px" }, (!isAvatarHidden ? { marginLeft: gridSize * 3 + "px" } : null)), (isHeader ? headerStylesOverride(isAvatarHidden) : null)) }));
};
/* Exported Components */
exports.DrawerSkeletonHeader = function (props) {
    var isAvatarHidden = props.isAvatarHidden, isCollapsed = props.isCollapsed;
    return (core_1.jsx(Wrapper, { isAvatarHidden: isAvatarHidden, isHeader: true },
        !isAvatarHidden && (core_1.jsx(avatar_1.Skeleton, { appearance: "square", size: "large", weight: "strong" })),
        !isCollapsed && (core_1.jsx(SkeletonText, { isHeader: true, isAvatarHidden: isAvatarHidden }))));
};
exports.DrawerSkeletonItem = function (props) {
    var isAvatarHidden = props.isAvatarHidden, isCollapsed = props.isCollapsed, itemTextWidth = props.itemTextWidth;
    return (core_1.jsx(Wrapper, { isAvatarHidden: isAvatarHidden },
        !isAvatarHidden && core_1.jsx(avatar_1.Skeleton, { size: "small", weight: "normal" }),
        !isCollapsed && (core_1.jsx(SkeletonText, { itemTextWidth: itemTextWidth, isAvatarHidden: isAvatarHidden }))));
};
//# sourceMappingURL=skeletons.js.map