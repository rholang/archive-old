"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
function getSelectedTableInfo(selection) {
    var map;
    var totalRowCount = 0;
    var totalColumnCount = 0;
    var table = prosemirror_utils_1.findTable(selection);
    if (table) {
        map = prosemirror_tables_1.TableMap.get(table.node);
        totalRowCount = map.height;
        totalColumnCount = map.width;
    }
    return {
        table: table,
        map: map,
        totalRowCount: totalRowCount,
        totalColumnCount: totalColumnCount,
    };
}
exports.getSelectedTableInfo = getSelectedTableInfo;
function getSelectedCellInfo(selection) {
    var horizontalCells = 1;
    var verticalCells = 1;
    var totalCells = 1;
    var _a = getSelectedTableInfo(selection), table = _a.table, map = _a.map, totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
    if (table && map) {
        var rect = prosemirror_utils_1.getSelectionRect(selection);
        if (rect) {
            totalCells = map.cellsInRect(rect).length;
            horizontalCells = rect.right - rect.left;
            verticalCells = rect.bottom - rect.top;
        }
    }
    return {
        totalRowCount: totalRowCount,
        totalColumnCount: totalColumnCount,
        horizontalCells: horizontalCells,
        verticalCells: verticalCells,
        totalCells: totalCells,
    };
}
exports.getSelectedCellInfo = getSelectedCellInfo;
//# sourceMappingURL=analytics.js.map