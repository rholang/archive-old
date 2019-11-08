"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@emotion/core");
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var constants_1 = require("@atlaskit/theme/constants");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
exports.truncate = function (width) {
    if (width === void 0) { width = '100%'; }
    return core_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: ", ";\n"], ["\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: ", ";\n"])), width);
};
var ItemGroupTitleSize = 11;
exports.ItemGroupTitle = styled_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  line-height: ", ";\n  font-weight: 600;\n  padding-bottom: ", "px;\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  line-height: ", ";\n  font-weight: 600;\n  padding-bottom: ", "px;\n  ", "\n"])), colors.N200, ItemGroupTitleSize, (constants_1.gridSize() * 2) / ItemGroupTitleSize, constants_1.gridSize(), exports.truncate());
exports.RelatedArticlesContainer = styled_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  padding-bottom: ", "px;\n  position: relative;\n"], ["\n  padding-bottom: ", "px;\n  position: relative;\n"])), 2 * constants_1.gridSize());
exports.ToggleShowMoreArticles = styled_1.default.a(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  padding-top: ", "px;\n  display: inline-block;\n  cursor: pointer;\n"], ["\n  padding-top: ", "px;\n  display: inline-block;\n  cursor: pointer;\n"])), constants_1.gridSize());
/**
 * Loading styled-components
 */
exports.LoadignRelatedArticleSection = styled_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  margin-top: 1.5rem;\n"], ["\n  margin-top: 1.5rem;\n"])));
exports.LoadignRelatedArticleList = styled_1.default.ul(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"], ["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"])));
exports.LoadignRelatedArticleListItem = styled_1.default.li(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  margin-top: 1rem;\n  display: inline-block;\n  width: 100%;\n\n  & > div {\n    display: inline-block;\n  }\n"], ["\n  margin-top: 1rem;\n  display: inline-block;\n  width: 100%;\n\n  & > div {\n    display: inline-block;\n  }\n"])));
exports.LoadignRelatedArticleListItemText = styled_1.default.div(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  width: calc(100% - (40px + 0.5rem));\n  margin-left: 0.5rem;\n"], ["\n  width: calc(100% - (40px + 0.5rem));\n  margin-left: 0.5rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map