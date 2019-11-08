"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var constants_1 = require("@atlaskit/theme/constants");
exports.ArticleContentInner = styled_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding-bottom: ", "px;\n  position: relative;\n"], ["\n  padding-bottom: ", "px;\n  position: relative;\n"])), 2 * constants_1.gridSize());
exports.ArticleContentTitle = styled_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  padding-bottom: ", "px;\n"], ["\n  padding-bottom: ", "px;\n"])), 2 * constants_1.gridSize());
exports.ArticleContentTitleLink = styled_1.default.a(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  &:hover {\n    text-decoration: none;\n  }\n"], ["\n  &:hover {\n    text-decoration: none;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map