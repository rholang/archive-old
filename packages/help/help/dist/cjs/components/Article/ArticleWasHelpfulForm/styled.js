"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var constants_1 = require("@atlaskit/theme/constants");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
exports.ArticleRateContainer = styled_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding-bottom: ", "px;\n  position: relative;\n"], ["\n  padding-bottom: ", "px;\n  position: relative;\n"])), 2 * constants_1.gridSize());
exports.ArticleRateText = styled_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: ", ";\n  line-height: ", "px;\n  position: relative;\n  display: inline-block;\n"], ["\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: ", ";\n  line-height: ", "px;\n  position: relative;\n  display: inline-block;\n"])), colors.N200, constants_1.gridSize() * 2);
exports.ArticleRateAnswerWrapper = styled_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  padding-top: ", "px;\n"], ["\n  padding-top: ", "px;\n"])), constants_1.gridSize() * 2);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map