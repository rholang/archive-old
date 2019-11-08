"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var ThemeColor = {
    Restricted: {
        text: colors_1.N100A,
    },
};
exports.BulletSpacer = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding-right: ", "px;\n"], ["\n  padding-right: ", "px;\n"])), constants_1.gridSize() / 2);
exports.Restricted = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  display: flex;\n"], ["\n  color: ", ";\n  display: flex;\n"])), ThemeColor.Restricted.text);
exports.RestrictedIconWrapper = styled_components_1.default.span(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  margin-right: ", "px;\n"], ["\n  margin-right: ", "px;\n"])), constants_1.gridSize() / 2);
exports.RestrictedIconWrapper.displayName = 'RestrictedIconWrapper';
exports.TopItem = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  margin-left: ", "px;\n\n  [dir='rtl'] & {\n    margin-left: 0;\n    margin-right: ", "px;\n  }\n\n  &:first-child {\n    margin-left: 0;\n\n    [dir='rtl'] & {\n      margin-right: 0;\n    }\n  }\n"], ["\n  display: inline-block;\n  margin-left: ", "px;\n\n  [dir='rtl'] & {\n    margin-left: 0;\n    margin-right: ", "px;\n  }\n\n  &:first-child {\n    margin-left: 0;\n\n    [dir='rtl'] & {\n      margin-right: 0;\n    }\n  }\n"])), constants_1.gridSize(), constants_1.gridSize());
exports.TopItemsContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=HeaderStyles.js.map