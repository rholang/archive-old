"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var styles_1 = require("../styles");
exports.Wrapper = styled_components_1.default(styles_1.Wrapper)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  .extension-overflow-wrapper:not(.with-body) {\n    overflow-x: auto;\n  }\n\n  /* extension container breakout, only works on top level */\n  .ProseMirror > [extensiontype] &[data-layout='full-width'],\n  .ProseMirror > [extensiontype] &[data-layout='wide'] {\n    margin-left: 50%;\n    transform: translateX(-50%);\n  }\n  .ProseMirror > * [extensiontype] &[data-layout='wide'],\n  .ProseMirror > * [extensiontype] &[data-layout='wide'] {\n    width: 100% !important;\n  }\n"], ["\n  .extension-overflow-wrapper:not(.with-body) {\n    overflow-x: auto;\n  }\n\n  /* extension container breakout, only works on top level */\n  .ProseMirror > [extensiontype] &[data-layout='full-width'],\n  .ProseMirror > [extensiontype] &[data-layout='wide'] {\n    margin-left: 50%;\n    transform: translateX(-50%);\n  }\n  .ProseMirror > * [extensiontype] &[data-layout='wide'],\n  .ProseMirror > * [extensiontype] &[data-layout='wide'] {\n    width: 100% !important;\n  }\n"])));
exports.Header = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  cursor: pointer;\n  padding: ", "px ", "px ", "px;\n  vertical-align: middle;\n\n  &.with-children {\n    padding: 4px 8px 8px;\n  }\n"], ["\n  cursor: pointer;\n  padding: ", "px ", "px ", "px;\n  vertical-align: middle;\n\n  &.with-children {\n    padding: 4px 8px 8px;\n  }\n"])), styles_1.padding / 2, styles_1.padding / 2, styles_1.padding / 4);
exports.Content = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  padding: ", "px;\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", "px;\n"], ["\n  padding: ", "px;\n  background: ",
    ";\n  color: ",
    ";\n  border: 1px solid ", ";\n  border-radius: ", "px;\n"])), styles_1.padding, theme_1.themed({
    light: 'white',
    dark: theme_1.colors.DN30,
}), theme_1.themed({
    dark: theme_1.colors.DN900,
}), theme_1.colors.N30, theme_1.borderRadius());
exports.ContentWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  padding: 0 ", "px ", "px;\n"], ["\n  padding: 0 ", "px ", "px;\n"])), styles_1.padding, styles_1.padding);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styles.js.map