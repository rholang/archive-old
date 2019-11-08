"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
exports.pluginKey = new prosemirror_state_1.PluginKey('sharedContextPlugin');
var sharedContextPlugin = function () { return ({
    name: 'sharedContext',
    pmPlugins: function () {
        return [
            {
                name: 'sharedContextPlugin',
                plugin: function (_a) {
                    var props = _a.props;
                    return new prosemirror_state_1.Plugin({
                        key: exports.pluginKey,
                        state: {
                            init: function () { return ({ props: props }); },
                            apply: function (_, pluginState) { return pluginState; },
                        },
                    });
                },
            },
        ];
    },
}); };
exports.getEditorProps = function (state) {
    return exports.pluginKey.getState(state).props;
};
exports.default = sharedContextPlugin;
//# sourceMappingURL=index.js.map