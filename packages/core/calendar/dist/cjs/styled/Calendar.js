"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors_1 = require("@atlaskit/theme/colors");
var wrapperBackgroundColor = components_1.themed({ light: colors_1.N0, dark: colors_1.N700 });
var getCalendarThColor = components_1.themed({ light: colors_1.N200, dark: colors_1.N200 });
exports.Announcer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"], ["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"])));
exports.CalendarTable = styled_components_1.default.table(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  margin: 0;\n  text-align: center;\n"], ["\n  display: inline-block;\n  margin: 0;\n  text-align: center;\n"])));
exports.CalendarTbody = styled_components_1.default.tbody(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  border: 0;\n"], ["\n  border: 0;\n"])));
// FIXME: first-child
// @atlaskit/css-reset should adjust default behaviours
var thSpacing = styled_components_1.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  padding: 8px 8px;\n  min-width: 40px;\n  box-sizing: border-box;\n"], ["\n  padding: 8px 8px;\n  min-width: 40px;\n  box-sizing: border-box;\n"])));
exports.CalendarTh = styled_components_1.default.th(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  border: 0;\n  color: ", ";\n  font-size: 11px;\n  ", ";\n  text-transform: uppercase;\n  text-align: center;\n\n  &:last-child,\n  &:first-child {\n    ", ";\n  }\n"], ["\n  border: 0;\n  color: ", ";\n  font-size: 11px;\n  ", ";\n  text-transform: uppercase;\n  text-align: center;\n\n  &:last-child,\n  &:first-child {\n    ", ";\n  }\n"])), getCalendarThColor, thSpacing, thSpacing);
exports.CalendarThead = styled_components_1.default.thead(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  border: 0;\n"], ["\n  border: 0;\n"])));
exports.Wrapper = styled_components_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  display: inline-block;\n  padding: 16px;\n  user-select: none;\n  box-sizing: border-box;\n  outline: none;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  display: inline-block;\n  padding: 16px;\n  user-select: none;\n  box-sizing: border-box;\n  outline: none;\n"])), wrapperBackgroundColor, colors_1.text);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Calendar.js.map