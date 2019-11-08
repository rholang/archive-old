/** @jsx jsx */
import { __makeTemplateObject } from "tslib";
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { gridSize } from '@atlaskit/theme/constants';
import * as colors from '@atlaskit/theme/colors';
export var truncate = function (width) {
    if (width === void 0) { width = '100%'; }
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: ", ";\n"], ["\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: ", ";\n"])), width);
};
var ItemGroupTitleSize = 11;
export var ItemGroupTitle = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  line-height: ", ";\n  font-weight: 600;\n  padding-bottom: ", "px;\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  line-height: ", ";\n  font-weight: 600;\n  padding-bottom: ", "px;\n  ", "\n"])), colors.N200, ItemGroupTitleSize, (gridSize() * 2) / ItemGroupTitleSize, gridSize(), truncate());
export var RelatedArticlesContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-bottom: ", "px;\n  position: relative;\n"], ["\n  padding-bottom: ", "px;\n  position: relative;\n"])), 2 * gridSize());
export var ToggleShowMoreArticles = styled.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding-top: ", "px;\n  display: inline-block;\n  cursor: pointer;\n"], ["\n  padding-top: ", "px;\n  display: inline-block;\n  cursor: pointer;\n"])), gridSize());
/**
 * Loading styled-components
 */
export var LoadignRelatedArticleSection = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 1.5rem;\n"], ["\n  margin-top: 1.5rem;\n"])));
export var LoadignRelatedArticleList = styled.ul(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"], ["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"])));
export var LoadignRelatedArticleListItem = styled.li(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-top: 1rem;\n  display: inline-block;\n  width: 100%;\n\n  & > div {\n    display: inline-block;\n  }\n"], ["\n  margin-top: 1rem;\n  display: inline-block;\n  width: 100%;\n\n  & > div {\n    display: inline-block;\n  }\n"])));
export var LoadignRelatedArticleListItemText = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: calc(100% - (40px + 0.5rem));\n  margin-left: 0.5rem;\n"], ["\n  width: calc(100% - (40px + 0.5rem));\n  margin-left: 0.5rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map