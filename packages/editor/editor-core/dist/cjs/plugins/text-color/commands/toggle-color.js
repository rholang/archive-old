"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../pm-plugins/main");
var disabled_1 = require("../utils/disabled");
var commands_1 = require("../../../utils/commands");
exports.toggleColor = function (color) { return function (state, dispatch) {
    var textColor = state.schema.marks.textColor;
    var tr = state.tr;
    var disabledState = disabled_1.getDisabledState(state);
    if (disabledState) {
        if (dispatch) {
            dispatch(tr.setMeta(main_1.pluginKey, { action: main_1.ACTIONS.DISABLE }));
        }
        return false;
    }
    if (dispatch) {
        state.tr.setMeta(main_1.pluginKey, { action: main_1.ACTIONS.SET_COLOR, color: color });
        state.tr.scrollIntoView();
        commands_1.toggleMark(textColor, { color: color })(state, dispatch);
    }
    return true;
}; };
//# sourceMappingURL=toggle-color.js.map