"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var content_width_1 = require("./content-width");
// Reads `width` and `minWidth` of each column from DOM and returns `ColumnState` containing those values
exports.getColumnStateFromDOM = function (cells, index, minWidth) {
    var width = exports.calculateColumnWidth(cells, calculateColumnWidthCallback);
    var minColumnWidth = width < minWidth
        ? // for newly created column (where width < minWidth) we set minWidth = tableNewColumnMinWidth (140px atm)
            editor_common_1.tableNewColumnMinWidth
        : exports.calculateColumnWidth(cells, calculateColumnMinWidthCallback(minWidth));
    return {
        index: index,
        width: width < minWidth ? editor_common_1.tableNewColumnMinWidth : width,
        minWidth: minColumnWidth,
    };
};
exports.getFreeSpace = function (state) {
    return Math.max(state.width - state.minWidth, 0);
};
// Returns DOM refs of all cells in a column by `columnIndex`
exports.getCellsRefsInColumn = function (columnIndex, table, tableStart, domAtPos) {
    var map = prosemirror_tables_1.TableMap.get(table);
    var cellsPositions = map.cellsInRect({
        left: columnIndex,
        right: columnIndex + 1,
        top: 0,
        bottom: map.height,
    });
    var cells = [];
    cellsPositions.forEach(function (pos) {
        var col = prosemirror_utils_1.findDomRefAtPos(pos + tableStart, domAtPos);
        if (col) {
            cells.push(col);
        }
    });
    return cells;
};
// calculates column withs based on `cells` DOM refs
exports.calculateColumnWidth = function (cells, calculateColumnWidthCb) {
    var maxColWidth = 0;
    var colSpanWidth = 0;
    cells.forEach(function (cellRef) {
        var css = getComputedStyle(cellRef);
        var colspan = Number(cellRef.getAttribute('colspan') || 1);
        if (colspan > 1) {
            colSpanWidth = calculateColumnWidthCb(css, cellRef, colspan);
            return;
        }
        if (css) {
            var colWidth = calculateColumnWidthCb(css, cellRef, colspan);
            maxColWidth = Math.max(colWidth, maxColWidth);
        }
    });
    return maxColWidth || colSpanWidth;
};
exports.addContainerLeftRightPadding = function (amount, css) {
    return amount + exports.unitToNumber(css.paddingLeft) + exports.unitToNumber(css.paddingRight);
};
exports.unitToNumber = function (unit) {
    return unit ? parseInt(unit, 10) : 0;
};
function calculateColumnWidthCallback(css) {
    return exports.unitToNumber(css.width);
}
function calculateColumnMinWidthCallback(minColumnWidth) {
    return function (css, cellRef, colSpan) {
        if (colSpan && colSpan > 1) {
            return exports.unitToNumber(css.width);
        }
        var minContentWidth = content_width_1.contentWidth(cellRef, cellRef).minWidth;
        // Override the min width, if there is content that can't collapse
        // Past a certain width.
        return Math.max(exports.addContainerLeftRightPadding(minContentWidth, css), minContentWidth, minColumnWidth);
    };
}
//# sourceMappingURL=column-state.js.map