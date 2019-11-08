"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("@atlaskit/theme");
var editor_common_1 = require("@atlaskit/editor-common");
var background = {
    danger: {
        default: { light: 'inherit', dark: 'inherit' },
        hover: { light: theme_1.colors.N30A, dark: theme_1.colors.N30A },
        active: {
            light: editor_common_1.hexToRgba(theme_1.colors.B75, 0.6),
            dark: editor_common_1.hexToRgba(theme_1.colors.B75, 0.6),
        },
    },
};
var color = {
    danger: {
        default: { light: theme_1.colors.N400, dark: theme_1.colors.DN400 },
        hover: { light: theme_1.colors.R300, dark: theme_1.colors.R300 },
        active: { light: theme_1.colors.R300, dark: theme_1.colors.R300 },
    },
};
var getStyles = function (property, _a) {
    var _b = _a.appearance, appearance = _b === void 0 ? 'default' : _b, _c = _a.state, state = _c === void 0 ? 'default' : _c, _d = _a.mode, mode = _d === void 0 ? 'light' : _d;
    if (!property[appearance] || !property[appearance][state]) {
        return 'initial';
    }
    return property[appearance][state][mode];
};
exports.baseStyles = {
    padding: '0 2px',
    '&[href]': {
        padding: '0 2px',
    },
};
exports.getButtonStyles = function (props) { return ({
    background: getStyles(background, props),
    color: getStyles(color, props),
}); };
//# sourceMappingURL=styles.js.map