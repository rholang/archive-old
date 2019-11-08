"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var TableCell_1 = require("../TableCell");
var rankingStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n"], ["\n  box-sizing: border-box;\n"])));
exports.RankableTableBodyCell = styled_components_1.default(TableCell_1.TableBodyCell)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var isRanking = _a.isRanking;
    return isRanking && rankingStyles;
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=TableCell.js.map