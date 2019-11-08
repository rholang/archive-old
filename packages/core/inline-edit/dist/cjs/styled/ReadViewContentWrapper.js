"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var ReadViewContentWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  border-radius: ", "px;\n  display: inline-block;\n  max-width: 100%;\n  transition: background 0.2s;\n  width: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  border-radius: ", "px;\n  display: inline-block;\n  max-width: 100%;\n  transition: background 0.2s;\n  width: ",
    ";\n\n  &:hover {\n    background: ", ";\n  }\n"])), constants_1.borderRadius(), function (_a) {
    var readViewFitContainerWidth = _a.readViewFitContainerWidth;
    return readViewFitContainerWidth ? '100%' : 'auto';
}, colors_1.N30);
ReadViewContentWrapper.displayName = 'ReadViewContentWrapper';
exports.default = ReadViewContentWrapper;
var templateObject_1;
//# sourceMappingURL=ReadViewContentWrapper.js.map