"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a ProseMirror plugin's state and handles UI updates.
 *
 * Here's a few things to keep in mind:
 * - plugin's state is stored as a single object
 * - `Reducer` specifies how plugin's state changes in response to commands
 * - `Command` describes only what happen, but not how state changes
 * - `mapping` could be used to map ProseMirror positions stored in plugin's state
 *
 * Example:
 *  const { createPluginState, createCommand, getPluginState } = pluginFactory(
 *    reducer,
 *    pluginKey
 *  );
 *
 *  export const createPlugin = (dispatch: Dispatch, initialState) =>
 *    new Plugin({
 *      state: createPluginState(dispatch, initialState),
 *      key: pluginKey
 *    });
 *
 * Example of a reducer:
 *
 *  export const reducer = (
 *    state: TablePluginState,
 *    action: TableAction,
 *  ): TablePluginState => {
 *    switch (action.type) {
 *      case 'TOGGLE_CONTEXTUAL_MENU':
 *      return {
 *        ...state,
 *        isContextualMenuOpen: !state.isContextualMenuOpen,
 *      };
 *    default:
 *      return state;
 *    }
 *  };
 *
 *
 * Example of a command:
 *
 * export const toggleContextualMenu = createCommand({
 *   type: 'TOGGLE_CONTEXTUAL_MENU',
 * }, tr => tr.setMeta('addToHistory', false));
 *
 */
function isFunction(x) {
    return typeof x === 'function';
}
function pluginFactory(pluginKey, reducer, options) {
    if (options === void 0) { options = {}; }
    var mapping = options.mapping, onDocChanged = options.onDocChanged, onSelectionChanged = options.onSelectionChanged;
    return {
        createPluginState: function (dispatch, initialState) { return ({
            init: function () { return initialState; },
            apply: function (tr, _pluginState) {
                var oldState = mapping ? mapping(tr, _pluginState) : _pluginState;
                var newState = oldState;
                var meta = tr.getMeta(pluginKey);
                if (meta) {
                    newState = reducer(oldState, meta);
                }
                if (onDocChanged && tr.docChanged) {
                    newState = onDocChanged(tr, newState);
                }
                else if (onSelectionChanged && tr.selectionSet) {
                    newState = onSelectionChanged(tr, newState);
                }
                if (newState !== oldState) {
                    dispatch(pluginKey, newState);
                }
                return newState;
            },
        }); },
        createCommand: function (action, transform) { return function (state, dispatch) {
            if (dispatch) {
                var tr = transform ? transform(state.tr, state) : state.tr;
                var resolvedAction = isFunction(action) ? action(state) : action;
                if (tr && resolvedAction) {
                    dispatch(tr.setMeta(pluginKey, resolvedAction));
                }
                else {
                    return false;
                }
            }
            return true;
        }; },
        getPluginState: function (state) { return pluginKey.getState(state); },
    };
}
exports.pluginFactory = pluginFactory;
//# sourceMappingURL=plugin-state-factory.js.map