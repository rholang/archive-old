"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_tables_1 = require("prosemirror-tables");
exports.getMergedCellsPositions = function (tr) {
    var table = prosemirror_utils_1.findTable(tr.selection);
    if (!table) {
        return [];
    }
    var map = prosemirror_tables_1.TableMap.get(table.node);
    var cellPositions = new Set();
    var mergedCells = [];
    map.map.forEach(function (value) {
        if (cellPositions.has(value)) {
            mergedCells.push(value);
        }
        else {
            cellPositions.add(value);
        }
    });
    return mergedCells;
};
//# sourceMappingURL=table.js.map