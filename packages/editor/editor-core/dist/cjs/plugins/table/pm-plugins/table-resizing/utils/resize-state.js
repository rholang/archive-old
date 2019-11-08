"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editor_common_1 = require("@atlaskit/editor-common");
var resize_logic_1 = require("./resize-logic");
var column_state_1 = require("./column-state");
var colgroup_1 = require("./colgroup");
exports.getResizeState = function (_a) {
    var minWidth = _a.minWidth, maxSize = _a.maxSize, table = _a.table, tableRef = _a.tableRef, start = _a.start, domAtPos = _a.domAtPos;
    if (colgroup_1.hasTableBeenResized(table)) {
        return {
            cols: editor_common_1.calcTableColumnWidths(table).map(function (width, index) { return ({
                width: width === 0 ? editor_common_1.tableNewColumnMinWidth : width,
                minWidth: width === 0 ? editor_common_1.tableNewColumnMinWidth : minWidth,
                index: index,
            }); }),
            maxSize: maxSize,
        };
    }
    // Getting the resize state from DOM
    var colgroupChildren = colgroup_1.insertColgroupFromNode(tableRef, table);
    return {
        cols: Array.from(colgroupChildren).map(function (_, index) {
            var cellsRefs = column_state_1.getCellsRefsInColumn(index, table, start, domAtPos);
            return column_state_1.getColumnStateFromDOM(cellsRefs, index, minWidth);
        }),
        maxSize: maxSize,
    };
};
// Resize a given column by an amount from the current state
exports.resizeColumn = function (resizeState, colIndex, amount, tableRef, selectedColumns) {
    var newState = amount > 0
        ? resize_logic_1.growColumn(resizeState, colIndex, amount, selectedColumns)
        : amount < 0
            ? resize_logic_1.shrinkColumn(resizeState, colIndex, amount, selectedColumns)
            : resizeState;
    exports.updateColgroup(newState, tableRef);
    return newState;
};
// updates Colgroup DOM node with new widths
exports.updateColgroup = function (state, tableRef) {
    var cols = tableRef.querySelectorAll('col');
    state.cols
        .filter(function (column) { return column && !!column.width; }) // if width is 0, we dont want to apply that.
        .forEach(function (column, i) {
        if (cols[i]) {
            cols[i].style.width = column.width + "px";
        }
    });
};
exports.getTotalWidth = function (_a) {
    var cols = _a.cols;
    return cols.reduce(function (totalWidth, col) { return totalWidth + col.width; }, 0);
};
// adjust columns to take up the total width
// difference in total columns widths vs table width happens due to the "Math.floor"
exports.adjustColumnsWidths = function (resizeState, maxSize) {
    var totalWidth = exports.getTotalWidth(resizeState);
    var diff = maxSize - totalWidth;
    if (diff > 0 || (diff < 0 && Math.abs(diff) < editor_common_1.tableCellMinWidth)) {
        var updated_1 = false;
        return tslib_1.__assign(tslib_1.__assign({}, resizeState), { cols: resizeState.cols.map(function (col) {
                if (!updated_1 && col.width + diff > col.minWidth) {
                    updated_1 = true;
                    return tslib_1.__assign(tslib_1.__assign({}, col), { width: col.width + diff });
                }
                return col;
            }) });
    }
    return resizeState;
};
exports.evenAllColumnsWidths = function (resizeState) {
    var maxSize = exports.getTotalWidth(resizeState);
    var evenWidth = Math.floor(maxSize / resizeState.cols.length);
    var cols = resizeState.cols.map(function (col) { return (tslib_1.__assign(tslib_1.__assign({}, col), { width: evenWidth })); });
    return exports.adjustColumnsWidths(tslib_1.__assign(tslib_1.__assign({}, resizeState), { cols: cols }), maxSize);
};
exports.bulkColumnsResize = function (resizeState, columnsIndexes, sourceColumnIndex) {
    var currentTableWidth = exports.getTotalWidth(resizeState);
    var colIndex = columnsIndexes.indexOf(sourceColumnIndex) > -1
        ? sourceColumnIndex
        : sourceColumnIndex + 1;
    var sourceCol = resizeState.cols[colIndex];
    var seenColumns = {};
    var widthsDiffs = [];
    var cols = resizeState.cols.map(function (col) {
        if (columnsIndexes.indexOf(col.index) > -1) {
            var diff = col.width - sourceCol.width;
            if (diff !== 0) {
                widthsDiffs.push(diff);
            }
            return tslib_1.__assign(tslib_1.__assign({}, col), { width: sourceCol.width });
        }
        return col;
    });
    var newState = tslib_1.__assign(tslib_1.__assign({}, resizeState), { cols: cols.map(function (col) {
            if (columnsIndexes.indexOf(col.index) > -1 ||
                // take from prev columns only if dragging the first handle to the left
                (columnsIndexes.indexOf(sourceColumnIndex) > -1 && col.index < colIndex)) {
                return col;
            }
            while (widthsDiffs.length) {
                var diff = widthsDiffs.shift() || 0;
                var column = seenColumns[col.index] || col;
                var maybeWidth = column.width + diff;
                if (maybeWidth > column.minWidth) {
                    seenColumns[column.index] = tslib_1.__assign(tslib_1.__assign({}, column), { width: maybeWidth });
                }
                else {
                    widthsDiffs.push(maybeWidth - column.minWidth);
                    seenColumns[column.index] = tslib_1.__assign(tslib_1.__assign({}, column), { width: column.minWidth });
                    break;
                }
            }
            return seenColumns[col.index] || col;
        }) });
    // minimum possible table widths at the current layout
    var minTableWidth = resizeState.maxSize;
    // new table widths after bulk resize
    var newTotalWidth = exports.getTotalWidth(newState);
    // when all columns are selected, what do we do when sum of columns widths is lower than min possible table widths?
    if (columnsIndexes.length === resizeState.cols.length &&
        newTotalWidth < minTableWidth) {
        // table is not in overflow -> normal resize of a single column
        if (currentTableWidth === minTableWidth) {
            return resizeState;
        }
        // table is in overflow: keep the dragged column at its widths and evenly distribute columns
        // to recover from overflow state
        else {
            var columnWidth_1 = Math.floor((minTableWidth - sourceCol.width) / (newState.cols.length - 1));
            newState = tslib_1.__assign(tslib_1.__assign({}, resizeState), { cols: newState.cols.map(function (col) {
                    if (col.index === sourceCol.index) {
                        return col;
                    }
                    return tslib_1.__assign(tslib_1.__assign({}, col), { width: columnWidth_1 });
                }) });
        }
    }
    // fix total table widths by adding missing pixels to columns widths here and there
    return exports.adjustColumnsWidths(newState, resizeState.maxSize);
};
exports.areColumnsEven = function (resizeState) {
    var newResizeState = exports.evenAllColumnsWidths(resizeState);
    return newResizeState.cols.every(function (col, i) { return col.width === resizeState.cols[i].width; });
};
//# sourceMappingURL=resize-state.js.map