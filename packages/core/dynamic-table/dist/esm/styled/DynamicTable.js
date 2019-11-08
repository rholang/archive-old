import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { multiply } from '@atlaskit/theme/math';
export var Table = styled.table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  border-collapse: collapse;\n  width: 100%;\n"], ["\n  ",
    ";\n  border-collapse: collapse;\n  width: 100%;\n"])), function (_a) {
    var isFixedSize = _a.isFixedSize;
    return isFixedSize && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      table-layout: fixed;\n    "], ["\n      table-layout: fixed;\n    "])));
});
export var Caption = styled.caption(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 1.42857143em;\n  /* there is a bug in Safari: if element which creates a new stacking context\n     is a child of a table, table caption re-renders in bad wrong position\n     https://stackoverflow.com/questions/44009186/safari-bug-translating-table-row-group-using-gsap-make-caption-jump-to-bottom\n  */\n  will-change: transform;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1.2;\n  margin-bottom: ", "px;\n  margin-top: ", "px;\n  text-align: left;\n"], ["\n  font-size: 1.42857143em;\n  /* there is a bug in Safari: if element which creates a new stacking context\n     is a child of a table, table caption re-renders in bad wrong position\n     https://stackoverflow.com/questions/44009186/safari-bug-translating-table-row-group-using-gsap-make-caption-jump-to-bottom\n  */\n  will-change: transform;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1.2;\n  margin-bottom: ", "px;\n  margin-top: ", "px;\n  text-align: left;\n"])), gridSize, multiply(gridSize, 3.5));
export var PaginationWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=DynamicTable.js.map