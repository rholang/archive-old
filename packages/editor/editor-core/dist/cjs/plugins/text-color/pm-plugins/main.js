"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var theme_1 = require("@atlaskit/theme");
var color_1 = require("../utils/color");
var disabled_1 = require("../utils/disabled");
var textColorPalette_1 = tslib_1.__importDefault(require("../../../ui/ColorPalette/Palettes/textColorPalette"));
exports.DEFAULT_COLOR = {
    color: theme_1.colors.N800.toLowerCase(),
    label: 'Dark gray',
};
function createInitialPluginState(editorState, pluginConfig) {
    var defaultColor = (pluginConfig && pluginConfig.defaultColor) || exports.DEFAULT_COLOR;
    var palette = tslib_1.__spread([
        {
            value: defaultColor.color,
            label: defaultColor.label,
        }
    ], textColorPalette_1.default);
    return {
        color: color_1.getActiveColor(editorState),
        disabled: disabled_1.getDisabledState(editorState),
        palette: palette,
        defaultColor: palette[0].value,
    };
}
exports.createInitialPluginState = createInitialPluginState;
var ACTIONS;
(function (ACTIONS) {
    ACTIONS[ACTIONS["RESET_COLOR"] = 0] = "RESET_COLOR";
    ACTIONS[ACTIONS["SET_COLOR"] = 1] = "SET_COLOR";
    ACTIONS[ACTIONS["DISABLE"] = 2] = "DISABLE";
})(ACTIONS = exports.ACTIONS || (exports.ACTIONS = {}));
exports.pluginKey = new prosemirror_state_1.PluginKey('textColorPlugin');
function createPlugin(dispatch, pluginConfig) {
    return new prosemirror_state_1.Plugin({
        key: exports.pluginKey,
        state: {
            init: function (_config, editorState) {
                return createInitialPluginState(editorState, pluginConfig);
            },
            apply: function (tr, pluginState, _, newState) {
                var meta = tr.getMeta(exports.pluginKey) || {};
                var nextState;
                switch (meta.action) {
                    case ACTIONS.RESET_COLOR:
                        nextState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { color: pluginState.defaultColor });
                        break;
                    case ACTIONS.SET_COLOR:
                        nextState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { color: meta.color, disabled: false });
                        break;
                    case ACTIONS.DISABLE:
                        nextState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { disabled: true });
                        break;
                    default:
                        nextState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { color: color_1.getActiveColor(newState), disabled: disabled_1.getDisabledState(newState) });
                }
                if ((pluginState && pluginState.color !== nextState.color) ||
                    (pluginState && pluginState.disabled !== nextState.disabled)) {
                    dispatch(exports.pluginKey, nextState);
                    return nextState;
                }
                return pluginState;
            },
        },
    });
}
exports.createPlugin = createPlugin;
//# sourceMappingURL=main.js.map