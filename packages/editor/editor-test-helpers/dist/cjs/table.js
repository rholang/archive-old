"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_tables_1 = require("prosemirror-tables");
exports.selectCell = function (column, row) { return function (state, dispatch) {
    var tr = state.tr;
    var pos = prosemirror_utils_1.getCellsInColumn(column)(tr.selection)[row].pos;
    var $anchor = tr.doc.resolve(pos);
    var $head = tr.doc.resolve(pos);
    dispatch(tr.setSelection(new prosemirror_tables_1.CellSelection($anchor, $head)));
    return true;
}; };
exports.selectColumns = function (columnIndexes) { return function (state, dispatch) {
    var tr = state.tr;
    var cells = columnIndexes.reduce(function (acc, index) {
        var cells = prosemirror_utils_1.getCellsInColumn(index)(tr.selection);
        return cells ? acc.concat(cells) : acc;
    }, []);
    var $anchor = tr.doc.resolve(cells[0].pos);
    var $head = tr.doc.resolve(cells[cells.length - 1].pos);
    dispatch(tr.setSelection(new prosemirror_tables_1.CellSelection($anchor, $head)));
    return true;
}; };
exports.selectRows = function (rowIndexes) { return function (state, dispatch) {
    var tr = state.tr;
    var cells = rowIndexes.reduce(function (acc, index) {
        var cells = prosemirror_utils_1.getCellsInRow(index)(tr.selection);
        return cells ? acc.concat(cells) : acc;
    }, []);
    var $anchor = tr.doc.resolve(cells[0].pos);
    var $head = tr.doc.resolve(cells[cells.length - 1].pos);
    dispatch(tr.setSelection(new prosemirror_tables_1.CellSelection($anchor, $head)));
    return true;
}; };
//# sourceMappingURL=table.js.map