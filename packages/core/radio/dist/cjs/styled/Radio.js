"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var disabledColor = components_1.themed({ light: colors.N80, dark: colors.N80 });
exports.Label = styled_components_1.default.label(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  align-items: flex-start;\n  color: ", ";\n  ", ";\n  display: flex;\n"], ["\n  align-items: flex-start;\n  color: ",
    ";\n  ",
    ";\n  display: flex;\n"])), function (props) {
    return props.isDisabled
        ? disabledColor(props)
        : colors.text(props);
}, function (_a) {
    var isDisabled = _a.isDisabled;
    return isDisabled
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n          cursor: not-allowed;\n        "], ["\n          cursor: not-allowed;\n        "]))) : '';
});
var borderColor = components_1.themed({ light: colors.N40, dark: colors.DN80 });
var focusBorder = styled_components_1.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  stroke: ", ";\n  stroke-width: 2px;\n"], ["\n  stroke: ", ";\n  stroke-width: 2px;\n"])), components_1.themed({ light: colors.B100, dark: colors.B75 }));
var invalidBorder = styled_components_1.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  stroke: ", ";\n  stroke-width: 2px;\n"], ["\n  stroke: ", ";\n  stroke-width: 2px;\n"])), components_1.themed({ light: colors.R300, dark: colors.R300 }));
var activeBorder = styled_components_1.css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  stroke: currentColor;\n  stroke-width: 2px;\n"], ["\n  stroke: currentColor;\n  stroke-width: 2px;\n"])));
var checkedBorder = styled_components_1.css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  stroke: currentColor;\n  stroke-width: 2px;\n"], ["\n  stroke: currentColor;\n  stroke-width: 2px;\n"])));
var border = styled_components_1.css(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  stroke: ", ";\n  stroke-width: 2px;\n"], ["\n  stroke: ",
    ";\n  stroke-width: 2px;\n"])), function (_a) {
    var isHovered = _a.isHovered, rest = tslib_1.__rest(_a, ["isHovered"]);
    return isHovered
        ? components_1.themed({ light: colors.N40, dark: colors.DN200 })(rest)
        : borderColor(rest);
});
var getBorderColor = function (props) {
    if (props.isDisabled)
        return '';
    if (props.isFocused)
        return focusBorder;
    if (props.isActive)
        return activeBorder;
    if (props.isInvalid)
        return invalidBorder;
    if (props.isChecked)
        return checkedBorder;
    return border;
};
var getDotColor = function (props) {
    var isChecked = props.isChecked, isDisabled = props.isDisabled, isActive = props.isActive, rest = tslib_1.__rest(props, ["isChecked", "isDisabled", "isActive"]);
    var color = components_1.themed({ light: colors.N10, dark: colors.DN10 });
    if (isDisabled && isChecked) {
        color = components_1.themed({ light: colors.N70, dark: colors.DN90 });
    }
    else if (isActive && isChecked && !isDisabled) {
        color = components_1.themed({ light: colors.B400, dark: colors.DN10 });
    }
    else if (!isChecked) {
        color = components_1.themed({ light: 'transparent', dark: 'transparent' });
    }
    return color(rest);
};
var getCircleColor = function (props) {
    var isChecked = props.isChecked, isDisabled = props.isDisabled, isActive = props.isActive, isHovered = props.isHovered, isInvalid = props.isInvalid, rest = tslib_1.__rest(props, ["isChecked", "isDisabled", "isActive", "isHovered", "isInvalid"]);
    // set the default
    var color = components_1.themed({ light: colors.N10, dark: colors.DN10 });
    if (isDisabled) {
        color = components_1.themed({ light: colors.N20, dark: colors.DN10 });
    }
    else if (isActive) {
        color = components_1.themed({ light: colors.B50, dark: colors.B200 });
    }
    else if (isHovered && isChecked) {
        color = components_1.themed({ light: colors.B300, dark: colors.B75 });
    }
    else if (isHovered) {
        color = components_1.themed({ light: colors.N30, dark: colors.DN30 });
    }
    else if (isChecked) {
        color = components_1.themed({
            light: colors.B400,
            dark: isInvalid ? colors.DN10 : colors.B400,
        });
    }
    return color(rest);
};
exports.LabelText = styled_components_1.default.div(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  padding: 2px 4px;\n"], ["\n  padding: 2px 4px;\n"])));
exports.IconWrapper = styled_components_1.default.span(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  line-height: 0;\n  flex-shrink: 0;\n  color: ", ";\n  fill: ", ";\n  transition: all 0.2s ease-in-out;\n\n  /* This is adding a property to the inner svg, to add a border to the radio */\n  & circle:first-of-type {\n    transition: stroke 0.2s ease-in-out;\n    ", ";\n  }\n"], ["\n  line-height: 0;\n  flex-shrink: 0;\n  color: ", ";\n  fill: ", ";\n  transition: all 0.2s ease-in-out;\n\n  /* This is adding a property to the inner svg, to add a border to the radio */\n  & circle:first-of-type {\n    transition: stroke 0.2s ease-in-out;\n    ", ";\n  }\n"])), getCircleColor, getDotColor, getBorderColor);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=Radio.js.map