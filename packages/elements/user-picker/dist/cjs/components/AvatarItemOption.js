"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var avatar_1 = require("@atlaskit/avatar");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var AvatarComponent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,\n  &:hover,\n  &:active,\n  &:focus {\n    padding: 0;\n    margin: 0;\n    border: none;\n  }\n"], ["\n  &,\n  &:hover,\n  &:active,\n  &:focus {\n    padding: 0;\n    margin: 0;\n    border: none;\n  }\n"])));
exports.TextWrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n"], ["\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n"])), function (_a) {
    var color = _a.color;
    return color;
});
exports.AvatarItemOption = function (props) { return (react_1.default.createElement(avatar_1.AvatarItem, tslib_1.__assign({ backgroundColor: "transparent", component: AvatarComponent }, props))); };
var templateObject_1, templateObject_2;
//# sourceMappingURL=AvatarItemOption.js.map