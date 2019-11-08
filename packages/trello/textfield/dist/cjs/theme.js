"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var colors_1 = require("./colors");
var textFieldNachosTheme = {
    backgroundColor: {
        default: {
            idle: colors_1.colors.N10,
            hover: colors_1.colors.N30,
            focus: colors_1.colors.N0,
            disabled: colors_1.colors.N30,
        },
        transparent: {
            idle: 'transparent',
        },
    },
    borderColor: {
        default: {
            idle: colors_1.colors.N40,
            hover: colors_1.colors.N40,
            focus: colors_1.colors['blue-500'],
            disabled: colors_1.colors.N30,
            invalid: colors_1.colors['red-500'],
        },
    },
    color: {
        default: {
            idle: colors_1.colors.N800,
            disabled: colors_1.colors.N70,
        },
    },
    padding: '6px 10px',
    lineHeight: '20px',
    cursor: {
        default: 'initial',
        disabled: 'not-allowed',
    },
    placeholder: {
        color: colors_1.colors.N200,
    },
};
function applyPropertyStyle(property, _a, baseThemeStyles) {
    var _b = _a.appearance, appearance = _b === void 0 ? 'default' : _b, props = tslib_1.__rest(_a, ["appearance"]);
    var propertyStyles = textFieldNachosTheme[property];
    if (!propertyStyles) {
        return 'initial';
    }
    // Check for relevant fallbacks.
    // This will fall back to the ADG theme if there is an appearance
    // that is not in the styles map, or if there are no styles for
    // for a default appearance
    if (!propertyStyles[appearance] || !propertyStyles['default']) {
        return baseThemeStyles[property] ? baseThemeStyles[property] : 'initial';
    }
    var isDisabled = props.isDisabled, isInvalid = props.isInvalid, isFocused = props.isFocused, isHovered = props.isHovered;
    var appearanceStyle = propertyStyles[appearance]['idle'];
    // least to most important precedence
    if (isHovered) {
        appearanceStyle = propertyStyles[appearance].hover;
    }
    if (isFocused) {
        appearanceStyle = propertyStyles[appearance].focus;
    }
    if (isInvalid) {
        appearanceStyle = propertyStyles[appearance].invalid;
    }
    if (isDisabled) {
        appearanceStyle = propertyStyles[appearance].disabled;
    }
    return appearanceStyle;
}
exports.applyPropertyStyle = applyPropertyStyle;
var getTextFieldStyles = function (adgContainerStyles, props) {
    return {
        borderColor: applyPropertyStyle('borderColor', props, adgContainerStyles),
        backgroundColor: applyPropertyStyle('backgroundColor', props, adgContainerStyles),
        color: applyPropertyStyle('color', props, adgContainerStyles),
        cursor: applyPropertyStyle('cursor', props, adgContainerStyles),
        lineHeight: textFieldNachosTheme.lineHeight,
        padding: textFieldNachosTheme.padding,
    };
};
var theme = function (adgTheme, themeProps) {
    var _a = adgTheme(themeProps), adgContainerStyles = _a.container, adgInputStyles = _a.input;
    return {
        container: tslib_1.__assign(tslib_1.__assign({}, adgContainerStyles), getTextFieldStyles(adgContainerStyles, themeProps)),
        input: tslib_1.__assign(tslib_1.__assign({}, adgInputStyles), { 
            // hack to style the placeholder, this overwrites the pseudoselector
            // being used in ADG Textfield Theme
            '&::placeholder': {
                color: textFieldNachosTheme.placeholder.color,
            } }),
    };
};
exports.default = theme;
//# sourceMappingURL=theme.js.map