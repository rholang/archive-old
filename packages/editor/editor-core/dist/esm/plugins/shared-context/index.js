import { Plugin, PluginKey } from 'prosemirror-state';
export var pluginKey = new PluginKey('sharedContextPlugin');
var sharedContextPlugin = function () { return ({
    name: 'sharedContext',
    pmPlugins: function () {
        return [
            {
                name: 'sharedContextPlugin',
                plugin: function (_a) {
                    var props = _a.props;
                    return new Plugin({
                        key: pluginKey,
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
export var getEditorProps = function (state) {
    return pluginKey.getState(state).props;
};
export default sharedContextPlugin;
//# sourceMappingURL=index.js.map