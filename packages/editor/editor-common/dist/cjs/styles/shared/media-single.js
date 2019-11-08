"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-ignore: unused variable
// prettier-ignore
var styled_components_1 = require("styled-components");
var mediaSingleClassName = 'media-single';
exports.mediaSingleClassName = mediaSingleClassName;
var mediaSingleSharedStyle = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  li .", " {\n    margin: 0;\n  }\n\n  /* Hack for chrome to fix media single position\n     inside a list when media is the first child */\n  &.ua-chrome li > .mediaSingleView-content-wrap::before {\n    content: '';\n    display: block;\n    height: 0;\n  }\n\n  table .", " {\n    margin-top: 12px;\n    margin-bottom: 12px;\n    clear: both;\n  }\n\n  .", ".image-wrap-left\n    + .", ".image-wrap-right,\n    .", ".image-wrap-right\n    + .", ".image-wrap-left,\n    .", ".image-wrap-left\n    + .", ".image-wrap-left,\n    .", ".image-wrap-right\n    + .", ".image-wrap-right {\n    margin-right: 0;\n    margin-left: 0;\n  }\n"], ["\n  li .", " {\n    margin: 0;\n  }\n\n  /* Hack for chrome to fix media single position\n     inside a list when media is the first child */\n  &.ua-chrome li > .mediaSingleView-content-wrap::before {\n    content: '';\n    display: block;\n    height: 0;\n  }\n\n  table .", " {\n    margin-top: 12px;\n    margin-bottom: 12px;\n    clear: both;\n  }\n\n  .", ".image-wrap-left\n    + .", ".image-wrap-right,\n    .", ".image-wrap-right\n    + .", ".image-wrap-left,\n    .", ".image-wrap-left\n    + .", ".image-wrap-left,\n    .", ".image-wrap-right\n    + .", ".image-wrap-right {\n    margin-right: 0;\n    margin-left: 0;\n  }\n"])), mediaSingleClassName, mediaSingleClassName, mediaSingleClassName, mediaSingleClassName, mediaSingleClassName, mediaSingleClassName, mediaSingleClassName, mediaSingleClassName, mediaSingleClassName, mediaSingleClassName);
exports.mediaSingleSharedStyle = mediaSingleSharedStyle;
var templateObject_1;
//# sourceMappingURL=media-single.js.map