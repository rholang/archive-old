"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = require("styled-components");
var theme_1 = require("@atlaskit/theme");
var WidthProvider_1 = require("../WidthProvider");
function mapBreakpointToFontSize(breakpoint) {
    switch (breakpoint) {
        case WidthProvider_1.Breakpoints.M:
            return theme_1.fontSize() + 2;
        case WidthProvider_1.Breakpoints.L:
            return theme_1.fontSize() + 4;
        default:
            return theme_1.fontSize();
    }
}
function mapBreakpointToLayoutMaxWidth(breakpoint) {
    switch (breakpoint) {
        case WidthProvider_1.Breakpoints.M:
            return 760;
        case WidthProvider_1.Breakpoints.L:
            return 850;
        default:
            return 680;
    }
}
exports.mapBreakpointToLayoutMaxWidth = mapBreakpointToLayoutMaxWidth;
function BaseTheme(_a) {
    var children = _a.children, dynamicTextSizing = _a.dynamicTextSizing;
    return (React.createElement(WidthProvider_1.WidthConsumer, null, function (_a) {
        var breakpoint = _a.breakpoint;
        return (React.createElement(styled_components_1.ThemeProvider, { theme: {
                baseFontSize: dynamicTextSizing
                    ? mapBreakpointToFontSize(breakpoint)
                    : mapBreakpointToFontSize(WidthProvider_1.Breakpoints.S),
                layoutMaxWidth: dynamicTextSizing
                    ? mapBreakpointToLayoutMaxWidth(breakpoint)
                    : mapBreakpointToLayoutMaxWidth(WidthProvider_1.Breakpoints.S),
            } },
            React.createElement(React.Fragment, null, children)));
    }));
}
exports.BaseTheme = BaseTheme;
//# sourceMappingURL=index.js.map