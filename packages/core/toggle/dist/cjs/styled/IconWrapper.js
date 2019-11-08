"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors_1 = require("@atlaskit/theme/colors");
var constants_1 = require("./constants");
var iconPadding = constants_1.paddingUnitless / 2 + "px";
var getPadding = function (_a) {
    var isChecked = _a.isChecked;
    return isChecked
        ? "\n    padding-left: " + iconPadding + ";\n    padding-right: 0;\n  "
        : "\n    padding-left: 0;\n    padding-right: " + iconPadding + ";\n  ";
};
// the Icon sizes are 16/24/32/48 so we have to force-scale the icons down to 20px this way
var iconSizing = function (_a) {
    var size = _a.size;
    return size === 'large' ? "> span { height: 20px; width: 20px; }" : '';
};
var getIconColor = function (_a) {
    var isChecked = _a.isChecked;
    return isChecked
        ? components_1.themed({ light: 'inherit', dark: colors_1.DN30 })
        : components_1.themed({ light: 'inherit', dark: colors_1.DN600 });
};
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  max-width: ", "px;\n  align-items: center;\n  ", ";\n  color: ", ";\n  ", ";\n"], ["\n  display: flex;\n  max-width: ", "px;\n  align-items: center;\n  ", ";\n  color: ", ";\n  ", ";\n"])), function (props) { return constants_1.getWidth(props) / 2; }, getPadding, getIconColor, iconSizing);
var templateObject_1;
//# sourceMappingURL=IconWrapper.js.map