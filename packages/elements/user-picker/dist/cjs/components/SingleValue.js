"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var avatar_1 = require("@atlaskit/avatar");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var SizeableAvatar_1 = require("./SizeableAvatar");
var utils_1 = require("./utils");
var AvatarItemComponent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  border: none;\n  padding: 0;\n  width: auto;\n  overflow: hidden;\n\n  & > span {\n    box-sizing: border-box;\n  }\n\n  &:hover {\n    width: auto;\n    padding: 0;\n    border: none;\n  }\n"], ["\n  border: none;\n  padding: 0;\n  width: auto;\n  overflow: hidden;\n\n  & > span {\n    box-sizing: border-box;\n  }\n\n  &:hover {\n    width: auto;\n    padding: 0;\n    border: none;\n  }\n"])));
exports.SingleValue = function (props) {
    var _a = props.data, label = _a.label, data = _a.data, _b = props.selectProps, appearance = _b.appearance, isFocused = _b.isFocused;
    return !isFocused ? (React.createElement(avatar_1.AvatarItem, { backgroundColor: "transparent", avatar: React.createElement(SizeableAvatar_1.SizeableAvatar, { src: utils_1.getAvatarUrl(data), appearance: appearance, name: label }), primaryText: label, component: AvatarItemComponent })) : null;
};
var templateObject_1;
//# sourceMappingURL=SingleValue.js.map