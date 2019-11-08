"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
var ThemeColor = {
    text: colors_1.N500,
};
var common = function (_a) {
    var hasAuthor = _a.hasAuthor;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &:not(:hover):not(:active) {\n    color: ", ";\n  }\n  font-weight: ", ";\n"], ["\n  &:not(:hover):not(:active) {\n    color: ", ";\n  }\n  font-weight: ", ";\n"])), ThemeColor.text, hasAuthor ? 500 : 'inherit');
};
exports.Anchor = styled_components_1.default.a(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (p) { return common(p); });
exports.Span = styled_components_1.default.span(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (p) { return common(p); });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=FieldStyles.js.map