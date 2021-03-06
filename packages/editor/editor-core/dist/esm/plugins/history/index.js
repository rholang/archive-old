import { pluginFactory } from '../../utils/plugin-state-factory';
import { PluginKey, Plugin } from 'prosemirror-state';
import reducer from './reducer';
import { HistoryActionTypes } from './actions';
import { getPmHistoryPluginState } from './utils';
/**
 * Plugin that keeps track of whether undo and redo are currently available
 * This is needed so we can enable/disable controls appropriately
 *
 * Actual undo/redo functionality is handled by prosemirror-history:
 * https://github.com/ProseMirror/prosemirror-history
 */
export var historyPluginKey = new PluginKey('historyPlugin');
var getInitialState = function () { return ({
    canUndo: false,
    canRedo: false,
}); };
var _a = pluginFactory(historyPluginKey, reducer), createPluginState = _a.createPluginState, getPluginState = _a.getPluginState;
var createPlugin = function (dispatch) {
    return new Plugin({
        state: createPluginState(dispatch, getInitialState()),
        key: historyPluginKey,
        appendTransaction: function (transactions, oldState, newState) {
            if (transactions.find(function (tr) { return tr.docChanged && tr.getMeta('addToHistory') !== false; })) {
                var pmHistoryPluginState = getPmHistoryPluginState(newState);
                if (!pmHistoryPluginState) {
                    return;
                }
                var canUndo = pmHistoryPluginState.done.eventCount > 0;
                var canRedo = pmHistoryPluginState.undone.eventCount > 0;
                var _a = getPluginState(newState), prevCanUndo = _a.canUndo, prevCanRedo = _a.canRedo;
                if (canUndo !== prevCanUndo || canRedo !== prevCanRedo) {
                    var action = {
                        type: HistoryActionTypes.UPDATE,
                        canUndo: canUndo,
                        canRedo: canRedo,
                    };
                    return newState.tr.setMeta(historyPluginKey, action);
                }
            }
        },
    });
};
var historyPlugin = function () { return ({
    name: 'history',
    pmPlugins: function () {
        return [
            { name: 'history', plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return createPlugin(dispatch);
                } },
        ];
    },
}); };
export default historyPlugin;
//# sourceMappingURL=index.js.map