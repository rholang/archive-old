"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var shared_styles_1 = require("../../shared-styles");
exports.MentionPickerStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: ", ";\n"], ["\n  display: ",
    ";\n"])), function (props) {
    return props.visible ? 'block' : 'none';
});
exports.MentionPickerInfoStyle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  background: #fff;\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  display: block;\n  width: ", ";\n  white-space: nowrap;\n\n  & {\n    p {\n      margin: 0;\n      overflow: hidden;\n      padding: 9px;\n      text-overflow: ellipsis;\n    }\n  }\n"], ["\n  background: #fff;\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  display: block;\n  width: ", ";\n  white-space: nowrap;\n\n  & {\n    p {\n      margin: 0;\n      overflow: hidden;\n      padding: 9px;\n      text-overflow: ellipsis;\n    }\n  }\n"])), theme_1.colors.N100, shared_styles_1.noDialogContainerBorderColor, shared_styles_1.noDialogContainerBorderRadius, shared_styles_1.noDialogContainerBoxShadow, shared_styles_1.mentionListWidth);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map