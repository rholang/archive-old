"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_commands_1 = require("prosemirror-commands");
var prosemirror_inputrules_1 = require("prosemirror-inputrules");
var prosemirror_history_1 = require("prosemirror-history");
var keymaps = tslib_1.__importStar(require("../../../keymaps"));
var commands = tslib_1.__importStar(require("../../../commands"));
var analytics_1 = require("../../../analytics");
var blockTypes = tslib_1.__importStar(require("../types"));
var keymap_1 = require("../../../utils/keymap");
var commands_1 = require("../../block-type/commands");
var analytics_2 = require("../../analytics");
var analyticsEventName = function (blockTypeName, eventSource) {
    return "atlassian.editor.format." + blockTypeName + "." + eventSource;
};
var tryUndoInputRuleElseUndoHistory = prosemirror_commands_1.chainCommands(prosemirror_inputrules_1.undoInputRule, prosemirror_history_1.undo);
function keymapPlugin(schema) {
    var list = {};
    keymaps.bindKeymapWithCommand(keymaps.insertNewLine.common, analytics_1.trackAndInvoke('atlassian.editor.newline.keyboard', commands.insertNewLineWithAnalytics), list);
    keymaps.bindKeymapWithCommand(keymaps.moveUp.common, analytics_1.trackAndInvoke('atlassian.editor.moveup.keyboard', commands.createNewParagraphAbove), list);
    keymaps.bindKeymapWithCommand(keymaps.moveDown.common, analytics_1.trackAndInvoke('atlassian.editor.movedown.keyboard', commands.createNewParagraphBelow), list);
    keymaps.bindKeymapWithCommand(keymaps.findKeyMapForBrowser(keymaps.redo), analytics_1.trackAndInvoke('atlassian.editor.redo.keyboard', prosemirror_history_1.redo), list);
    keymaps.bindKeymapWithCommand(keymaps.undo.common, analytics_1.trackAndInvoke('atlassian.editor.undo.keyboard', tryUndoInputRuleElseUndoHistory), list);
    keymaps.bindKeymapWithCommand(keymaps.findKeyMapForBrowser(keymaps.redoBarred), commands.preventDefault(), list);
    keymaps.bindKeymapWithCommand(keymaps.backspace.common, commands_1.cleanUpAtTheStartOfDocument, list);
    if (schema.nodes[blockTypes.BLOCK_QUOTE.nodeName]) {
        keymaps.bindKeymapWithCommand(keymaps.findShortcutByKeymap(keymaps.toggleBlockQuote), analytics_1.trackAndInvoke(analyticsEventName(blockTypes.BLOCK_QUOTE.name, analytics_2.INPUT_METHOD.KEYBOARD), commands_1.insertBlockTypesWithAnalytics(blockTypes.BLOCK_QUOTE.name, analytics_2.INPUT_METHOD.KEYBOARD)), list);
    }
    return keymap_1.keymap(list);
}
exports.default = keymapPlugin;
//# sourceMappingURL=keymap.js.map