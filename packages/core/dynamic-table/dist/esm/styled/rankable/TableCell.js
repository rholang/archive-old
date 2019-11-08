import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { TableBodyCell } from '../TableCell';
var rankingStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n"], ["\n  box-sizing: border-box;\n"])));
export var RankableTableBodyCell = styled(TableBodyCell)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var isRanking = _a.isRanking;
    return isRanking && rankingStyles;
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=TableCell.js.map