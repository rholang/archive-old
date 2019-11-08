"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("../styles");
var ui_1 = require("../ui");
exports.calcBreakoutWidth = function (layout, containerWidth) {
    var effectiveFullWidth = containerWidth - styles_1.akEditorBreakoutPadding;
    switch (layout) {
        case 'full-width':
            return Math.min(effectiveFullWidth, styles_1.akEditorFullWidthLayoutWidth) + "px";
        case 'wide':
            return exports.calcWideWidth(containerWidth);
        default:
            return '100%';
    }
};
exports.calcWideWidth = function (containerWidth, maxWidth, fallback) {
    if (containerWidth === void 0) { containerWidth = styles_1.akEditorDefaultLayoutWidth; }
    if (maxWidth === void 0) { maxWidth = Infinity; }
    if (fallback === void 0) { fallback = '100%'; }
    var effectiveFullWidth = containerWidth - styles_1.akEditorBreakoutPadding;
    var layoutMaxWidth = ui_1.mapBreakpointToLayoutMaxWidth(ui_1.getBreakpoint(containerWidth));
    var wideWidth = Math.min(Math.ceil(layoutMaxWidth * styles_1.breakoutWideScaleRatio), effectiveFullWidth);
    return layoutMaxWidth > wideWidth
        ? fallback
        : Math.min(maxWidth, wideWidth) + "px";
};
exports.absoluteBreakoutWidth = function (layout, containerWidth) {
    var breakoutWidth = exports.calcBreakoutWidth(layout, containerWidth);
    // If it's percent, map to max layout size
    if (breakoutWidth.endsWith('%')) {
        switch (layout) {
            case 'full-width':
                return styles_1.akEditorFullWidthLayoutWidth;
            case 'wide':
                return styles_1.akEditorWideLayoutWidth;
            default:
                return ui_1.mapBreakpointToLayoutMaxWidth(ui_1.getBreakpoint(containerWidth));
        }
    }
    return parseInt(breakoutWidth, 10);
};
//# sourceMappingURL=calc-breakout-width.js.map