"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors_1 = require("@atlaskit/theme/colors");
var constants_1 = require("./constants");
exports.Outer = components_1.withTheme(styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  align-content: center;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 50%;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  padding: ", "px;\n  width: 100%;\n"], ["\n  align-content: center;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 50%;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  padding: ",
    "px;\n  width: 100%;\n"])), function (props) { return props.bgColor || colors_1.background; }, function (_a) {
    var size = _a.size;
    return (size && constants_1.BORDER_WIDTH[size]) || constants_1.BORDER_WIDTH.medium;
}));
exports.Inner = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  border-radius: 50%;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  width: 100%;\n"], ["\n  align-items: center;\n  border-radius: 50%;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  width: 100%;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=Icon.js.map