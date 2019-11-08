"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_keymap_1 = require("prosemirror-keymap");
var commands_1 = require("../../../utils/commands");
var type_ahead_1 = require("../../../plugins/type-ahead");
var utils_1 = require("../../../utils");
exports.newlinePreserveMarksKey = new prosemirror_state_1.PluginKey('newlinePreserveMarksPlugin');
var isSelectionAligned = function (state) {
    return !!state.selection.$to.parent.marks.find(function (m) { return m.type === state.schema.marks.alignment; });
};
var isTypeaheadNotDisplaying = function (state) {
    return !type_ahead_1.typeAheadPluginKey.getState(state).active;
};
var splitBlockPreservingMarks = function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr.split(state.tr.mapping.map(state.selection.$from.pos), 1));
    }
    return true;
};
exports.default = (function () {
    return new prosemirror_state_1.Plugin({
        key: exports.newlinePreserveMarksKey,
        props: {
            handleKeyDown: prosemirror_keymap_1.keydownHandler({
                Enter: commands_1.filter([
                    utils_1.isSelectionEndOfParagraph,
                    isSelectionAligned,
                    isTypeaheadNotDisplaying,
                ], splitBlockPreservingMarks),
            }),
        },
    });
});
//# sourceMappingURL=newline-preserve-marks.js.map