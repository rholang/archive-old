import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { N20, B100 } from '@atlaskit/theme/colors';
import { e500 } from '@atlaskit/theme/elevation';
import { TableBodyRow } from '../TableRow';
var rankingStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
/**
 * TODO: Pass the props here to get particular theme for the table
 * Skipping it for now as it may impact migration as util-shared-styles does not support this feature
 */
var rankingItemStyles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  ", " border-radius: 2px;\n"], ["\n  background-color: ", ";\n  ", " border-radius: 2px;\n"])), N20, e500());
var draggableStyles = function (_a) {
    var isRanking = _a.isRanking, isRankingItem = _a.isRankingItem;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", " ", " &:focus {\n    outline-style: solid;\n    outline-color: ", ";\n    outline-width: 2px;\n  }\n"], ["\n  ", " ", " &:focus {\n    outline-style: solid;\n    outline-color: ", ";\n    outline-width: 2px;\n  }\n"])), isRanking && rankingStyles, isRankingItem && rankingItemStyles, B100);
};
export var RankableTableBodyRow = styled(TableBodyRow)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), draggableStyles);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TableRow.js.map