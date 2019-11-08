"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_keymap_1 = require("prosemirror-keymap");
var prosemirror_tables_1 = require("prosemirror-tables");
var commands_1 = require("../commands");
var keymaps = tslib_1.__importStar(require("../../../keymaps"));
var analytics_1 = require("../../analytics");
var commands_with_analytics_1 = require("../commands-with-analytics");
var createTableWithAnalytics = function () {
    return analytics_1.withAnalytics({
        action: analytics_1.ACTION.INSERTED,
        actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: analytics_1.ACTION_SUBJECT_ID.TABLE,
        attributes: { inputMethod: analytics_1.INPUT_METHOD.SHORTCUT },
        eventType: analytics_1.EVENT_TYPE.TRACK,
    })(commands_1.createTable);
};
function keymapPlugin() {
    var list = {};
    keymaps.bindKeymapWithCommand(keymaps.nextCell.common, commands_1.goToNextCell(1), list);
    keymaps.bindKeymapWithCommand(keymaps.previousCell.common, commands_1.goToNextCell(-1), list);
    keymaps.bindKeymapWithCommand(keymaps.toggleTable.common, createTableWithAnalytics(), list);
    keymaps.bindKeymapWithCommand(keymaps.backspace.common, commands_with_analytics_1.emptyMultipleCellsWithAnalytics(analytics_1.INPUT_METHOD.KEYBOARD), list);
    keymaps.bindKeymapWithCommand(keymaps.backspace.common, commands_1.moveCursorBackward, list);
    // Add row/column shortcuts
    keymaps.bindKeymapWithCommand(keymaps.addRowBefore.common, commands_1.triggerUnlessTableHeader(prosemirror_tables_1.addRowBefore), list);
    keymaps.bindKeymapWithCommand(keymaps.addRowAfter.common, prosemirror_tables_1.addRowAfter, list);
    keymaps.bindKeymapWithCommand(keymaps.addColumnBefore.common, commands_1.triggerUnlessTableHeader(prosemirror_tables_1.addColumnBefore), list);
    keymaps.bindKeymapWithCommand(keymaps.addColumnAfter.common, prosemirror_tables_1.addColumnAfter, list);
    return prosemirror_keymap_1.keymap(list);
}
exports.keymapPlugin = keymapPlugin;
exports.default = keymapPlugin;
//# sourceMappingURL=keymap.js.map