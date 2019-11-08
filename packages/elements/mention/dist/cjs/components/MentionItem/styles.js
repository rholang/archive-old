"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
exports.RowStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow: hidden;\n  padding: 6px 14px;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow: hidden;\n  padding: 6px 14px;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n"])));
exports.AvatarStyle = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  flex: initial;\n  opacity: ", ";\n"], ["\n  position: relative;\n  flex: initial;\n  opacity: ",
    ";\n"])), function (props) {
    return props.restricted ? '0.5' : 'inherit';
});
exports.NameSectionStyle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  flex: 1;\n  min-width: 0;\n  margin-left: 14px;\n  opacity: ", ";\n"], ["\n  flex: 1;\n  min-width: 0;\n  margin-left: 14px;\n  opacity: ",
    ";\n"])), function (props) {
    return props.restricted ? '0.5' : 'inherit';
});
exports.FullNameStyle = styled_components_1.default.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: ", ";\n"], ["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: ", ";\n"])), theme_1.colors.N900);
exports.InfoSectionStyle = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n  opacity: ", ";\n\n  & {\n    /* Lozenge */\n    & > span {\n      margin-bottom: 2px;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n  opacity: ",
    ";\n\n  & {\n    /* Lozenge */\n    & > span {\n      margin-bottom: 2px;\n    }\n  }\n"])), function (props) {
    return props.restricted ? '0.5' : 'inherit';
});
exports.TimeStyle = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  margin-left: 20px;\n  flex: none;\n  color: ", ";\n  font-size: 12px;\n"], ["\n  margin-left: 20px;\n  flex: none;\n  color: ", ";\n  font-size: 12px;\n"])), theme_1.colors.N100);
exports.MentionItemStyle = styled_components_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  display: block;\n  overflow: hidden;\n  list-style-type: none;\n  height: 48px;\n  line-height: 1.2;\n  cursor: pointer;\n"], ["\n  background-color: ",
    ";\n  display: block;\n  overflow: hidden;\n  list-style-type: none;\n  height: 48px;\n  line-height: 1.2;\n  cursor: pointer;\n"])), function (props) {
    return props.selected ? theme_1.colors.N30 : 'transparent';
});
exports.AccessSectionStyle = styled_components_1.default.div(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  padding-left: 5px;\n  color: ", ";\n"], ["\n  padding-left: 5px;\n  color: ", ";\n"])), theme_1.colors.N500);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styles.js.map