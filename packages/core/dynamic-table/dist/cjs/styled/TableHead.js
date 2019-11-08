"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
var constants_1 = require("./constants");
var theme_1 = require("../theme");
var rankingStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
exports.Head = styled_components_1.default.thead(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  ", ";\n"], ["\n  border-bottom: 2px solid ", ";\n  ", ";\n"])), theme_1.head.borderColor, function (_a) {
    var isRanking = _a.isRanking;
    return isRanking && rankingStyles;
});
exports.HeadCell = styled_components_1.default.th(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", " ", " ", " ", " border: none;\n  color: ", ";\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n  text-align: left;\n  vertical-align: top;\n  &:focus {\n    outline: solid 2px ", ";\n  }\n"], ["\n  ", " ",
    " ", " ", " border: none;\n  color: ", ";\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n  text-align: left;\n  vertical-align: top;\n  &:focus {\n    outline: solid 2px ", ";\n  }\n"])), function (p) { return constants_1.onClickStyle({ onClick: Boolean(p.onClick) }); }, function (p) {
    return constants_1.truncateStyle(p);
}, function (p) { return constants_1.arrowsStyle(p); }, constants_1.cellStyle, theme_1.head.textColor, colors_1.B100);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=TableHead.js.map