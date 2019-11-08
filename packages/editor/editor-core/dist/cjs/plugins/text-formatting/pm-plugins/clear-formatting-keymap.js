"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_keymap_1 = require("prosemirror-keymap");
var keymaps = tslib_1.__importStar(require("../../../keymaps"));
var analytics_1 = require("../../../analytics");
var clear_formatting_1 = require("../commands/clear-formatting");
var analytics_2 = require("../../analytics");
function keymapPlugin() {
    var list = {};
    keymaps.bindKeymapWithCommand(keymaps.clearFormatting.common, analytics_1.trackAndInvoke('atlassian.editor.format.clear.keyboard', clear_formatting_1.clearFormattingWithAnalytics(analytics_2.INPUT_METHOD.SHORTCUT)), list);
    return prosemirror_keymap_1.keymap(list);
}
exports.keymapPlugin = keymapPlugin;
exports.default = keymapPlugin;
//# sourceMappingURL=clear-formatting-keymap.js.map