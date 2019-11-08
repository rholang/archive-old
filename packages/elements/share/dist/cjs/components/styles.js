"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
exports.default = (function (props) { return (React.createElement(button_1.default, tslib_1.__assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_1.__rest(_a, ["buttonStyles"]);
        return tslib_1.__assign({ buttonStyles: tslib_1.__assign(tslib_1.__assign({}, buttonStyles), { padding: 0, '& > span > span:first-of-type': {
                    margin: '0',
                } }) }, rest);
    } }))); });
//# sourceMappingURL=styles.js.map