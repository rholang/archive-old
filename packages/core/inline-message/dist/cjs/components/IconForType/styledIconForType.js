"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var constants_1 = require("../../constants");
var getBaseColor = components_1.themed('appearance', {
    connectivity: { light: colors.B400, dark: colors.B100 },
    confirmation: { light: colors.G300, dark: colors.G300 },
    info: { light: colors.P300, dark: colors.P300 },
    warning: { light: colors.Y300, dark: colors.Y300 },
    error: { light: colors.R400, dark: colors.R400 },
});
var getHoverColor = components_1.themed('appearance', {
    connectivity: { light: colors.B300, dark: colors.B75 },
    confirmation: { light: colors.G200, dark: colors.G200 },
    info: { light: colors.P200, dark: colors.P200 },
    warning: { light: colors.Y200, dark: colors.Y200 },
    error: { light: colors.R300, dark: colors.R300 },
});
var getColor = function (props) {
    if (props.isHovered || props.isOpen)
        return getHoverColor(props);
    return getBaseColor(props);
};
var IconWrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  padding: 0 ", ";\n  color: ", ";\n"], ["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  padding: 0 ", ";\n  color: ", ";\n"])), constants_1.itemSpacing, getColor);
exports.default = IconWrapper;
var templateObject_1;
//# sourceMappingURL=styledIconForType.js.map