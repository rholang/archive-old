"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var gridSizeTimes_1 = tslib_1.__importDefault(require("../../util/gridSizeTimes"));
exports.Screen = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: 640px;\n  margin-bottom: ", "px;\n  > p {\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n  }\n"], ["\n  width: 640px;\n  margin-bottom: ", "px;\n  > p {\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n  }\n"])), gridSizeTimes_1.default(2), gridSizeTimes_1.default(3), gridSizeTimes_1.default(2));
exports.LoadingWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 500px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 500px;\n"])));
exports.Title = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n  margin-bottom: ", "px;\n  margin-top: 0;\n"], ["\n  ", ";\n  margin-bottom: ", "px;\n  margin-top: 0;\n"])), theme_1.typography.h700, gridSizeTimes_1.default(3));
exports.MainInformationList = styled_components_1.default.ul(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  > li b {\n    font-weight: 600;\n  }\n"], ["\n  > li b {\n    font-weight: 600;\n  }\n"])));
exports.AccessibleSitesWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), gridSizeTimes_1.default(1.5));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map