"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors_1 = require("@atlaskit/theme/colors");
var constants_1 = require("./constants");
var color = components_1.themed({ light: colors_1.N0, dark: colors_1.DN600 });
var disabledColor = components_1.themed({ light: colors_1.N70, dark: colors_1.DN30 });
var getFlexDirection = function (_a) {
    var isChecked = _a.isChecked;
    return isChecked ? 'row' : 'row-reverse';
};
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  flex-direction: ", ";\n  height: 100%;\n  transition: ", ";\n  width: 100%;\n"], ["\n  color: ", ";\n  display: flex;\n  flex-direction: ", ";\n  height: 100%;\n  transition: ", ";\n  width: 100%;\n"])), function (_a) {
    var isDisabled = _a.isDisabled;
    return (isDisabled ? disabledColor : color);
}, getFlexDirection, constants_1.transition);
var templateObject_1;
//# sourceMappingURL=Inner.js.map