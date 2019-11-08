"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var plugin_state_factory_1 = require("../../utils/plugin-state-factory");
exports.pluginKey = new prosemirror_state_1.PluginKey('editorDisabledPlugin');
function reducer(_pluginState, meta) {
    return meta;
}
var createPluginState = plugin_state_factory_1.pluginFactory(exports.pluginKey, reducer).createPluginState;
/*
Stores the state of the editor enabled/disabled for panel and floating
toolbar to subscribe to through <WithPluginState>. Otherwise the NodeViews
won't re-render when it changes.
*/
function createPlugin(dispatch) {
    return new prosemirror_state_1.Plugin({
        key: exports.pluginKey,
        state: createPluginState(dispatch, { editorDisabled: false }),
    });
}
exports.createPlugin = createPlugin;
var editorDisabledPlugin = function () { return ({
    name: 'editorDisabled',
    pmPlugins: function () { return [
        {
            name: 'editorDisabled',
            plugin: function (_a) {
                var dispatch = _a.dispatch;
                return createPlugin(dispatch);
            },
        },
    ]; },
}); };
exports.default = editorDisabledPlugin;
//# sourceMappingURL=index.js.map