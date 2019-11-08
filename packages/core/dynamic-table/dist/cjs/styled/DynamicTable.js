"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var math_1 = require("@atlaskit/theme/math");
exports.Table = styled_components_1.default.table(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n  border-collapse: collapse;\n  width: 100%;\n"], ["\n  ",
    ";\n  border-collapse: collapse;\n  width: 100%;\n"])), function (_a) {
    var isFixedSize = _a.isFixedSize;
    return isFixedSize && styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      table-layout: fixed;\n    "], ["\n      table-layout: fixed;\n    "])));
});
exports.Caption = styled_components_1.default.caption(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  font-size: 1.42857143em;\n  /* there is a bug in Safari: if element which creates a new stacking context\n     is a child of a table, table caption re-renders in bad wrong position\n     https://stackoverflow.com/questions/44009186/safari-bug-translating-table-row-group-using-gsap-make-caption-jump-to-bottom\n  */\n  will-change: transform;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1.2;\n  margin-bottom: ", "px;\n  margin-top: ", "px;\n  text-align: left;\n"], ["\n  font-size: 1.42857143em;\n  /* there is a bug in Safari: if element which creates a new stacking context\n     is a child of a table, table caption re-renders in bad wrong position\n     https://stackoverflow.com/questions/44009186/safari-bug-translating-table-row-group-using-gsap-make-caption-jump-to-bottom\n  */\n  will-change: transform;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1.2;\n  margin-bottom: ", "px;\n  margin-top: ", "px;\n  text-align: left;\n"])), constants_1.gridSize, math_1.multiply(constants_1.gridSize, 3.5));
exports.PaginationWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=DynamicTable.js.map