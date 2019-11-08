"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_keymap_1 = require("prosemirror-keymap");
var keymaps = tslib_1.__importStar(require("../../../keymaps"));
var commands = tslib_1.__importStar(require("../../../commands"));
var analytics_1 = require("../../../analytics");
var analytics_2 = require("../../analytics");
var insertRuleWithAnalytics = function () {
    return analytics_2.withAnalytics({
        action: analytics_2.ACTION.INSERTED,
        actionSubject: analytics_2.ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.DIVIDER,
        attributes: { inputMethod: analytics_2.INPUT_METHOD.SHORTCUT },
        eventType: analytics_2.EVENT_TYPE.TRACK,
    })(commands.insertRule());
};
function keymapPlugin() {
    var list = {};
    keymaps.bindKeymapWithCommand(keymaps.insertRule.common, analytics_1.trackAndInvoke('atlassian.editor.format.horizontalrule.keyboard', insertRuleWithAnalytics()), list);
    keymaps.bindKeymapWithCommand(keymaps.escape.common, function () { return true; }, list);
    return prosemirror_keymap_1.keymap(list);
}
exports.keymapPlugin = keymapPlugin;
exports.default = keymapPlugin;
//# sourceMappingURL=keymap.js.map