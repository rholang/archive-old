"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var keymaps = tslib_1.__importStar(require("../../../keymaps"));
var analytics_1 = require("../../../analytics");
var commands = tslib_1.__importStar(require("../commands/text-formatting"));
var analytics_2 = require("../../analytics");
var keymap_1 = require("../../../utils/keymap");
function keymapPlugin(schema) {
    var list = {};
    if (schema.marks.strong) {
        var eventName = analyticsEventName(schema.marks.strong);
        keymaps.bindKeymapWithCommand(keymaps.toggleBold.common, analytics_1.trackAndInvoke(eventName, commands.toggleStrongWithAnalytics({
            inputMethod: analytics_2.INPUT_METHOD.SHORTCUT,
        })), list);
    }
    if (schema.marks.em) {
        var eventName = analyticsEventName(schema.marks.em);
        keymaps.bindKeymapWithCommand(keymaps.toggleItalic.common, analytics_1.trackAndInvoke(eventName, commands.toggleEmWithAnalytics({ inputMethod: analytics_2.INPUT_METHOD.SHORTCUT })), list);
    }
    if (schema.marks.code) {
        var eventName = analyticsEventName(schema.marks.code);
        keymaps.bindKeymapWithCommand(keymaps.toggleCode.common, analytics_1.trackAndInvoke(eventName, commands.toggleCodeWithAnalytics({
            inputMethod: analytics_2.INPUT_METHOD.SHORTCUT,
        })), list);
    }
    if (schema.marks.strike) {
        var eventName = analyticsEventName(schema.marks.strike);
        keymaps.bindKeymapWithCommand(keymaps.toggleStrikethrough.common, analytics_1.trackAndInvoke(eventName, commands.toggleStrikeWithAnalytics({
            inputMethod: analytics_2.INPUT_METHOD.SHORTCUT,
        })), list);
    }
    if (schema.marks.underline) {
        var eventName = analyticsEventName(schema.marks.underline);
        keymaps.bindKeymapWithCommand(keymaps.toggleUnderline.common, analytics_1.trackAndInvoke(eventName, commands.toggleUnderlineWithAnalytics({
            inputMethod: analytics_2.INPUT_METHOD.SHORTCUT,
        })), list);
    }
    return keymap_1.keymap(list);
}
exports.default = keymapPlugin;
function analyticsEventName(markType) {
    return "atlassian.editor.format." + markType.name + ".keyboard";
}
//# sourceMappingURL=keymap.js.map