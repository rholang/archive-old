"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editor_common_1 = require("@atlaskit/editor-common");
var utils_1 = require("../../../utils");
var utils_2 = require("../utils");
// Base function to trigger the actual scale on a table node.
// Will only resize/scale if a table has been previously resized.
exports.scale = function (tableRef, options, domAtPos) {
    /**
     * isBreakoutEnabled === true -> default center aligned
     * isBreakoutEnabled === false -> full width mode
     */
    var node = options.node, containerWidth = options.containerWidth, previousContainerWidth = options.previousContainerWidth, dynamicTextSizing = options.dynamicTextSizing, prevNode = options.prevNode, start = options.start, isBreakoutEnabled = options.isBreakoutEnabled, layoutChanged = options.layoutChanged;
    var maxSize = utils_2.getLayoutSize(node.attrs.layout, containerWidth, {
        dynamicTextSizing: dynamicTextSizing,
        isBreakoutEnabled: isBreakoutEnabled,
    });
    var prevTableWidth = utils_1.getTableWidth(prevNode);
    var previousMaxSize = utils_2.getLayoutSize(prevNode.attrs.layout, previousContainerWidth, {
        dynamicTextSizing: dynamicTextSizing,
        isBreakoutEnabled: isBreakoutEnabled,
    });
    var newWidth = maxSize;
    // adjust table width if layout is updated
    var hasOverflow = prevTableWidth > previousMaxSize;
    if (layoutChanged && hasOverflow) {
        // No keep overflow if the old content can be in the new size
        var canFitInNewSize = prevTableWidth < maxSize;
        if (canFitInNewSize) {
            newWidth = maxSize;
        }
        else {
            // Keep the same scale.
            var overflowScale = prevTableWidth / previousMaxSize;
            newWidth = Math.floor(newWidth * overflowScale);
        }
    }
    if (node.attrs.isNumberColumnEnabled) {
        newWidth -= editor_common_1.akEditorTableNumberColumnWidth;
    }
    var resizeState = utils_2.getResizeState({
        minWidth: editor_common_1.tableCellMinWidth,
        maxSize: maxSize,
        table: node,
        tableRef: tableRef,
        start: start,
        domAtPos: domAtPos,
    });
    return scaleTableTo(resizeState, newWidth);
};
exports.scaleWithParent = function (tableRef, parentWidth, table, start, domAtPos) {
    var resizeState = utils_2.getResizeState({
        minWidth: editor_common_1.tableCellMinWidth,
        maxSize: parentWidth,
        table: table,
        tableRef: tableRef,
        start: start,
        domAtPos: domAtPos,
    });
    if (table.attrs.isNumberColumnEnabled) {
        parentWidth -= editor_common_1.akEditorTableNumberColumnWidth;
    }
    return scaleTableTo(resizeState, Math.floor(parentWidth));
};
// Scales the table to a given size and updates its colgroup DOM node
function scaleTableTo(state, maxSize) {
    var scaleFactor = maxSize / utils_2.getTotalWidth(state);
    var newState = tslib_1.__assign(tslib_1.__assign({}, state), { maxSize: maxSize, cols: state.cols.map(function (col) {
            var minWidth = col.minWidth, width = col.width;
            var newColWidth = Math.floor(width * scaleFactor);
            if (newColWidth < minWidth) {
                newColWidth = minWidth;
            }
            return tslib_1.__assign(tslib_1.__assign({}, col), { width: newColWidth });
        }) });
    var newTotalWidth = utils_2.getTotalWidth(newState);
    if (newTotalWidth > maxSize) {
        newState = utils_2.reduceSpace(newState, newTotalWidth - maxSize);
    }
    return utils_2.adjustColumnsWidths(newState, maxSize);
}
//# sourceMappingURL=scale-table.js.map