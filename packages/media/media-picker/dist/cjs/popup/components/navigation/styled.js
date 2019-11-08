"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var colors_1 = require("@atlaskit/theme/colors");
exports.FolderViewerNavigation = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n\n  /* Ensure header has height */\n  min-height: 60px;\n  padding: 15px 13px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  background-color: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n\n  /* Ensure header has height */\n  min-height: 60px;\n  padding: 15px 13px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  background-color: ", ";\n"])), colors_1.N0);
exports.FolderViewerNavigation.displayName = 'FolderViewerNavigation';
exports.ControlsWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject([""], [""])));
exports.Controls = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  height: 30px;\n  display: flex;\n"], ["\n  height: 30px;\n  display: flex;\n"])));
exports.ControlButton = function (props) { return (React.createElement(button_1.default, tslib_1.__assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_1.__rest(_a, ["buttonStyles"]);
        return tslib_1.__assign({ buttonStyles: tslib_1.__assign(tslib_1.__assign({}, buttonStyles), { marginRight: '5px' }) }, rest);
    } }))); };
exports.BreadCrumbs = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
exports.BreadCrumbLinkLabel = styled_components_1.default.span(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  &:hover {\n    text-decoration: ", ";\n  }\n"], ["\n  &:hover {\n    text-decoration: ",
    ";\n  }\n"])), function (props) {
    return props.isLast ? 'none' : 'underline';
});
exports.BreadCrumbLinkSeparator = styled_components_1.default.span(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  display: ", ";\n  margin: 0 4px;\n  text-decoration: none;\n"], ["\n  color: ", ";\n  display: ",
    ";\n  margin: 0 4px;\n  text-decoration: none;\n"])), colors_1.N500, function (props) {
    return props.isLast ? 'none' : 'inline';
});
exports.BreadCrumbLink = styled_components_1.default.span(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  cursor: ", ";\n  font-size: ", ";\n"], ["\n  color: ", ";\n  cursor: ",
    ";\n  font-size: ",
    ";\n"])), function (props) { return (props.isLast ? colors_1.N900 : colors_1.N500); }, function (props) {
    return props.isLast ? 'default' : 'pointer';
}, function (props) {
    return props.isLast ? '20px' : '14px';
});
exports.AccountItemButton = function (props) { return React.createElement(button_1.default, tslib_1.__assign({}, props)); };
// Dropdown is NOT intentionally extended by this component to allow HACK style below to work
exports.AccountDropdownWrapper = styled_components_1.default.div(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  /* TODO: remove this when the ak-dropdown-menu package supports custom item types */\n  span[role='presentation'] > span > span:first-child {\n    display: none;\n  }\n"], ["\n  /* TODO: remove this when the ak-dropdown-menu package supports custom item types */\n  span[role='presentation'] > span > span:first-child {\n    display: none;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map