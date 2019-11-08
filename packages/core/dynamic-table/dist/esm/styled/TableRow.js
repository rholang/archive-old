import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { row } from '../theme';
export var TableBodyRow = styled.tr(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n\n  &:hover {\n    ", "\n"], ["\n  ",
    "\n\n  &:hover {\n    ",
    "\n"])), function (_a) {
    var isHighlighted = _a.isHighlighted;
    return isHighlighted && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), row.highlightedBackground);
}, function (_a) {
    var isHighlighted = _a.isHighlighted;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background-color: ", ";\n      "], ["\n        background-color: ",
        ";\n      "])), isHighlighted
        ? row.hoverHighlightedBackground
        : row.hoverBackground);
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=TableRow.js.map