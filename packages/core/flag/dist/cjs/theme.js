"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
exports.flagBackgroundColor = components_1.themed('appearance', {
    error: { light: colors.R400, dark: colors.R300 },
    info: { light: colors.N500, dark: colors.N500 },
    normal: { light: colors.N0, dark: colors.DN50 },
    success: { light: colors.G400, dark: colors.G300 },
    warning: { light: colors.Y200, dark: colors.Y300 },
});
exports.flagBorderColor = components_1.themed('appearance', {
    normal: { light: colors.N60A },
});
exports.flagTextColor = components_1.themed('appearance', {
    error: { light: colors.N0, dark: colors.DN40 },
    info: { light: colors.N0, dark: colors.DN600 },
    normal: { light: colors.N500, dark: colors.DN600 },
    success: { light: colors.N0, dark: colors.DN40 },
    warning: { light: colors.N700, dark: colors.DN40 },
});
exports.flagShadowColor = components_1.themed('appearance', {
    error: { light: colors.N50A, dark: colors.N50A },
    info: { light: colors.N50A, dark: colors.N50A },
    normal: { light: colors.N50A, dark: colors.N50A },
    success: { light: colors.N50A, dark: colors.N50A },
    warning: { light: colors.N50A, dark: colors.N50A },
});
exports.flagFocusRingColor = components_1.themed('appearance', {
    error: { light: colors.N40, dark: colors.N40 },
    info: { light: colors.N40, dark: colors.N40 },
    normal: { light: colors.B100, dark: colors.link },
    success: { light: colors.N40, dark: colors.N40 },
    warning: { light: colors.N200, dark: colors.N200 },
});
var lightButtonBackground = 'rgba(255, 255, 255, 0.08)';
exports.background = {
    success: { light: lightButtonBackground, dark: colors.N30A },
    info: { light: lightButtonBackground, dark: lightButtonBackground },
    error: { light: lightButtonBackground, dark: colors.N30A },
    warning: { light: colors.N30A, dark: colors.N30A },
    normal: { light: 'none', dark: 'none' },
};
exports.color = {
    success: { light: colors.N0, dark: colors.DN40 },
    info: { light: colors.N0, dark: colors.DN600 },
    error: { light: colors.N0, dark: colors.DN600 },
    warning: { light: colors.N700, dark: colors.DN40 },
    normal: { light: colors.B400, dark: colors.B100 },
};
var getBackground = function (_a) {
    var _b = _a.appearance, appearance = _b === void 0 ? 'normal' : _b, _c = _a.mode, mode = _c === void 0 ? 'light' : _c;
    return exports.background[appearance][mode];
};
var getColor = function (_a) {
    var _b = _a.appearance, appearance = _b === void 0 ? 'normal' : _b, _c = _a.mode, mode = _c === void 0 ? 'light' : _c;
    return exports.color[appearance][mode];
};
exports.actionButtonStyles = function (props) { return ({
    background: getBackground(props),
    color: getColor(props),
}); };
exports.getPseudos = function (p) {
    var padding = p.appearance === 'normal' ? 0 : constants_1.gridSize();
    return {
        '&, a&': {
            fontWeight: '500',
            padding: "0 " + padding + "px !important",
        },
        '&:focus': {
            boxShadow: "0 0 0 2px " + exports.flagFocusRingColor(p),
        },
        '&:hover, &:active': {
            textDecoration: 'underline',
        },
    };
};
//# sourceMappingURL=theme.js.map