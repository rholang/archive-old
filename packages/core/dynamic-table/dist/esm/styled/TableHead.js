import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { B100 } from '@atlaskit/theme/colors';
import { arrowsStyle, cellStyle, onClickStyle, truncateStyle, } from './constants';
import { head } from '../theme';
var rankingStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
export var Head = styled.thead(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  ", ";\n"], ["\n  border-bottom: 2px solid ", ";\n  ", ";\n"])), head.borderColor, function (_a) {
    var isRanking = _a.isRanking;
    return isRanking && rankingStyles;
});
export var HeadCell = styled.th(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", " ", " ", " ", " border: none;\n  color: ", ";\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n  text-align: left;\n  vertical-align: top;\n  &:focus {\n    outline: solid 2px ", ";\n  }\n"], ["\n  ", " ",
    " ", " ", " border: none;\n  color: ", ";\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n  text-align: left;\n  vertical-align: top;\n  &:focus {\n    outline: solid 2px ", ";\n  }\n"])), function (p) { return onClickStyle({ onClick: Boolean(p.onClick) }); }, function (p) {
    return truncateStyle(p);
}, function (p) { return arrowsStyle(p); }, cellStyle, head.textColor, B100);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=TableHead.js.map