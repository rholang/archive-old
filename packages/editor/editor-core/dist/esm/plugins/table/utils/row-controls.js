import { __assign } from "tslib";
import { getSelectionRect, isRowSelected, isTableSelected, findTable, safeInsert, } from 'prosemirror-utils';
import { CellSelection, TableMap } from 'prosemirror-tables';
import { tableDeleteButtonSize } from '../ui/styles';
import { TableCssClassName as ClassName } from '../types';
export var getRowHeights = function (tableRef) {
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
export var isRowDeleteButtonVisible = function (selection) {
    if (!isTableSelected(selection) &&
        (selection instanceof CellSelection && selection.isRowSelection())) {
        return true;
    }
    return false;
};
export var getRowDeleteButtonParams = function (rowsHeights, selection) {
    var rect = getSelectionRect(selection);
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
    var top = offset + height / 2 - tableDeleteButtonSize / 2;
    return { top: top, indexes: indexes };
};
export var getRowsParams = function (rowsHeights) {
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
export var getRowClassNames = function (index, selection, hoveredRows, isInDanger, isResizing) {
    if (hoveredRows === void 0) { hoveredRows = []; }
    var classNames = [];
    if (isRowSelected(index)(selection) ||
        (hoveredRows.indexOf(index) > -1 && !isResizing)) {
        classNames.push(ClassName.HOVERED_CELL_ACTIVE);
        if (isInDanger) {
            classNames.push(ClassName.HOVERED_CELL_IN_DANGER);
        }
    }
    return classNames.join(' ');
};
export var copyPreviousRow = function (schema) { return function (insertNewRowIndex) { return function (tr) {
    var table = findTable(tr.selection);
    if (!table) {
        return tr;
    }
    var map = TableMap.get(table.node);
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
        var attributes = __assign(__assign({}, node.attrs), { colspan: 1, rowspan: 1 });
        var newCell = node.type.createAndFill(attributes);
        if (!newCell) {
            return tr;
        }
        if (cellsPositionsInNextRow.indexOf(pos) > -1) {
            fixRowspans.push({ pos: documentCellPos, node: node });
        }
        else if (cellsInRow.indexOf(pos) > -1) {
            if (node.attrs.colspan > 1) {
                var newCellWithColspanFixed = node.type.createAndFill(__assign(__assign({}, attributes), { colspan: node.attrs.colspan }));
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
        tr.setNodeMarkup(cell.pos, undefined, __assign(__assign({}, cell.node.attrs), { rowspan: cell.node.attrs.rowspan + 1 }));
    });
    var cloneRow = tableNode.child(copyPreviousRowIndex);
    var rowPos = table.start;
    for (var i = 0; i < insertNewRowIndex; i++) {
        rowPos += tableNode.child(i).nodeSize;
    }
    return safeInsert(tableRow.createChecked(cloneRow.attrs, cells, cloneRow.marks), rowPos)(tr);
}; }; };
//# sourceMappingURL=row-controls.js.map