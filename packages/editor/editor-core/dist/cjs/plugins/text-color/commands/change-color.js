"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toggle_color_1 = require("./toggle-color");
var remove_color_1 = require("./remove-color");
var main_1 = require("../pm-plugins/main");
var color_1 = require("../utils/color");
var analytics_1 = require("../../analytics");
/**
 * Helper to create a higher order analytics command
 * @param newColor  - Color to be change in hex code
 * @param previousColor - Active color in hex code
 * @param palette - Current palette of colors
 * @return Higher order command with analytics logic inside.
 */
function createWithColorAnalytics(newColor, previousColor, palette) {
    var newColorFromPalette = palette.find(function (_a) {
        var value = _a.value;
        return value === newColor;
    });
    var previousColorFromPalette = palette.find(function (_a) {
        var value = _a.value;
        return value === previousColor;
    });
    var newColorLabel = newColorFromPalette
        ? newColorFromPalette.label
        : newColor;
    var previousColorLabel = previousColorFromPalette
        ? previousColorFromPalette.label
        : previousColor || '';
    return analytics_1.withAnalytics({
        action: analytics_1.ACTION.FORMATTED,
        actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
        actionSubjectId: analytics_1.ACTION_SUBJECT_ID.FORMAT_COLOR,
        eventType: analytics_1.EVENT_TYPE.TRACK,
        attributes: {
            newColor: newColorLabel.toLowerCase(),
            previousColor: previousColorLabel.toLowerCase(),
        },
    });
}
exports.changeColor = function (color) { return function (state, dispatch) {
    var textColor = state.schema.marks.textColor;
    if (textColor) {
        var pluginState = main_1.pluginKey.getState(state);
        var activeColor = color_1.getActiveColor(state);
        var withColorAnalytics = createWithColorAnalytics(color, activeColor, pluginState.palette);
        if (pluginState.disabled) {
            return false;
        }
        if (color === pluginState.defaultColor) {
            withColorAnalytics(remove_color_1.removeColor())(state, dispatch);
            return true;
        }
        withColorAnalytics(toggle_color_1.toggleColor(color))(state, dispatch);
        return true;
    }
    return false;
}; };
//# sourceMappingURL=change-color.js.map