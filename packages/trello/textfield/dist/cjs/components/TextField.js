"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var textfield_1 = tslib_1.__importDefault(require("@atlaskit/textfield"));
var theme_1 = tslib_1.__importDefault(require("../theme"));
function TextField(textFieldProps) {
    var nachosTheme = function (adgTheme, themeProps) { return ({
        container: tslib_1.__assign(tslib_1.__assign({}, theme_1.default(adgTheme, themeProps).container), (textFieldProps.theme && textFieldProps.theme(themeProps).container)),
        input: tslib_1.__assign(tslib_1.__assign({}, theme_1.default(adgTheme, themeProps).input), (textFieldProps.theme && textFieldProps.theme(themeProps).input)),
    }); };
    return React.createElement(textfield_1.default, tslib_1.__assign({}, textFieldProps, { theme: nachosTheme }));
}
exports.TextField = TextField;
TextField.defaultProps = {
    appearance: 'default',
};
exports.default = TextField;
//# sourceMappingURL=TextField.js.map