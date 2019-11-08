"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chromatism_1 = tslib_1.__importDefault(require("chromatism"));
var getBoxShadow = function (color) { return "0 0 0 2px " + color; };
/**
 * Mixes color2 with color1 by the specified weight. This is effectively a simple rgba to rgb conversion.
 */
var mix = function (color1, color2, weight) {
    var weightDistance = 1 - weight;
    var normalize = function (_a) {
        var r = _a.r, g = _a.g, b = _a.b;
        return ({
            r: r / 255,
            g: g / 255,
            b: b / 255,
        });
    };
    var normalizedBackground = normalize(color1);
    var normalizedColor = normalize(color2);
    var red = Math.round((weightDistance * normalizedBackground.r + weight * normalizedColor.r) *
        255);
    var green = Math.round((weightDistance * normalizedBackground.g + weight * normalizedColor.g) *
        255);
    var blue = Math.round((weightDistance * normalizedBackground.b + weight * normalizedColor.b) *
        255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
};
var generateCSSStates = function (colors) {
    var backgroundColor = colors.backgroundColor, color = colors.color;
    var backgroundColorRgb = chromatism_1.default.convert(backgroundColor).rgb;
    var contrastBackgroundColorRgb = chromatism_1.default.contrastRatio(backgroundColor)
        .rgb;
    var colorRgb = chromatism_1.default.convert(color).rgb;
    return {
        active: {
            backgroundColor: mix(backgroundColorRgb, contrastBackgroundColorRgb, 0.13),
            boxShadow: getBoxShadow('transparent'),
            color: color,
        },
        default: {
            backgroundColor: backgroundColor,
            boxShadow: getBoxShadow('transparent'),
            color: color,
        },
        focus: {
            boxShadow: getBoxShadow(mix(backgroundColorRgb, colorRgb, 0.5)),
            color: color,
        },
        hover: {
            backgroundColor: mix(backgroundColorRgb, contrastBackgroundColorRgb, 0.08),
            boxShadow: getBoxShadow('transparent'),
            color: color,
        },
    };
};
exports.generateTheme = function (args) {
    var primaryColors = args.primary, secondaryColors = args.secondary;
    var primary = generateCSSStates(primaryColors);
    var primaryActive = primary.active, primaryDefault = primary.default;
    var backgroundColorRgb = chromatism_1.default.convert(primaryColors.backgroundColor)
        .rgb;
    var contrastBackgroundColor = chromatism_1.default.contrastRatio(backgroundColorRgb);
    var secondary = secondaryColors
        ? generateCSSStates(secondaryColors)
        : generateCSSStates({
            backgroundColor: mix(backgroundColorRgb, contrastBackgroundColor.rgb, 0.13),
            color: primaryColors.color,
        });
    return {
        mode: {
            create: secondary,
            iconButton: primary,
            navigation: {
                backgroundColor: primaryDefault.backgroundColor,
                color: primaryDefault.color,
            },
            primaryButton: primary,
            search: {
                backgroundColor: primaryActive.backgroundColor,
                color: primaryActive.color,
            },
            skeleton: {
                backgroundColor: contrastBackgroundColor.hex,
            },
        },
    };
};
//# sourceMappingURL=themeGenerator.js.map