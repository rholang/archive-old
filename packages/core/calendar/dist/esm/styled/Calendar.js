import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { themed } from '@atlaskit/theme/components';
import { N0, N700, N200, text } from '@atlaskit/theme/colors';
var wrapperBackgroundColor = themed({ light: N0, dark: N700 });
var getCalendarThColor = themed({ light: N200, dark: N200 });
export var Announcer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"], ["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"])));
export var CalendarTable = styled.table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  margin: 0;\n  text-align: center;\n"], ["\n  display: inline-block;\n  margin: 0;\n  text-align: center;\n"])));
export var CalendarTbody = styled.tbody(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border: 0;\n"], ["\n  border: 0;\n"])));
// FIXME: first-child
// @atlaskit/css-reset should adjust default behaviours
var thSpacing = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 8px 8px;\n  min-width: 40px;\n  box-sizing: border-box;\n"], ["\n  padding: 8px 8px;\n  min-width: 40px;\n  box-sizing: border-box;\n"])));
export var CalendarTh = styled.th(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border: 0;\n  color: ", ";\n  font-size: 11px;\n  ", ";\n  text-transform: uppercase;\n  text-align: center;\n\n  &:last-child,\n  &:first-child {\n    ", ";\n  }\n"], ["\n  border: 0;\n  color: ", ";\n  font-size: 11px;\n  ", ";\n  text-transform: uppercase;\n  text-align: center;\n\n  &:last-child,\n  &:first-child {\n    ", ";\n  }\n"])), getCalendarThColor, thSpacing, thSpacing);
export var CalendarThead = styled.thead(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border: 0;\n"], ["\n  border: 0;\n"])));
export var Wrapper = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  display: inline-block;\n  padding: 16px;\n  user-select: none;\n  box-sizing: border-box;\n  outline: none;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  display: inline-block;\n  padding: 16px;\n  user-select: none;\n  box-sizing: border-box;\n  outline: none;\n"])), wrapperBackgroundColor, text);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Calendar.js.map