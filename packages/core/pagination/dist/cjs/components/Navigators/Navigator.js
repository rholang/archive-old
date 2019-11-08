"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var constants_1 = require("@atlaskit/theme/constants");
var Navigator = function (props) { return (react_1.default.createElement(button_1.default, tslib_1.__assign({}, props, { appearance: "subtle", spacing: "none", theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_1.__rest(_a, ["buttonStyles"]);
        var halfGridSize = constants_1.gridSize() / 2;
        return tslib_1.__assign({ buttonStyles: tslib_1.__assign(tslib_1.__assign({}, buttonStyles), { paddingLeft: halfGridSize + "px", paddingRight: halfGridSize + "px", 'html[dir=rtl] &': {
                    transform: 'rotate(180deg)',
                } }) }, rest);
    } }))); };
exports.default = Navigator;
//# sourceMappingURL=Navigator.js.map