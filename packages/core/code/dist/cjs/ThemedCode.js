"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = require("styled-components");
var Code_1 = tslib_1.__importDefault(require("./components/Code"));
var CodeWithTheme = styled_components_1.withTheme(Code_1.default);
var emptyTheme = {};
function default_1(props) {
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: emptyTheme },
        react_1.default.createElement(CodeWithTheme, tslib_1.__assign({}, props))));
}
exports.default = default_1;
//# sourceMappingURL=ThemedCode.js.map