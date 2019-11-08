"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #region Imports
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_utils_1 = require("prosemirror-utils");
// #endregion
// #region Commands
exports.clearMultipleCells = function (targetCellPosition) { return function (state, dispatch) {
    var cursorPos;
    var tr = state.tr;
    if (prosemirror_utils_1.isCellSelection(tr.selection)) {
        var selection = tr.selection;
        selection.forEachCell(function (_node, pos) {
            var $pos = tr.doc.resolve(tr.mapping.map(pos + 1));
            tr = prosemirror_utils_1.emptyCell(prosemirror_utils_1.findCellClosestToPos($pos), state.schema)(tr);
        });
        cursorPos = selection.$headCell.pos;
    }
    else if (targetCellPosition) {
        var cell = prosemirror_utils_1.findCellClosestToPos(tr.doc.resolve(targetCellPosition + 1));
        tr = prosemirror_utils_1.emptyCell(cell, state.schema)(tr);
        cursorPos = cell.pos;
    }
    if (tr.docChanged && cursorPos) {
        var $pos = tr.doc.resolve(tr.mapping.map(cursorPos));
        var textSelection = prosemirror_state_1.Selection.findFrom($pos, 1, true);
        if (textSelection) {
            tr.setSelection(textSelection);
        }
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    }
    return false;
}; };
exports.clearSelection = function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr
            .setSelection(prosemirror_state_1.Selection.near(state.selection.$from))
            .setMeta('addToHistory', false));
    }
    return true;
};
// #endregion
//# sourceMappingURL=clear.js.map