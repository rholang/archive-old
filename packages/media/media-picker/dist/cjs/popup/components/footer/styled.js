"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-end;\n\n  height: 80px;\n  padding: 26px 15px 23px 18px;\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-end;\n\n  height: 80px;\n  padding: 26px 15px 23px 18px;\n"])));
exports.InsertButton = function (props) { return (React.createElement(button_1.default, tslib_1.__assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_1.__rest(_a, ["buttonStyles"]);
        return tslib_1.__assign({ buttonStyles: tslib_1.__assign(tslib_1.__assign({}, buttonStyles), { marginRight: '5px' }) }, rest);
    } }))); };
exports.CancelButton = function (props) { return React.createElement(button_1.default, tslib_1.__assign({}, props)); };
var templateObject_1;
//# sourceMappingURL=styled.js.map