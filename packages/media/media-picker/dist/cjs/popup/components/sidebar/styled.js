"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
// TODO: ECEEF1 is not an atlaskit colour
// https://product-fabric.atlassian.net/browse/MSW-156
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-color: #eceef1;\n  z-index: 60;\n"], ["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-color: #eceef1;\n  z-index: 60;\n"])));
exports.ServiceList = styled_components_1.default.ul(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  padding: 0;\n  float: left;\n  width: 100%;\n  margin: 17px 0 0 0 !important; /* We need important here due to default \"ul\" style overrides */\n"], ["\n  padding: 0;\n  float: left;\n  width: 100%;\n  margin: 17px 0 0 0 !important; /* We need important here due to default \"ul\" style overrides */\n"])));
exports.Separator = styled_components_1.default.li(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  list-style-type: none;\n  margin: 9px 0 10px 0;\n  box-sizing: border-box;\n  padding: 0 25px 0 25px;\n  position: relative;\n  cursor: default;\n"], ["\n  width: 100%;\n  list-style-type: none;\n  margin: 9px 0 10px 0;\n  box-sizing: border-box;\n  padding: 0 25px 0 25px;\n  position: relative;\n  cursor: default;\n"])));
// TODO: rgba(9, 30, 66, 0.06) is not an atlaskit colour
// https://product-fabric.atlassian.net/browse/MSW-156
exports.SeparatorLine = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  border-top: 1px solid rgba(9, 30, 66, 0.06);\n  height: 0;\n"], ["\n  width: 100%;\n  border-top: 1px solid rgba(9, 30, 66, 0.06);\n  height: 0;\n"])));
exports.StyledIcon = styled_components_1.default.svg(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  width: 22px;\n  height: 22px;\n"], ["\n  width: 22px;\n  height: 22px;\n"])));
exports.StyledSvgGroup = styled_components_1.default.g(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  fill: ", ";\n"], ["\n  fill: ", ";\n"])), function (_a) {
    var active = _a.active;
    return (active ? '#0061C5' : '#42526E');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map