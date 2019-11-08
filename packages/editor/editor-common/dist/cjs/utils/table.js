"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function calcTableColumnWidths(node) {
    var tableColumnWidths = [];
    var firstRow = node.firstChild;
    if (firstRow) {
        // Sanity validation, but it should always have a first row
        // Iterate for the cells in the first row
        firstRow.forEach(function (colNode) {
            var colwidth = colNode.attrs.colwidth || [0];
            // If we have colwidth, we added it
            if (colwidth) {
                tableColumnWidths = tslib_1.__spread(tableColumnWidths, colwidth);
            }
        });
    }
    return tableColumnWidths;
}
exports.calcTableColumnWidths = calcTableColumnWidths;
function hasMergedCell(tableNode) {
    var hasSpan = false;
    tableNode.descendants(function (node) {
        if (node.type.name === 'tableRow') {
            return true;
        }
        var _a = node.attrs, colspan = _a.colspan, rowspan = _a.rowspan;
        if (colspan > 1 || rowspan > 1) {
            hasSpan = true;
        }
        return false;
    });
    return hasSpan;
}
exports.hasMergedCell = hasMergedCell;
function convertProsemirrorTableNodeToArrayOfRows(tableNode) {
    var result = [];
    tableNode.forEach(function (rowNode) {
        if (rowNode.type.name === 'tableRow') {
            var row_1 = [];
            rowNode.forEach(function (n) { return row_1.push(n); });
            result.push(row_1);
        }
    });
    return result;
}
exports.convertProsemirrorTableNodeToArrayOfRows = convertProsemirrorTableNodeToArrayOfRows;
//# sourceMappingURL=table.js.map