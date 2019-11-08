"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var evaluate_inner_1 = tslib_1.__importDefault(require("./utils/evaluate-inner"));
var tableBorderWdth = 2;
exports.default = evaluate_inner_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  table {\n    border-collapse: collapse;\n    width: 100%;\n  }\n\n  thead,\n  tbody,\n  tfoot {\n    border-bottom: ", "px solid ", ";\n  }\n\n  td,\n  th {\n    border: 1px solid #ddd;\n    border-collapse: collapse;\n    text-align: left;\n    padding: ", "px ", "px;\n    text-align: left;\n\n  }\n\n  th {\n    vertical-align: top;\n  }\n\n\n\n\n  caption {\n    ", "\n    margin-bottom: ", "px;\n    text-align: left;\n  }\n"], ["\n  table {\n    border-collapse: collapse;\n    width: 100%;\n  }\n\n  thead,\n  tbody,\n  tfoot {\n    border-bottom: ", "px solid ", ";\n  }\n\n  td,\n  th {\n    border: 1px solid #ddd;\n    border-collapse: collapse;\n    text-align: left;\n    padding: ", "px ", "px;\n    text-align: left;\n\n  }\n\n  th {\n    vertical-align: top;\n  }\n\n\n\n\n  caption {\n    ", "\n    margin-bottom: ", "px;\n    text-align: left;\n  }\n"])), tableBorderWdth, theme_1.colors.N40, theme_1.gridSize(), theme_1.gridSize(), theme_1.typography.h600(), theme_1.gridSize());
var templateObject_1;
//# sourceMappingURL=tables.js.map