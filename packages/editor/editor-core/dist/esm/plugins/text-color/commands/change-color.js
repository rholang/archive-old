import { toggleColor } from './toggle-color';
import { removeColor } from './remove-color';
import { pluginKey } from '../pm-plugins/main';
import { getActiveColor } from '../utils/color';
import { withAnalytics, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, EVENT_TYPE, } from '../../analytics';
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
    return withAnalytics({
        action: ACTION.FORMATTED,
        actionSubject: ACTION_SUBJECT.TEXT,
        actionSubjectId: ACTION_SUBJECT_ID.FORMAT_COLOR,
        eventType: EVENT_TYPE.TRACK,
        attributes: {
            newColor: newColorLabel.toLowerCase(),
            previousColor: previousColorLabel.toLowerCase(),
        },
    });
}
export var changeColor = function (color) { return function (state, dispatch) {
    var textColor = state.schema.marks.textColor;
    if (textColor) {
        var pluginState = pluginKey.getState(state);
        var activeColor = getActiveColor(state);
        var withColorAnalytics = createWithColorAnalytics(color, activeColor, pluginState.palette);
        if (pluginState.disabled) {
            return false;
        }
        if (color === pluginState.defaultColor) {
            withColorAnalytics(removeColor())(state, dispatch);
            return true;
        }
        withColorAnalytics(toggleColor(color))(state, dispatch);
        return true;
    }
    return false;
}; };
//# sourceMappingURL=change-color.js.map