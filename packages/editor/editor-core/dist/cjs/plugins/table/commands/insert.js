"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #region Imports
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var main_1 = require("../pm-plugins/main");
var utils_1 = require("../utils");
// #endregion
// #region Commands
exports.insertColumn = function (column) { return function (state, dispatch) {
    var tr = prosemirror_utils_1.addColumnAt(column)(state.tr);
    var table = prosemirror_utils_1.findTable(tr.selection);
    if (!table) {
        return false;
    }
    // move the cursor to the newly created column
    var pos = prosemirror_tables_1.TableMap.get(table.node).positionAt(0, column, table.node);
    if (dispatch) {
        dispatch(tr.setSelection(prosemirror_state_1.Selection.near(tr.doc.resolve(table.start + pos))));
    }
    return true;
}; };
exports.insertRow = function (row) { return function (state, dispatch) {
    // Don't clone the header row
    var headerRowEnabled = utils_1.checkIfHeaderRowEnabled(state);
    var clonePreviousRow = (headerRowEnabled && row > 1) || (!headerRowEnabled && row > 0);
    var tr = clonePreviousRow
        ? utils_1.copyPreviousRow(state.schema)(row)(state.tr)
        : prosemirror_utils_1.addRowAt(row)(state.tr);
    var table = prosemirror_utils_1.findTable(tr.selection);
    if (!table) {
        return false;
    }
    // move the cursor to the newly created row
    var pos = prosemirror_tables_1.TableMap.get(table.node).positionAt(row, 0, table.node);
    if (dispatch) {
        dispatch(tr.setSelection(prosemirror_state_1.Selection.near(tr.doc.resolve(table.start + pos))));
    }
    return true;
}; };
exports.createTable = function (state, dispatch) {
    if (!main_1.getPluginState(state)) {
        return false;
    }
    var table = prosemirror_utils_1.createTable(state.schema);
    if (dispatch) {
        dispatch(prosemirror_utils_1.safeInsert(table)(state.tr).scrollIntoView());
    }
    return true;
};
// #endregion
//# sourceMappingURL=insert.js.map