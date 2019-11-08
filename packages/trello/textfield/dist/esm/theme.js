import { __assign, __rest } from "tslib";
import { colors } from './colors';
var textFieldNachosTheme = {
    backgroundColor: {
        default: {
            idle: colors.N10,
            hover: colors.N30,
            focus: colors.N0,
            disabled: colors.N30,
        },
        transparent: {
            idle: 'transparent',
        },
    },
    borderColor: {
        default: {
            idle: colors.N40,
            hover: colors.N40,
            focus: colors['blue-500'],
            disabled: colors.N30,
            invalid: colors['red-500'],
        },
    },
    color: {
        default: {
            idle: colors.N800,
            disabled: colors.N70,
        },
    },
    padding: '6px 10px',
    lineHeight: '20px',
    cursor: {
        default: 'initial',
        disabled: 'not-allowed',
    },
    placeholder: {
        color: colors.N200,
    },
};
export function applyPropertyStyle(property, _a, baseThemeStyles) {
    var _b = _a.appearance, appearance = _b === void 0 ? 'default' : _b, props = __rest(_a, ["appearance"]);
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
        container: __assign(__assign({}, adgContainerStyles), getTextFieldStyles(adgContainerStyles, themeProps)),
        input: __assign(__assign({}, adgInputStyles), { 
            // hack to style the placeholder, this overwrites the pseudoselector
            // being used in ADG Textfield Theme
            '&::placeholder': {
                color: textFieldNachosTheme.placeholder.color,
            } }),
    };
};
export default theme;
//# sourceMappingURL=theme.js.map