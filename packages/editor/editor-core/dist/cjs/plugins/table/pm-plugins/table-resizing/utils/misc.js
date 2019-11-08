"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editor_common_1 = require("@atlaskit/editor-common");
var utils_1 = require("../../../../../utils");
exports.tableLayoutToSize = {
    default: editor_common_1.akEditorDefaultLayoutWidth,
    wide: editor_common_1.akEditorWideLayoutWidth,
    'full-width': editor_common_1.akEditorFullWidthLayoutWidth,
};
// Translates named layouts in number values.
function getLayoutSize(tableLayout, containerWidth, options) {
    if (containerWidth === void 0) { containerWidth = 0; }
    var dynamicTextSizing = options.dynamicTextSizing, isFullWidthModeEnabled = options.isFullWidthModeEnabled;
    if (isFullWidthModeEnabled) {
        return containerWidth
            ? Math.min(containerWidth - editor_common_1.akEditorGutterPadding * 2, editor_common_1.akEditorFullWidthLayoutWidth)
            : editor_common_1.akEditorFullWidthLayoutWidth;
    }
    var calculatedTableWidth = editor_common_1.calcTableWidth(tableLayout, containerWidth, true);
    if (calculatedTableWidth.endsWith('px')) {
        return parseInt(calculatedTableWidth, 10);
    }
    if (dynamicTextSizing && tableLayout === 'default') {
        return getDefaultLayoutMaxWidth(containerWidth);
    }
    return exports.tableLayoutToSize[tableLayout] || containerWidth;
}
exports.getLayoutSize = getLayoutSize;
function getDefaultLayoutMaxWidth(containerWidth) {
    return editor_common_1.mapBreakpointToLayoutMaxWidth(editor_common_1.getBreakpoint(containerWidth));
}
exports.getDefaultLayoutMaxWidth = getDefaultLayoutMaxWidth;
// Does the current position point at a cell.
function pointsAtCell($pos) {
    return ($pos.parent.type.spec.tableRole ===
        'row' && $pos.nodeAfter);
}
exports.pointsAtCell = pointsAtCell;
// Get the current col width, handles colspan.
function currentColWidth(view, cellPos, _a) {
    var colspan = _a.colspan, colwidth = _a.colwidth;
    var width = colwidth && colwidth[colwidth.length - 1];
    if (width) {
        return width;
    }
    // Not fixed, read current width from DOM
    var domWidth = view.domAtPos(cellPos + 1).node.offsetWidth;
    var parts = colspan || 0;
    if (colwidth) {
        for (var i = 0; i < (colspan || 0); i++) {
            if (colwidth[i]) {
                domWidth -= colwidth[i];
                parts--;
            }
        }
    }
    return domWidth / parts;
}
exports.currentColWidth = currentColWidth;
// Attempts to find a parent TD/TH depending on target element.
function domCellAround(target) {
    while (target && target.nodeName !== 'TD' && target.nodeName !== 'TH') {
        target = utils_1.containsClassName(target, 'ProseMirror')
            ? null
            : target.parentNode;
    }
    return target;
}
exports.domCellAround = domCellAround;
//# sourceMappingURL=misc.js.map