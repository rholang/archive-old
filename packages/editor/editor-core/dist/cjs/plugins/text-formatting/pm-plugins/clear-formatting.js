"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var utils_1 = require("../utils");
exports.pluginKey = new prosemirror_state_1.PluginKey('clearFormattingPlugin');
exports.plugin = function (dispatch) {
    return new prosemirror_state_1.Plugin({
        state: {
            init: function (_config, state) {
                return { formattingIsPresent: utils_1.checkFormattingIsPresent(state) };
            },
            apply: function (_tr, pluginState, _oldState, newState) {
                var formattingIsPresent = utils_1.checkFormattingIsPresent(newState);
                if (formattingIsPresent !== pluginState.formattingIsPresent) {
                    dispatch(exports.pluginKey, { formattingIsPresent: formattingIsPresent });
                    return { formattingIsPresent: formattingIsPresent };
                }
                return pluginState;
            },
        },
        key: exports.pluginKey,
    });
};
//# sourceMappingURL=clear-formatting.js.map