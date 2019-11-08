"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var react_1 = tslib_1.__importStar(require("react"));
var theme_1 = require("../../theme");
var styles_1 = require("./styles");
exports.PrimaryButton = react_1.forwardRef(function (props, ref) {
    var children = props.children, testId = props.testId, tooltip = props.tooltip, buttonProps = tslib_1.__rest(props, ["children", "testId", "tooltip"]);
    var theme = theme_1.useTheme();
    var button = (react_1.default.createElement(button_1.default, tslib_1.__assign({ appearance: "primary", "data-testid": testId, ref: ref, theme: styles_1.getPrimaryButtonTheme(theme) }, buttonProps), children));
    if (tooltip) {
        return (react_1.default.createElement(tooltip_1.default, { content: tooltip, hideTooltipOnClick: true }, button));
    }
    return button;
});
//# sourceMappingURL=index.js.map