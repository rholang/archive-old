"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var actions_1 = require("./actions");
tslib_1.__exportStar(require("./actions"), exports);
exports.pluginKey = new prosemirror_state_1.PluginKey('macroPlugin');
exports.createPlugin = function (dispatch, providerFactory) {
    return new prosemirror_state_1.Plugin({
        state: {
            init: function () { return ({ macroProvider: null }); },
            apply: function (tr, state) {
                var meta = tr.getMeta(exports.pluginKey);
                if (meta) {
                    var newState = tslib_1.__assign(tslib_1.__assign({}, state), meta);
                    dispatch(exports.pluginKey, newState);
                    return newState;
                }
                return state;
            },
        },
        key: exports.pluginKey,
        view: function (view) {
            var handleProvider = function (_name, provider) { return provider && actions_1.setMacroProvider(provider)(view); };
            // make sure editable DOM node is mounted
            if (view.dom.parentNode) {
                providerFactory.subscribe('macroProvider', handleProvider);
            }
            return {
                destroy: function () {
                    providerFactory.unsubscribe('macroProvider', handleProvider);
                },
            };
        },
    });
};
var macroPlugin = function () { return ({
    name: 'macro',
    pmPlugins: function () {
        return [
            {
                name: 'macro',
                plugin: function (_a) {
                    var dispatch = _a.dispatch, providerFactory = _a.providerFactory;
                    return exports.createPlugin(dispatch, providerFactory);
                },
            },
        ];
    },
}); };
exports.default = macroPlugin;
//# sourceMappingURL=index.js.map