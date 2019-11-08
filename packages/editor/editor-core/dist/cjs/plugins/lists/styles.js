"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-ignore: unused variable
// prettier-ignore
var styled_components_1 = require("styled-components");
exports.listsStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  .ProseMirror li {\n    position: relative;\n\n    > p:not(:first-child) {\n      margin: 4px 0 0 0;\n    }\n  }\n\n  /* Make sure li selections wrap around markers */\n  li.ProseMirror-selectednode {\n    outline: none;\n  }\n\n  li.ProseMirror-selectednode::after {\n    content: '';\n    position: absolute;\n    left: -32px;\n    right: -2px;\n    top: -2px;\n    bottom: -2px;\n    border: 2px solid #8cf;\n    pointer-events: none;\n  }\n"], ["\n  .ProseMirror li {\n    position: relative;\n\n    > p:not(:first-child) {\n      margin: 4px 0 0 0;\n    }\n  }\n\n  /* Make sure li selections wrap around markers */\n  li.ProseMirror-selectednode {\n    outline: none;\n  }\n\n  li.ProseMirror-selectednode::after {\n    content: '';\n    position: absolute;\n    left: -32px;\n    right: -2px;\n    top: -2px;\n    bottom: -2px;\n    border: 2px solid #8cf;\n    pointer-events: none;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=styles.js.map