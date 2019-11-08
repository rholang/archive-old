"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
exports.pluginKey = new prosemirror_state_1.PluginKey('customAutoformatPlugin');
exports.getPluginState = function (editorState) {
    return exports.pluginKey.getState(editorState);
};
exports.autoformatAction = function (tr, action) {
    return tr.setMeta(exports.pluginKey, action);
};
//# sourceMappingURL=utils.js.map