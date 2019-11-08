"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var components_1 = require("@atlaskit/theme/components");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var CustomComponentProxy_1 = tslib_1.__importDefault(require("../components/CustomComponentProxy"));
// This is necessary because we don't know what DOM element the custom component will render.
exports.default = (function (styles) {
    var StyledCustomComponent = components_1.withTheme(styled_components_1.default(CustomComponentProxy_1.default)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      &,\n      &:hover,\n      &:active,\n      &:focus {\n        ", "\n      }\n    "], ["\n      &,\n      &:hover,\n      &:active,\n      &:focus {\n        ", "\n      }\n    "])), styles));
    var StyledButton = components_1.withTheme(styled_components_1.default.button(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), styles));
    var StyledLink = components_1.withTheme(styled_components_1.default.a(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n    a& {\n      ", ";\n    }\n  "], ["\n    a& {\n      ", ";\n    }\n  "])), styles));
    var StyledSpan = components_1.withTheme(styled_components_1.default.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), styles));
    return function getStyled(_a) {
        var component = _a.component, href = _a.href, onClick = _a.onClick;
        var Ret = StyledSpan;
        if (component) {
            Ret = StyledCustomComponent;
        }
        else if (href) {
            Ret = StyledLink;
        }
        else if (onClick) {
            Ret = StyledButton;
        }
        return Ret;
    };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styledCache.js.map