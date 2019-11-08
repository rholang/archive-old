"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
exports.default = react_1.default.forwardRef(function (_a, ref) {
    var truncationWidth = _a.truncationWidth, props = tslib_1.__rest(_a, ["truncationWidth"]);
    return (react_1.default.createElement(button_1.default, tslib_1.__assign({}, props, { ref: ref, theme: function (currentTheme, themeProps) {
            var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_1.__rest(_a, ["buttonStyles"]);
            return tslib_1.__assign({ buttonStyles: tslib_1.__assign(tslib_1.__assign({}, buttonStyles), (truncationWidth
                    ? { maxWidth: truncationWidth + "px !important" }
                    : { flexShrink: 1, minWidth: 0 })) }, rest);
        } })));
});
//# sourceMappingURL=Button.js.map