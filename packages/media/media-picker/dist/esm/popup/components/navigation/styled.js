import { __assign, __makeTemplateObject, __rest } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import { N0, N500, N900 } from '@atlaskit/theme/colors';
export var FolderViewerNavigation = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n\n  /* Ensure header has height */\n  min-height: 60px;\n  padding: 15px 13px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  background-color: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n\n  /* Ensure header has height */\n  min-height: 60px;\n  padding: 15px 13px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  background-color: ", ";\n"])), N0);
FolderViewerNavigation.displayName = 'FolderViewerNavigation';
export var ControlsWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
export var Controls = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 30px;\n  display: flex;\n"], ["\n  height: 30px;\n  display: flex;\n"])));
export var ControlButton = function (props) { return (React.createElement(Button, __assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = __rest(_a, ["buttonStyles"]);
        return __assign({ buttonStyles: __assign(__assign({}, buttonStyles), { marginRight: '5px' }) }, rest);
    } }))); };
export var BreadCrumbs = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
export var BreadCrumbLinkLabel = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  &:hover {\n    text-decoration: ", ";\n  }\n"], ["\n  &:hover {\n    text-decoration: ",
    ";\n  }\n"])), function (props) {
    return props.isLast ? 'none' : 'underline';
});
export var BreadCrumbLinkSeparator = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  display: ", ";\n  margin: 0 4px;\n  text-decoration: none;\n"], ["\n  color: ", ";\n  display: ",
    ";\n  margin: 0 4px;\n  text-decoration: none;\n"])), N500, function (props) {
    return props.isLast ? 'none' : 'inline';
});
export var BreadCrumbLink = styled.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n  cursor: ", ";\n  font-size: ", ";\n"], ["\n  color: ", ";\n  cursor: ",
    ";\n  font-size: ",
    ";\n"])), function (props) { return (props.isLast ? N900 : N500); }, function (props) {
    return props.isLast ? 'default' : 'pointer';
}, function (props) {
    return props.isLast ? '20px' : '14px';
});
export var AccountItemButton = function (props) { return React.createElement(Button, __assign({}, props)); };
// Dropdown is NOT intentionally extended by this component to allow HACK style below to work
export var AccountDropdownWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  /* TODO: remove this when the ak-dropdown-menu package supports custom item types */\n  span[role='presentation'] > span > span:first-child {\n    display: none;\n  }\n"], ["\n  /* TODO: remove this when the ak-dropdown-menu package supports custom item types */\n  span[role='presentation'] > span > span:first-child {\n    display: none;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map