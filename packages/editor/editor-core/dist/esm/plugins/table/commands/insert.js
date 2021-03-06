// #region Imports
import { Selection } from 'prosemirror-state';
import { TableMap } from 'prosemirror-tables';
import { addColumnAt, addRowAt, createTable as createTableNode, findTable, safeInsert, } from 'prosemirror-utils';
import { getPluginState } from '../pm-plugins/main';
import { checkIfHeaderRowEnabled, copyPreviousRow } from '../utils';
// #endregion
// #region Commands
export var insertColumn = function (column) { return function (state, dispatch) {
    var tr = addColumnAt(column)(state.tr);
    var table = findTable(tr.selection);
    if (!table) {
        return false;
    }
    // move the cursor to the newly created column
    var pos = TableMap.get(table.node).positionAt(0, column, table.node);
    if (dispatch) {
        dispatch(tr.setSelection(Selection.near(tr.doc.resolve(table.start + pos))));
    }
    return true;
}; };
export var insertRow = function (row) { return function (state, dispatch) {
    // Don't clone the header row
    var headerRowEnabled = checkIfHeaderRowEnabled(state);
    var clonePreviousRow = (headerRowEnabled && row > 1) || (!headerRowEnabled && row > 0);
    var tr = clonePreviousRow
        ? copyPreviousRow(state.schema)(row)(state.tr)
        : addRowAt(row)(state.tr);
    var table = findTable(tr.selection);
    if (!table) {
        return false;
    }
    // move the cursor to the newly created row
    var pos = TableMap.get(table.node).positionAt(row, 0, table.node);
    if (dispatch) {
        dispatch(tr.setSelection(Selection.near(tr.doc.resolve(table.start + pos))));
    }
    return true;
}; };
export var createTable = function (state, dispatch) {
    if (!getPluginState(state)) {
        return false;
    }
    var table = createTableNode(state.schema);
    if (dispatch) {
        dispatch(safeInsert(table)(state.tr).scrollIntoView());
    }
    return true;
};
// #endregion
//# sourceMappingURL=insert.js.map