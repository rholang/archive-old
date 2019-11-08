"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var plugin_state_factory_1 = require("../../utils/plugin-state-factory");
var prosemirror_state_1 = require("prosemirror-state");
var reducer_1 = tslib_1.__importDefault(require("./reducer"));
var actions_1 = require("./actions");
var utils_1 = require("./utils");
/**
 * Plugin that keeps track of whether undo and redo are currently available
 * This is needed so we can enable/disable controls appropriately
 *
 * Actual undo/redo functionality is handled by prosemirror-history:
 * https://github.com/ProseMirror/prosemirror-history
 */
exports.historyPluginKey = new prosemirror_state_1.PluginKey('historyPlugin');
var getInitialState = function () { return ({
    canUndo: false,
    canRedo: false,
}); };
var _a = plugin_state_factory_1.pluginFactory(exports.historyPluginKey, reducer_1.default), createPluginState = _a.createPluginState, getPluginState = _a.getPluginState;
var createPlugin = function (dispatch) {
    return new prosemirror_state_1.Plugin({
        state: createPluginState(dispatch, getInitialState()),
        key: exports.historyPluginKey,
        appendTransaction: function (transactions, oldState, newState) {
            if (transactions.find(function (tr) { return tr.docChanged && tr.getMeta('addToHistory') !== false; })) {
                var pmHistoryPluginState = utils_1.getPmHistoryPluginState(newState);
                if (!pmHistoryPluginState) {
                    return;
                }
                var canUndo = pmHistoryPluginState.done.eventCount > 0;
                var canRedo = pmHistoryPluginState.undone.eventCount > 0;
                var _a = getPluginState(newState), prevCanUndo = _a.canUndo, prevCanRedo = _a.canRedo;
                if (canUndo !== prevCanUndo || canRedo !== prevCanRedo) {
                    var action = {
                        type: actions_1.HistoryActionTypes.UPDATE,
                        canUndo: canUndo,
                        canRedo: canRedo,
                    };
                    return newState.tr.setMeta(exports.historyPluginKey, action);
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
exports.default = historyPlugin;
//# sourceMappingURL=index.js.map