import { TableMap } from 'prosemirror-tables';
import { findDomRefAtPos } from 'prosemirror-utils';
import { tableNewColumnMinWidth } from '@atlaskit/editor-common';
import { contentWidth } from './content-width';
// Reads `width` and `minWidth` of each column from DOM and returns `ColumnState` containing those values
export var getColumnStateFromDOM = function (cells, index, minWidth) {
    var width = calculateColumnWidth(cells, calculateColumnWidthCallback);
    var minColumnWidth = width < minWidth
        ? // for newly created column (where width < minWidth) we set minWidth = tableNewColumnMinWidth (140px atm)
            tableNewColumnMinWidth
        : calculateColumnWidth(cells, calculateColumnMinWidthCallback(minWidth));
    return {
        index: index,
        width: width < minWidth ? tableNewColumnMinWidth : width,
        minWidth: minColumnWidth,
    };
};
export var getFreeSpace = function (state) {
    return Math.max(state.width - state.minWidth, 0);
};
// Returns DOM refs of all cells in a column by `columnIndex`
export var getCellsRefsInColumn = function (columnIndex, table, tableStart, domAtPos) {
    var map = TableMap.get(table);
    var cellsPositions = map.cellsInRect({
        left: columnIndex,
        right: columnIndex + 1,
        top: 0,
        bottom: map.height,
    });
    var cells = [];
    cellsPositions.forEach(function (pos) {
        var col = findDomRefAtPos(pos + tableStart, domAtPos);
        if (col) {
            cells.push(col);
        }
    });
    return cells;
};
// calculates column withs based on `cells` DOM refs
export var calculateColumnWidth = function (cells, calculateColumnWidthCb) {
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
export var addContainerLeftRightPadding = function (amount, css) {
    return amount + unitToNumber(css.paddingLeft) + unitToNumber(css.paddingRight);
};
export var unitToNumber = function (unit) {
    return unit ? parseInt(unit, 10) : 0;
};
function calculateColumnWidthCallback(css) {
    return unitToNumber(css.width);
}
function calculateColumnMinWidthCallback(minColumnWidth) {
    return function (css, cellRef, colSpan) {
        if (colSpan && colSpan > 1) {
            return unitToNumber(css.width);
        }
        var minContentWidth = contentWidth(cellRef, cellRef).minWidth;
        // Override the min width, if there is content that can't collapse
        // Past a certain width.
        return Math.max(addContainerLeftRightPadding(minContentWidth, css), minContentWidth, minColumnWidth);
    };
}
//# sourceMappingURL=column-state.js.map