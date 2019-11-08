"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_keymap_1 = require("prosemirror-keymap");
var prosemirror_state_1 = require("prosemirror-state");
var actions_1 = require("./actions");
var keymaps = tslib_1.__importStar(require("../../keymaps"));
var plugin_1 = require("./plugin");
function keymapPlugin() {
    var list = {};
    keymaps.bindKeymapWithCommand(keymaps.enter.common, function (state, dispatch) {
        var datePlugin = plugin_1.pluginKey.getState(state);
        var isDateNode = state.selection instanceof prosemirror_state_1.NodeSelection
            ? state.selection.node.type === state.schema.nodes.date
            : false;
        if (!isDateNode) {
            return false;
        }
        if (!datePlugin.showDatePickerAt) {
            actions_1.openDatePicker()(state, dispatch);
            return true;
        }
        actions_1.closeDatePicker()(state, dispatch);
        return true;
    }, list);
    return prosemirror_keymap_1.keymap(list);
}
exports.keymapPlugin = keymapPlugin;
exports.default = keymapPlugin;
//# sourceMappingURL=keymap.js.map