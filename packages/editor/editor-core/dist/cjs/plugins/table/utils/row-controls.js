"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_tables_1 = require("prosemirror-tables");
var styles_1 = require("../ui/styles");
var types_1 = require("../types");
exports.getRowHeights = function (tableRef) {
    var heights = [];
    if (tableRef.lastChild) {
        var rows = tableRef.lastChild.childNodes;
        for (var i = 0, count = rows.length; i < count; i++) {
            var cell = rows[i];
            var rect = cell.getBoundingClientRect();
            heights[i] = (rect ? rect.height : cell.offsetHeight) + 1;
        }
    }
    return heights;
};
exports.isRowDeleteButtonVisible = function (selection) {
    if (!prosemirror_utils_1.isTableSelected(selection) &&
        (selection instanceof prosemirror_tables_1.CellSelection && selection.isRowSelection())) {
        return true;
    }
    return false;
};
exports.getRowDeleteButtonParams = function (rowsHeights, selection) {
    var rect = prosemirror_utils_1.getSelectionRect(selection);
    if (!rect) {
        return null;
    }
    var height = 0;
    var offset = 0;
    // find the rows before the selection
    for (var i = 0; i < rect.top; i++) {
        var rowHeight = rowsHeights[i];
        if (rowHeight) {
            offset += rowHeight - 1;
        }
    }
    // these are the selected rows widths
    var indexes = [];
    for (var i = rect.top; i < rect.bottom; i++) {
        var rowHeight = rowsHeights[i];
        if (rowHeight) {
            height += rowHeight - 1;
            indexes.push(i);
        }
    }
    var top = offset + height / 2 - styles_1.tableDeleteButtonSize / 2;
    return { top: top, indexes: indexes };
};
exports.getRowsParams = function (rowsHeights) {
    var rows = [];
    for (var i = 0, count = rowsHeights.length; i < count; i++) {
        var height = rowsHeights[i];
        if (!height) {
            continue;
        }
        var endIndex = rowsHeights.length;
        for (var k = i + 1, count_1 = rowsHeights.length; k < count_1; k++) {
            if (rowsHeights[k]) {
                endIndex = k;
                break;
            }
        }
        rows.push({ startIndex: i, endIndex: endIndex, height: height });
    }
    return rows;
};
exports.getRowClassNames = function (index, selection, hoveredRows, isInDanger, isResizing) {
    if (hoveredRows === void 0) { hoveredRows = []; }
    var classNames = [];
    if (prosemirror_utils_1.isRowSelected(index)(selection) ||
        (hoveredRows.indexOf(index) > -1 && !isResizing)) {
        classNames.push(types_1.TableCssClassName.HOVERED_CELL_ACTIVE);
        if (isInDanger) {
            classNames.push(types_1.TableCssClassName.HOVERED_CELL_IN_DANGER);
        }
    }
    return classNames.join(' ');
};
exports.copyPreviousRow = function (schema) { return function (insertNewRowIndex) { return function (tr) {
    var table = prosemirror_utils_1.findTable(tr.selection);
    if (!table) {
        return tr;
    }
    var map = prosemirror_tables_1.TableMap.get(table.node);
    var copyPreviousRowIndex = insertNewRowIndex - 1;
    if (insertNewRowIndex <= 0) {
        throw Error("Row Index less or equal 0 isn't not allowed since there is not a previous to copy");
    }
    if (insertNewRowIndex > map.height) {
        return tr;
    }
    var tableNode = table.node;
    var tableRow = schema.nodes.tableRow;
    var cellsInRow = map.cellsInRect({
        left: 0,
        right: map.width,
        top: copyPreviousRowIndex,
        bottom: copyPreviousRowIndex + 1,
    });
    var offsetIndexPosition = copyPreviousRowIndex * map.width;
    var offsetNextLineIndexPosition = insertNewRowIndex * map.width;
    var cellsPositionsInOriginalRow = map.map.slice(offsetIndexPosition, offsetIndexPosition + map.width);
    var cellsPositionsInNextRow = map.map.slice(offsetNextLineIndexPosition, offsetNextLineIndexPosition + map.width);
    var cells = [];
    var fixRowspans = [];
    for (var i = 0; i < cellsPositionsInOriginalRow.length;) {
        var pos = cellsPositionsInOriginalRow[i];
        var documentCellPos = pos + table.start;
        var node = tr.doc.nodeAt(documentCellPos);
        if (!node) {
            continue;
        }
        var attributes = tslib_1.__assign(tslib_1.__assign({}, node.attrs), { colspan: 1, rowspan: 1 });
        var newCell = node.type.createAndFill(attributes);
        if (!newCell) {
            return tr;
        }
        if (cellsPositionsInNextRow.indexOf(pos) > -1) {
            fixRowspans.push({ pos: documentCellPos, node: node });
        }
        else if (cellsInRow.indexOf(pos) > -1) {
            if (node.attrs.colspan > 1) {
                var newCellWithColspanFixed = node.type.createAndFill(tslib_1.__assign(tslib_1.__assign({}, attributes), { colspan: node.attrs.colspan }));
                if (!newCellWithColspanFixed) {
                    return tr;
                }
                cells.push(newCellWithColspanFixed);
                i = i + node.attrs.colspan;
                continue;
            }
            cells.push(newCell);
        }
        else {
            cells.push(newCell);
        }
        i++;
    }
    fixRowspans.forEach(function (cell) {
        tr.setNodeMarkup(cell.pos, undefined, tslib_1.__assign(tslib_1.__assign({}, cell.node.attrs), { rowspan: cell.node.attrs.rowspan + 1 }));
    });
    var cloneRow = tableNode.child(copyPreviousRowIndex);
    var rowPos = table.start;
    for (var i = 0; i < insertNewRowIndex; i++) {
        rowPos += tableNode.child(i).nodeSize;
    }
    return prosemirror_utils_1.safeInsert(tableRow.createChecked(cloneRow.attrs, cells, cloneRow.marks), rowPos)(tr);
}; }; };
//# sourceMappingURL=row-controls.js.map