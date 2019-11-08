"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@emotion/core");
var item_1 = require("@atlaskit/item");
var constants_1 = require("@atlaskit/theme/constants");
var groupTitleFontSize = constants_1.fontSizeSmall();
var gridSize = constants_1.gridSize();
var SkeletonGroupTitle = function (_a) {
    var props = tslib_1.__rest(_a, []);
    return (core_1.jsx("div", tslib_1.__assign({ css: {
            fontSize: groupTitleFontSize + "px",
            lineHeight: "" + (gridSize * 2) / groupTitleFontSize,
            fontWeight: 600,
            marginTop: gridSize * 1.5 + "px",
        } }, props)));
};
var ItemChildrenWrapper = function (_a) {
    var props = tslib_1.__rest(_a, []);
    return (core_1.jsx("div", tslib_1.__assign({ css: { marginLeft: gridSize + "px" } }, props)));
};
var ItemGroupWrapper = function (_a) {
    var props = tslib_1.__rest(_a, []);
    return (core_1.jsx("div", tslib_1.__assign({ css: { paddingRight: gridSize * 4 + "px" } }, props)));
};
exports.DrawerItemGroup = function (_a) {
    var title = _a.title, isCompact = _a.isCompact, children = _a.children;
    var wrappedTitle = title ? (core_1.jsx(SkeletonGroupTitle, null, title)) : null;
    return (core_1.jsx(ItemGroupWrapper, null,
        core_1.jsx(item_1.ItemGroup, { title: wrappedTitle, isCompact: isCompact },
            core_1.jsx(ItemChildrenWrapper, null, children))));
};
//# sourceMappingURL=item-group.js.map