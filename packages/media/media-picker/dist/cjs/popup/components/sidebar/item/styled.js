"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
exports.Wrapper = styled_components_1.default.li(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  padding: 6px 25px;\n  list-style-type: none;\n  opacity: 1;\n\n  ", ";\n  &:hover {\n    ", ";\n  }\n"], ["\n  color: ", ";\n  padding: 6px 25px;\n  list-style-type: none;\n  opacity: 1;\n\n  ", ";\n  &:hover {\n    ",
    ";\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? colors_1.B400 : colors_1.N500);
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? '' : 'cursor: pointer');
}, function (_a) {
    var isActive = _a.isActive;
    return isActive ? '' : 'background-color: #E5E8EC';
});
exports.ServiceIcon = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  vertical-align: middle;\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n"])));
exports.ServiceName = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  font-size: 14px;\n  position: relative;\n  margin-left: 10px;\n  top: -1px;\n  display: inline-block;\n"], ["\n  font-size: 14px;\n  position: relative;\n  margin-left: 10px;\n  top: -1px;\n  display: inline-block;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map