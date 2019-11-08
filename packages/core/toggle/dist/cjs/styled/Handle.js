"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors_1 = require("@atlaskit/theme/colors");
var constants_1 = require("./constants");
var backgroundColor = components_1.themed({ light: colors_1.N0, dark: colors_1.DN600 });
var backgroundColorChecked = components_1.themed({ light: colors_1.N0, dark: colors_1.DN0 });
var backgroundColorDisabled = components_1.themed({ light: colors_1.N0, dark: colors_1.DN0 });
var getTransform = function (_a) {
    var isChecked = _a.isChecked, size = _a.size;
    return isChecked ? "translateX(" + constants_1.getHeight({ size: size }) + "px)" : 'initial';
};
var getBackgroundColor = function (_a) {
    var isChecked = _a.isChecked, isDisabled = _a.isDisabled, rest = tslib_1.__rest(_a, ["isChecked", "isDisabled"]);
    if (isDisabled)
        return backgroundColorDisabled(rest);
    if (isChecked)
        return backgroundColorChecked(rest);
    return backgroundColor(rest);
};
exports.default = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  bottom: ", "px;\n  content: '';\n  height: ", "px;\n  left: ", "px;\n  position: absolute;\n  transform: ", ";\n  transition: ", ";\n  width: ", "px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  bottom: ", "px;\n  content: '';\n  height: ", "px;\n  left: ", "px;\n  position: absolute;\n  transform: ", ";\n  transition: ", ";\n  width: ", "px;\n"])), getBackgroundColor, 2 * constants_1.paddingUnitless, function (props) { return constants_1.getHeight(props) - constants_1.paddingUnitless * 2; }, 2 * constants_1.paddingUnitless, getTransform, constants_1.transition, function (props) { return constants_1.getHeight(props) - constants_1.paddingUnitless * 2; });
var templateObject_1;
//# sourceMappingURL=Handle.js.map