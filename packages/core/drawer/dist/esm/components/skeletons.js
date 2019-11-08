/** @jsx jsx */
import { __assign, __rest } from "tslib";
import { jsx } from '@emotion/core';
import { Skeleton as SkeletonAvatar } from '@atlaskit/avatar';
import { gridSize as gridSizeFn } from '@atlaskit/theme/constants';
var gridSize = gridSizeFn();
/* Primitives */
var Wrapper = function (_a) {
    var isAvatarHidden = _a.isAvatarHidden, isHeader = _a.isHeader, props = __rest(_a, ["isAvatarHidden", "isHeader"]);
    return (jsx("div", __assign({ css: __assign({ display: 'flex', alignItems: 'center', margin: isAvatarHidden
                ? gridSize * 2 + "px"
                : gridSize / 2 + "px " + gridSize + "px " + gridSize + "px " + gridSize * 2 + "px" }, (isHeader && !isAvatarHidden ? { marginLeft: gridSize + "px" } : {})) }, props)));
};
var headerStylesOverride = function (isAvatarHidden) { return (__assign(__assign({}, (!isAvatarHidden ? { marginLeft: gridSize * 2 + "px" } : null)), { width: gridSize * 18 + "px", opacity: 0.3 })); };
var SkeletonText = function (_a) {
    var isAvatarHidden = _a.isAvatarHidden, isHeader = _a.isHeader, itemTextWidth = _a.itemTextWidth;
    return (jsx("div", { css: __assign(__assign({ height: gridSize * 2.5 + "px", backgroundColor: 'currentColor', borderRadius: gridSize / 2, opacity: 0.15, width: itemTextWidth || gridSize * 17 + "px" }, (!isAvatarHidden ? { marginLeft: gridSize * 3 + "px" } : null)), (isHeader ? headerStylesOverride(isAvatarHidden) : null)) }));
};
/* Exported Components */
export var DrawerSkeletonHeader = function (props) {
    var isAvatarHidden = props.isAvatarHidden, isCollapsed = props.isCollapsed;
    return (jsx(Wrapper, { isAvatarHidden: isAvatarHidden, isHeader: true },
        !isAvatarHidden && (jsx(SkeletonAvatar, { appearance: "square", size: "large", weight: "strong" })),
        !isCollapsed && (jsx(SkeletonText, { isHeader: true, isAvatarHidden: isAvatarHidden }))));
};
export var DrawerSkeletonItem = function (props) {
    var isAvatarHidden = props.isAvatarHidden, isCollapsed = props.isCollapsed, itemTextWidth = props.itemTextWidth;
    return (jsx(Wrapper, { isAvatarHidden: isAvatarHidden },
        !isAvatarHidden && jsx(SkeletonAvatar, { size: "small", weight: "normal" }),
        !isCollapsed && (jsx(SkeletonText, { itemTextWidth: itemTextWidth, isAvatarHidden: isAvatarHidden }))));
};
//# sourceMappingURL=skeletons.js.map