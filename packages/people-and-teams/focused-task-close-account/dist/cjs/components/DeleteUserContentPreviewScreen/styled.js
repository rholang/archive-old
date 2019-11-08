"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var gridSizeTimes_1 = tslib_1.__importDefault(require("../../util/gridSizeTimes"));
var getSelectedCardColor = function (props) {
    return props.isSelected && "" + theme_1.colors.B50;
};
exports.Screen = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: 640px;\n  margin-bottom: ", "px;\n"], ["\n  width: 640px;\n  margin-bottom: ", "px;\n"])), gridSizeTimes_1.default(4));
exports.Title = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n  margin-bottom: ", "px;\n  margin-top: 0;\n"], ["\n  ", ";\n  margin-bottom: ", "px;\n  margin-top: 0;\n"])), theme_1.typography.h700, gridSizeTimes_1.default(4));
exports.SectionCard = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  display: flex;\n  padding: ", "px;\n  width: 100%;\n  background-color: ", ";\n  border-radius: ", "px;\n  ", ";\n  margin-top: ", "px;\n"], ["\n  position: relative;\n  display: flex;\n  padding: ", "px;\n  width: 100%;\n  background-color: ", ";\n  border-radius: ", "px;\n  ", ";\n  margin-top: ", "px;\n"])), gridSizeTimes_1.default(2.5), function (props) { return getSelectedCardColor(props); }, theme_1.borderRadius(), theme_1.elevation.e200, gridSizeTimes_1.default(2));
exports.Avatar = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px;\n  margin-right: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px;\n  margin-right: ", "px;\n"])), gridSizeTimes_1.default(2.5), gridSizeTimes_1.default(1));
exports.UserDetails = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ", "px;\n  font-weight: 600;\n  color: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-top: ", "px;\n  font-weight: 600;\n  color: ", ";\n"])), gridSizeTimes_1.default(1.5), theme_1.colors.B400);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map