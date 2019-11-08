"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_state_1 = require("prosemirror-state");
function insertTypeAheadQuery(trigger, replaceLastChar) {
    if (replaceLastChar === void 0) { replaceLastChar = false; }
    return function (state, dispatch) {
        if (!dispatch) {
            return false;
        }
        if (replaceLastChar) {
            var tr = state.tr, selection = state.selection;
            var marks = selection.$from.marks();
            dispatch(tr
                .setSelection(prosemirror_state_1.TextSelection.create(tr.doc, selection.$from.pos - 1, selection.$from.pos))
                .replaceSelectionWith(state.doc.type.schema.text(trigger, tslib_1.__spread([
                state.schema.marks.typeAheadQuery.create({ trigger: trigger })
            ], marks)), false));
            return true;
        }
        dispatch(prosemirror_utils_1.safeInsert(state.schema.text(trigger, [
            state.schema.marks.typeAheadQuery.create({ trigger: trigger }),
        ]))(state.tr));
        return true;
    };
}
exports.insertTypeAheadQuery = insertTypeAheadQuery;
//# sourceMappingURL=insert-query.js.map