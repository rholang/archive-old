"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_keymap_1 = require("prosemirror-keymap");
var keymaps = tslib_1.__importStar(require("../../keymaps"));
var utils_1 = require("./utils");
function keymapPlugin() {
    var list = {};
    keymaps.bindKeymapWithCommand(keymaps.enter.common, consumeKeyEvent, list);
    keymaps.bindKeymapWithCommand(keymaps.tab.common, consumeKeyEvent, list);
    return prosemirror_keymap_1.keymap(list);
}
exports.keymapPlugin = keymapPlugin;
// consume event to prevent status node problems with positioning and selection
var consumeKeyEvent = function (state, _dispatch) {
    return !!utils_1.mayGetStatusAtSelection(state.tr.selection);
};
exports.default = keymapPlugin;
//# sourceMappingURL=keymap.js.map