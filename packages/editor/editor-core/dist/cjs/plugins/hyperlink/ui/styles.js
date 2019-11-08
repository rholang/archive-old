"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var ToolbarButton_1 = tslib_1.__importDefault(require("../../../ui/ToolbarButton"));
var FloatingToolbar_1 = tslib_1.__importDefault(require("../../../ui/FloatingToolbar"));
var Separator_1 = tslib_1.__importDefault(require("../../../ui/Separator"));
// `line-height: 1` to fix extra 1px height from toolbar wrapper
exports.FloatingToolbar = styled_components_1.default(FloatingToolbar_1.default)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  max-height: 350px;\n  min-height: 32px;\n  height: initial;\n  & > div {\n    line-height: 1;\n  }\n  & > div > button:last-child {\n    margin-right: 0;\n  }\n  .normal& input {\n    min-width: 244px;\n    margin-right: 2px;\n  }\n  .recent-search& {\n    padding: 8px 0 0;\n    input {\n      padding: 0 8px 8px;\n    }\n  }\n"], ["\n  max-height: 350px;\n  min-height: 32px;\n  height: initial;\n  & > div {\n    line-height: 1;\n  }\n  & > div > button:last-child {\n    margin-right: 0;\n  }\n  .normal& input {\n    min-width: 244px;\n    margin-right: 2px;\n  }\n  .recent-search& {\n    padding: 8px 0 0;\n    input {\n      padding: 0 8px 8px;\n    }\n  }\n"])));
// `a&` because `Button` uses it and it produces a more specific selector `a.xyz`
exports.ToolbarButton = function (props) { return (React.createElement(ToolbarButton_1.default, tslib_1.__assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_1.__rest(_a, ["buttonStyles"]);
        return tslib_1.__assign({ buttonStyles: tslib_1.__assign(tslib_1.__assign({}, buttonStyles), { padding: 0, width: '24px', margin: '0 2px', 'a&': {
                    width: '24px',
                    margin: '0 2px',
                } }) }, rest);
    } }))); };
// Need fixed height because parent has height inherit and `height: 100%` doesn't work because of that
exports.Separator = styled_components_1.default(Separator_1.default)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  margin: 2px 6px;\n  height: 20px;\n"], ["\n  margin: 2px 6px;\n  height: 20px;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map