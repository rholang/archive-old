"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
var mixins_1 = require("../../../mixins");
var widgetHeight = 24;
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  margin-top: 3px;\n\n  max-height: ", "px;\n  overflow: hidden;\n\n  & > * {\n    margin-right: 12px;\n  }\n  & > *:last-child {\n    margin-right: auto;\n  }\n"], ["\n  display: flex;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  margin-top: 3px;\n\n  max-height: ", "px;\n  overflow: hidden;\n\n  & > * {\n    margin-right: 12px;\n  }\n  & > *:last-child {\n    margin-right: auto;\n  }\n"])), widgetHeight * 2);
exports.WidgetWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  height: ", "px;\n  max-width: calc(100% - (2 * 12px));\n"], ["\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  height: ", "px;\n  max-width: calc(100% - (2 * 12px));\n"])), widgetHeight);
exports.WidgetDetails = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  /* space the widget items */\n  & > * + * {\n    margin-left: 4px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  /* space the widget items */\n  & > * + * {\n    margin-left: 4px;\n  }\n"])));
exports.Title = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  font-size: 12px;\n  line-height: ", ";\n"], ["\n  color: ", ";\n  font-size: 12px;\n  line-height: ", ";\n"])), colors_1.N300, 16 / 12);
exports.Text = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  ", ";\n  color: ", ";\n  font-size: 12px;\n  line-height: ", ";\n"], ["\n  ", ";\n  color: ", ";\n  font-size: 12px;\n  line-height: ", ";\n"])), mixins_1.ellipsis('none'), colors_1.N800, 16 / 12);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map