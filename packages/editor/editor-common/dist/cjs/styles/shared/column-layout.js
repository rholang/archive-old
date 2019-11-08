"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var consts_1 = require("../consts");
var columnLayoutSharedStyle = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  [data-layout-section] {\n    display: flex;\n    flex-direction: row;\n    & > * {\n      flex: 1;\n      min-width: 0;\n    }\n\n    @media screen and (max-width: ", "px) {\n      flex-direction: column;\n    }\n  }\n"], ["\n  [data-layout-section] {\n    display: flex;\n    flex-direction: row;\n    & > * {\n      flex: 1;\n      min-width: 0;\n    }\n\n    @media screen and (max-width: ", "px) {\n      flex-direction: column;\n    }\n  }\n"])), consts_1.gridMediumMaxWidth);
exports.columnLayoutSharedStyle = columnLayoutSharedStyle;
var templateObject_1;
//# sourceMappingURL=column-layout.js.map