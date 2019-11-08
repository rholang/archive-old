"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
var elevation_1 = require("@atlaskit/theme/elevation");
var TableRow_1 = require("../TableRow");
var rankingStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
/**
 * TODO: Pass the props here to get particular theme for the table
 * Skipping it for now as it may impact migration as util-shared-styles does not support this feature
 */
var rankingItemStyles = styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  ", " border-radius: 2px;\n"], ["\n  background-color: ", ";\n  ", " border-radius: 2px;\n"])), colors_1.N20, elevation_1.e500());
var draggableStyles = function (_a) {
    var isRanking = _a.isRanking, isRankingItem = _a.isRankingItem;
    return styled_components_1.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", " ", " &:focus {\n    outline-style: solid;\n    outline-color: ", ";\n    outline-width: 2px;\n  }\n"], ["\n  ", " ", " &:focus {\n    outline-style: solid;\n    outline-color: ", ";\n    outline-width: 2px;\n  }\n"])), isRanking && rankingStyles, isRankingItem && rankingItemStyles, colors_1.B100);
};
exports.RankableTableBodyRow = styled_components_1.default(TableRow_1.TableBodyRow)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), draggableStyles);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TableRow.js.map