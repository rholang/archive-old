"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var theme_1 = require("@atlaskit/theme");
var editor_common_1 = require("@atlaskit/editor-common");
exports.extensionStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  .extensionView-content-wrap,\n  .bodiedExtensionView-content-wrap {\n    margin: ", "rem 0;\n\n    &:first-of-type {\n      margin-top: 0;\n    }\n\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n\n    &.ProseMirror-selectednode:not(.danger) .extension-container {\n      border-radius: ", "px;\n      box-shadow: 0 0 0 ", "px\n        ", ";\n    }\n  }\n\n  .extensionView-content-wrap .extension-container {\n    overflow: hidden;\n  }\n"], ["\n  .extensionView-content-wrap,\n  .bodiedExtensionView-content-wrap {\n    margin: ", "rem 0;\n\n    &:first-of-type {\n      margin-top: 0;\n    }\n\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n\n    &.ProseMirror-selectednode:not(.danger) .extension-container {\n      border-radius: ", "px;\n      box-shadow: 0 0 0 ", "px\n        ", ";\n    }\n  }\n\n  .extensionView-content-wrap .extension-container {\n    overflow: hidden;\n  }\n"])), editor_common_1.blockNodesVerticalMargin, theme_1.borderRadius, editor_common_1.akEditorSelectedBorderBoldSize, editor_common_1.akEditorSelectedBorder);
var templateObject_1;
//# sourceMappingURL=styles.js.map