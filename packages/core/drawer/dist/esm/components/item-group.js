/** @jsx jsx */
import { __assign, __rest } from "tslib";
import { jsx } from '@emotion/core';
import { ItemGroup } from '@atlaskit/item';
import { 
// @ts-ignore - it's exported the type is just missing
fontSizeSmall, gridSize as gridSizeFn, } from '@atlaskit/theme/constants';
var groupTitleFontSize = fontSizeSmall();
var gridSize = gridSizeFn();
var SkeletonGroupTitle = function (_a) {
    var props = __rest(_a, []);
    return (jsx("div", __assign({ css: {
            fontSize: groupTitleFontSize + "px",
            lineHeight: "" + (gridSize * 2) / groupTitleFontSize,
            fontWeight: 600,
            marginTop: gridSize * 1.5 + "px",
        } }, props)));
};
var ItemChildrenWrapper = function (_a) {
    var props = __rest(_a, []);
    return (jsx("div", __assign({ css: { marginLeft: gridSize + "px" } }, props)));
};
var ItemGroupWrapper = function (_a) {
    var props = __rest(_a, []);
    return (jsx("div", __assign({ css: { paddingRight: gridSize * 4 + "px" } }, props)));
};
export var DrawerItemGroup = function (_a) {
    var title = _a.title, isCompact = _a.isCompact, children = _a.children;
    var wrappedTitle = title ? (jsx(SkeletonGroupTitle, null, title)) : null;
    return (jsx(ItemGroupWrapper, null,
        jsx(ItemGroup, { title: wrappedTitle, isCompact: isCompact },
            jsx(ItemChildrenWrapper, null, children))));
};
//# sourceMappingURL=item-group.js.map