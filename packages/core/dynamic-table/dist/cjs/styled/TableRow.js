"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var theme_1 = require("../theme");
exports.TableBodyRow = styled_components_1.default.tr(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", "\n\n  &:hover {\n    ", "\n"], ["\n  ",
    "\n\n  &:hover {\n    ",
    "\n"])), function (_a) {
    var isHighlighted = _a.isHighlighted;
    return isHighlighted && styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), theme_1.row.highlightedBackground);
}, function (_a) {
    var isHighlighted = _a.isHighlighted;
    return styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        background-color: ", ";\n      "], ["\n        background-color: ",
        ";\n      "])), isHighlighted
        ? theme_1.row.hoverHighlightedBackground
        : theme_1.row.hoverBackground);
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=TableRow.js.map