import { __assign, __read, __spread } from "tslib";
import { Plugin, PluginKey } from 'prosemirror-state';
import { colors } from '@atlaskit/theme';
import { getActiveColor } from '../utils/color';
import { getDisabledState } from '../utils/disabled';
import textColorPalette from '../../../ui/ColorPalette/Palettes/textColorPalette';
export var DEFAULT_COLOR = {
    color: colors.N800.toLowerCase(),
    label: 'Dark gray',
};
export function createInitialPluginState(editorState, pluginConfig) {
    var defaultColor = (pluginConfig && pluginConfig.defaultColor) || DEFAULT_COLOR;
    var palette = __spread([
        {
            value: defaultColor.color,
            label: defaultColor.label,
        }
    ], textColorPalette);
    return {
        color: getActiveColor(editorState),
        disabled: getDisabledState(editorState),
        palette: palette,
        defaultColor: palette[0].value,
    };
}
export var ACTIONS;
(function (ACTIONS) {
    ACTIONS[ACTIONS["RESET_COLOR"] = 0] = "RESET_COLOR";
    ACTIONS[ACTIONS["SET_COLOR"] = 1] = "SET_COLOR";
    ACTIONS[ACTIONS["DISABLE"] = 2] = "DISABLE";
})(ACTIONS || (ACTIONS = {}));
export var pluginKey = new PluginKey('textColorPlugin');
export function createPlugin(dispatch, pluginConfig) {
    return new Plugin({
        key: pluginKey,
        state: {
            init: function (_config, editorState) {
                return createInitialPluginState(editorState, pluginConfig);
            },
            apply: function (tr, pluginState, _, newState) {
                var meta = tr.getMeta(pluginKey) || {};
                var nextState;
                switch (meta.action) {
                    case ACTIONS.RESET_COLOR:
                        nextState = __assign(__assign({}, pluginState), { color: pluginState.defaultColor });
                        break;
                    case ACTIONS.SET_COLOR:
                        nextState = __assign(__assign({}, pluginState), { color: meta.color, disabled: false });
                        break;
                    case ACTIONS.DISABLE:
                        nextState = __assign(__assign({}, pluginState), { disabled: true });
                        break;
                    default:
                        nextState = __assign(__assign({}, pluginState), { color: getActiveColor(newState), disabled: getDisabledState(newState) });
                }
                if ((pluginState && pluginState.color !== nextState.color) ||
                    (pluginState && pluginState.disabled !== nextState.disabled)) {
                    dispatch(pluginKey, nextState);
                    return nextState;
                }
                return pluginState;
            },
        },
    });
}
//# sourceMappingURL=main.js.map