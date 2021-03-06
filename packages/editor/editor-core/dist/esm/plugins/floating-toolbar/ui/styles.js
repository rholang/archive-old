import { colors } from '@atlaskit/theme';
import { hexToRgba } from '@atlaskit/editor-common';
var background = {
    danger: {
        default: { light: 'inherit', dark: 'inherit' },
        hover: { light: colors.N30A, dark: colors.N30A },
        active: {
            light: hexToRgba(colors.B75, 0.6),
            dark: hexToRgba(colors.B75, 0.6),
        },
    },
};
var color = {
    danger: {
        default: { light: colors.N400, dark: colors.DN400 },
        hover: { light: colors.R300, dark: colors.R300 },
        active: { light: colors.R300, dark: colors.R300 },
    },
};
var getStyles = function (property, _a) {
    var _b = _a.appearance, appearance = _b === void 0 ? 'default' : _b, _c = _a.state, state = _c === void 0 ? 'default' : _c, _d = _a.mode, mode = _d === void 0 ? 'light' : _d;
    if (!property[appearance] || !property[appearance][state]) {
        return 'initial';
    }
    return property[appearance][state][mode];
};
export var baseStyles = {
    padding: '0 2px',
    '&[href]': {
        padding: '0 2px',
    },
};
export var getButtonStyles = function (props) { return ({
    background: getStyles(background, props),
    color: getStyles(color, props),
}); };
//# sourceMappingURL=styles.js.map