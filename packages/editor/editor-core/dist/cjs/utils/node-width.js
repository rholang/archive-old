"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_utils_1 = require("prosemirror-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var styles_1 = require("../plugins/layout/styles");
var styles_2 = require("../plugins/extension/ui/Extension/styles");
/**
 * Calculates width of parent node of a nested node (inside layouts, extension)
 * If current node selection is not nested will return undefined
 */
exports.getParentNodeWidth = function (pos, state, containerWidth, isFullWidthModeEnabled) {
    if (!pos) {
        return;
    }
    var node = getNestedParentNode(pos, state);
    if (!node) {
        return;
    }
    var layout = node.attrs.layout || 'default';
    var schema = state.schema;
    var breakoutMark = schema.marks.breakout && schema.marks.breakout.isInSet(node.marks);
    if (breakoutMark && breakoutMark.attrs.mode) {
        layout = breakoutMark.attrs.mode;
    }
    var parentWidth = calcBreakoutNodeWidth(layout, containerWidth, isFullWidthModeEnabled);
    if (node.type === schema.nodes.layoutSection) {
        parentWidth += styles_1.LAYOUT_OFFSET * 2; // extra width that gets added to layout
        if (containerWidth.width > editor_common_1.gridMediumMaxWidth) {
            parentWidth -= (styles_1.LAYOUT_SECTION_MARGIN + 2) * (node.childCount - 1); // margin between sections
            var $pos = state.doc.resolve(pos);
            var column = prosemirror_utils_1.findParentNodeOfTypeClosestToPos($pos, [
                state.schema.nodes.layoutColumn,
            ]);
            if (column && column.node && !isNaN(column.node.attrs.width)) {
                // get exact width of parent layout column using node attrs
                parentWidth = Math.round(parentWidth * column.node.attrs.width * 0.01);
            }
        }
    }
    // account for the padding of the parent node
    if (node.type === schema.nodes.layoutSection) {
        parentWidth -= styles_1.LAYOUT_COLUMN_PADDING * 2;
    }
    else if (node.type === schema.nodes.bodiedExtension) {
        parentWidth -= styles_2.BODIED_EXT_PADDING * 2;
    }
    parentWidth -= 2; // border
    return parentWidth;
};
var getNestedParentNode = function (tablePos, state) {
    if (tablePos === undefined) {
        return null;
    }
    var $pos = state.doc.resolve(tablePos);
    var parent = prosemirror_utils_1.findParentNodeOfTypeClosestToPos($pos, [
        state.schema.nodes.bodiedExtension,
        state.schema.nodes.layoutSection,
    ]);
    return parent ? parent.node : null;
};
var calcBreakoutNodeWidth = function (layout, containerWidth, isFullWidthModeEnabled) {
    return isFullWidthModeEnabled
        ? Math.min(containerWidth.lineLength, editor_common_1.akEditorFullWidthLayoutWidth)
        : editor_common_1.absoluteBreakoutWidth(layout, containerWidth.width);
};
//# sourceMappingURL=node-width.js.map