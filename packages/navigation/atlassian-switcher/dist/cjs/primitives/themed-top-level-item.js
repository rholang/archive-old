"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var default_theme_1 = require("../theme/default-theme");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var ThemeableItemParent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n  border-radius: 3px;\n  flex-grow: 1;\n"], ["\n  ",
    ";\n  border-radius: 3px;\n  flex-grow: 1;\n"])), function (_a) {
    var isParentHovered = _a.isParentHovered, tokens = _a.tokens;
    return isParentHovered && "background-color: " + tokens.hover.background;
});
var ThemeableItemWrapper = styled_components_1.default(ThemeableItemParent)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  overflow: hidden;\n"], ["\n  width: 100%;\n  overflow: hidden;\n"])));
var ThemeableToggleStyle = styled_components_1.default(ThemeableItemParent)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  max-height: 47px;\n  cursor: pointer;\n  margin-left: 2px;\n"], ["\n  max-height: 47px;\n  cursor: pointer;\n  margin-left: 2px;\n"])));
exports.ItemWrapper = function (props) { return (React.createElement(default_theme_1.TopLevelItemWrapperTheme.Consumer, null, function (tokens) { return React.createElement(ThemeableItemWrapper, tslib_1.__assign({}, props, { tokens: tokens })); })); };
exports.Toggle = function (props) { return (React.createElement(default_theme_1.TopLevelItemWrapperTheme.Consumer, null, function (tokens) { return React.createElement(ThemeableToggleStyle, tslib_1.__assign({}, props, { tokens: tokens })); })); };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=themed-top-level-item.js.map