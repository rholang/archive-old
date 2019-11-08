"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_keymap_1 = require("prosemirror-keymap");
var keymaps = tslib_1.__importStar(require("../../../keymaps"));
var analytics_1 = require("../../../analytics");
var commands_1 = require("../commands");
var analytics_2 = require("../../analytics");
function keymapPlugin() {
    var list = {};
    keymaps.bindKeymapWithCommand(keymaps.findShortcutByKeymap(keymaps.toggleOrderedList), analytics_1.trackAndInvoke('atlassian.editor.format.list.numbered.keyboard', commands_1.toggleListCommandWithAnalytics(analytics_2.INPUT_METHOD.KEYBOARD, 'orderedList')), list);
    keymaps.bindKeymapWithCommand(keymaps.findShortcutByKeymap(keymaps.toggleBulletList), analytics_1.trackAndInvoke('atlassian.editor.format.list.bullet.keyboard', commands_1.toggleListCommandWithAnalytics(analytics_2.INPUT_METHOD.KEYBOARD, 'bulletList')), list);
    keymaps.bindKeymapWithCommand(keymaps.indentList.common, analytics_1.trackAndInvoke('atlassian.editor.format.list.indent.keyboard', commands_1.indentList()), list);
    keymaps.bindKeymapWithCommand(keymaps.outdentList.common, analytics_1.trackAndInvoke('atlassian.editor.format.list.outdent.keyboard', commands_1.outdentList()), list);
    keymaps.bindKeymapWithCommand(keymaps.enter.common, commands_1.enterKeyCommand, list);
    keymaps.bindKeymapWithCommand(keymaps.backspace.common, commands_1.backspaceKeyCommand, list);
    return prosemirror_keymap_1.keymap(list);
}
exports.keymapPlugin = keymapPlugin;
exports.default = keymapPlugin;
//# sourceMappingURL=keymap.js.map