"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
exports.blockMarksSharedStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  /**\n   * We need to remove margin-top from first item\n   * inside doc, tableCell, tableHeader, blockquote, etc.\n   */\n  *:not(.fabric-editor-block-mark) >,\n  /* For nested block marks */\n  *:not(.fabric-editor-block-mark) > div.fabric-editor-block-mark:first-child {\n    p,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      &:first-child {\n        margin-top: 0;\n      }\n    }\n  }\n"], ["\n  /**\n   * We need to remove margin-top from first item\n   * inside doc, tableCell, tableHeader, blockquote, etc.\n   */\n  *:not(.fabric-editor-block-mark) >,\n  /* For nested block marks */\n  *:not(.fabric-editor-block-mark) > div.fabric-editor-block-mark:first-child {\n    p,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      &:first-child {\n        margin-top: 0;\n      }\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=block-marks.js.map