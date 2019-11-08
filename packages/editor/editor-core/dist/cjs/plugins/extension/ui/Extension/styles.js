"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var theme_2 = require("@atlaskit/theme");
exports.padding = theme_1.gridSize();
exports.BODIED_EXT_PADDING = exports.padding * 2;
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background: ", ";\n  border-radius: ", "px;\n  color: ", ";\n  position: relative;\n  vertical-align: middle;\n  font-size: ", "px;\n\n  .ProseMirror-selectednode > span > & > .extension-overlay {\n    box-shadow: inset 0px 0px 0px 2px ", ";\n    opacity: 1;\n  }\n\n  &.with-overlay {\n    .extension-overlay {\n      background: ", ";\n      color: transparent;\n    }\n\n    &:hover .extension-overlay {\n      opacity: 1;\n    }\n  }\n"], ["\n  background: ",
    ";\n  border-radius: ", "px;\n  color: ",
    ";\n  position: relative;\n  vertical-align: middle;\n  font-size: ", "px;\n\n  .ProseMirror-selectednode > span > & > .extension-overlay {\n    box-shadow: inset 0px 0px 0px 2px ", ";\n    opacity: 1;\n  }\n\n  &.with-overlay {\n    .extension-overlay {\n      background: ", ";\n      color: transparent;\n    }\n\n    &:hover .extension-overlay {\n      opacity: 1;\n    }\n  }\n"])), theme_2.themed({
    light: theme_2.colors.N20,
    dark: theme_2.colors.DN50,
}), theme_2.borderRadius(), theme_2.themed({
    dark: theme_2.colors.DN700,
}), theme_1.fontSize(), theme_2.colors.B200, theme_2.colors.N20A);
exports.Overlay = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  border-radius: ", "px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s;\n"], ["\n  border-radius: ", "px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s;\n"])), theme_2.borderRadius());
exports.PlaceholderFallback = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n\n  & > img {\n    margin: 0 4px;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n\n  & > img {\n    margin: 0 4px;\n  }\n"])));
exports.PlaceholderFallbackParams = styled_components_1.default.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  max-width: 200px;\n  margin-left: 5px;\n  color: ", ";\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"], ["\n  display: inline-block;\n  max-width: 200px;\n  margin-left: 5px;\n  color: ", ";\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"])), theme_2.colors.N70);
exports.StyledImage = styled_components_1.default.img(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  max-height: 16px;\n  max-width: 16px;\n"], ["\n  max-height: 16px;\n  max-width: 16px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styles.js.map