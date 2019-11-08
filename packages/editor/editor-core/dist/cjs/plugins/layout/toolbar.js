"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_intl_1 = require("react-intl");
var prosemirror_utils_1 = require("prosemirror-utils");
var layout_two_equal_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/layout-two-equal"));
var layout_three_equal_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/layout-three-equal"));
var layout_two_left_sidebar_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/layout-two-left-sidebar"));
var layout_two_right_sidebar_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/layout-two-right-sidebar"));
var layout_three_with_sidebars_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/layout-three-with-sidebars"));
var remove_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/remove"));
var messages_1 = tslib_1.__importDefault(require("../../messages"));
var actions_1 = require("./actions");
var decoration_1 = require("../base/pm-plugins/decoration");
exports.messages = react_intl_1.defineMessages({
    twoColumns: {
        id: 'fabric.editor.twoColumns',
        defaultMessage: 'Two columns',
        description: 'Layout with two columns of equal width',
    },
    threeColumns: {
        id: 'fabric.editor.threeColumns',
        defaultMessage: 'Three columns',
        description: 'Layout with three columns of equal width',
    },
    rightSidebar: {
        id: 'fabric.editor.rightSidebar',
        defaultMessage: 'Right sidebar',
        description: 'Layout with two columns, left column is 2/3 and right is 1/3 of page',
    },
    leftSidebar: {
        id: 'fabric.editor.leftSidebar',
        defaultMessage: 'Left sidebar',
        description: 'Layout with two columns, left column is 1/3 and right is 2/3 of page',
    },
    threeColumnsWithSidebars: {
        id: 'fabric.editor.threeColumnsWithSidebars',
        defaultMessage: 'Three columns with sidebars',
        description: 'Layout with 3 columns laid out as 25% - 50% - 25%',
    },
});
var LAYOUT_TYPES = [
    { type: 'two_equal', title: exports.messages.twoColumns, icon: layout_two_equal_1.default },
    {
        type: 'three_equal',
        title: exports.messages.threeColumns,
        icon: layout_three_equal_1.default,
    },
];
var SIDEBAR_LAYOUT_TYPES = [
    {
        type: 'two_right_sidebar',
        title: exports.messages.rightSidebar,
        icon: layout_two_right_sidebar_1.default,
    },
    {
        type: 'two_left_sidebar',
        title: exports.messages.leftSidebar,
        icon: layout_two_left_sidebar_1.default,
    },
    {
        type: 'three_with_sidebars',
        title: exports.messages.threeColumnsWithSidebars,
        icon: layout_three_with_sidebars_1.default,
    },
];
var buildLayoutButton = function (intl, item, currentLayout) { return ({
    type: 'button',
    icon: item.icon,
    title: intl.formatMessage(item.title),
    onClick: actions_1.setPresetLayout(item.type),
    selected: !!currentLayout && currentLayout === item.type,
}); };
exports.buildToolbar = function (state, intl, pos, _allowBreakout, addSidebarLayouts) {
    var node = state.doc.nodeAt(pos);
    if (node) {
        var currentLayout_1 = actions_1.getPresetLayout(node);
        var separator = {
            type: 'separator',
        };
        var nodeType = state.schema.nodes.layoutSection;
        var deleteButton = {
            type: 'button',
            appearance: 'danger',
            icon: remove_1.default,
            title: intl.formatMessage(messages_1.default.remove),
            onClick: actions_1.deleteActiveLayoutNode,
            onMouseEnter: decoration_1.hoverDecoration(nodeType, true),
            onMouseLeave: decoration_1.hoverDecoration(nodeType, false),
        };
        return {
            title: 'Layout floating controls',
            getDomRef: function (view) {
                return prosemirror_utils_1.findDomRefAtPos(pos, view.domAtPos.bind(view));
            },
            nodeType: nodeType,
            items: tslib_1.__spread(LAYOUT_TYPES.map(function (i) { return buildLayoutButton(intl, i, currentLayout_1); }), (addSidebarLayouts
                ? SIDEBAR_LAYOUT_TYPES.map(function (i) {
                    return buildLayoutButton(intl, i, currentLayout_1);
                })
                : []), [
                separator,
                deleteButton,
            ]),
        };
    }
    return;
};
//# sourceMappingURL=toolbar.js.map