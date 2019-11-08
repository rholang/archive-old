"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-ignore: unused variable
var styled_components_1 = require("styled-components");
var theme_1 = require("@atlaskit/theme");
var consts_1 = require("../consts");
exports.blockquoteSharedStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  & blockquote {\n    box-sizing: border-box;\n    padding-left: ", "px;\n    border-left: 2px solid ", ";\n    margin: ", " 0 0 0;\n    margin-right: 0;\n\n    [dir='rtl'] & {\n      padding-left: 0;\n      padding-right: ", "px;\n    }\n\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &::before {\n      content: '';\n    }\n\n    &::after {\n      content: none;\n    }\n\n    & p {\n      display: block;\n    }\n\n    & table,\n    & table:last-child {\n      display: inline-table;\n    }\n  }\n"], ["\n  & blockquote {\n    box-sizing: border-box;\n    padding-left: ", "px;\n    border-left: 2px solid ", ";\n    margin: ", " 0 0 0;\n    margin-right: 0;\n\n    [dir='rtl'] & {\n      padding-left: 0;\n      padding-right: ", "px;\n    }\n\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &::before {\n      content: '';\n    }\n\n    &::after {\n      content: none;\n    }\n\n    & p {\n      display: block;\n    }\n\n    & table,\n    & table:last-child {\n      display: inline-table;\n    }\n  }\n"])), theme_1.gridSize() * 2, consts_1.akEditorBlockquoteBorderColor, consts_1.blockNodesVerticalMargin, theme_1.gridSize() * 2);
var templateObject_1;
//# sourceMappingURL=blockquote.js.map