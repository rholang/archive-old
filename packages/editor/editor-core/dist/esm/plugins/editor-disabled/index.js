import { Plugin, PluginKey } from 'prosemirror-state';
import { pluginFactory } from '../../utils/plugin-state-factory';
export var pluginKey = new PluginKey('editorDisabledPlugin');
function reducer(_pluginState, meta) {
    return meta;
}
var createPluginState = pluginFactory(pluginKey, reducer).createPluginState;
/*
Stores the state of the editor enabled/disabled for panel and floating
toolbar to subscribe to through <WithPluginState>. Otherwise the NodeViews
won't re-render when it changes.
*/
export function createPlugin(dispatch) {
    return new Plugin({
        key: pluginKey,
        state: createPluginState(dispatch, { editorDisabled: false }),
    });
}
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
export default editorDisabledPlugin;
//# sourceMappingURL=index.js.map