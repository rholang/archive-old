import { __assign, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { TopLevelItemWrapperTheme } from '../theme/default-theme';
import styled from 'styled-components';
var ThemeableItemParent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  border-radius: 3px;\n  flex-grow: 1;\n"], ["\n  ",
    ";\n  border-radius: 3px;\n  flex-grow: 1;\n"])), function (_a) {
    var isParentHovered = _a.isParentHovered, tokens = _a.tokens;
    return isParentHovered && "background-color: " + tokens.hover.background;
});
var ThemeableItemWrapper = styled(ThemeableItemParent)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  overflow: hidden;\n"], ["\n  width: 100%;\n  overflow: hidden;\n"])));
var ThemeableToggleStyle = styled(ThemeableItemParent)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  max-height: 47px;\n  cursor: pointer;\n  margin-left: 2px;\n"], ["\n  max-height: 47px;\n  cursor: pointer;\n  margin-left: 2px;\n"])));
export var ItemWrapper = function (props) { return (React.createElement(TopLevelItemWrapperTheme.Consumer, null, function (tokens) { return React.createElement(ThemeableItemWrapper, __assign({}, props, { tokens: tokens })); })); };
export var Toggle = function (props) { return (React.createElement(TopLevelItemWrapperTheme.Consumer, null, function (tokens) { return React.createElement(ThemeableToggleStyle, __assign({}, props, { tokens: tokens })); })); };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=themed-top-level-item.js.map