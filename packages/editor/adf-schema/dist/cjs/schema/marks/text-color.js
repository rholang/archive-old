"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var groups_1 = require("../groups");
var colors_1 = require("../../utils/colors");
/** New borders for colors in the color picker */
exports.borderColorPalette = (_a = {},
    _a[colors_1.N80] = colors_1.N90,
    _a[colors_1.P300] = colors_1.P500,
    _a[colors_1.T300] = colors_1.T500,
    _a[colors_1.G300] = colors_1.G500,
    _a[colors_1.R300] = colors_1.R500,
    _a[colors_1.Y400] = colors_1.Y500,
    _a);
// @see https://product-fabric.atlassian.net/wiki/spaces/E/pages/55979455/Colour+picker+decisions#Colourpickerdecisions-Visualdesigndecisions
exports.colorPalette = new Map();
var colorArrayPalette = [
    // [N800, default],
    [colors_1.N80, 'Light gray'],
    [colors_1.P300, 'Purple'],
    [colors_1.T300, 'Teal'],
    [colors_1.G300, 'Green'],
    [colors_1.R300, 'Red'],
    [colors_1.Y400, 'Orange'],
];
colorArrayPalette.forEach(function (_a) {
    var _b = tslib_1.__read(_a, 2), color = _b[0], label = _b[1];
    return exports.colorPalette.set(color.toLowerCase(), label);
});
exports.textColor = {
    attrs: { color: {} },
    inclusive: true,
    group: groups_1.COLOR,
    parseDOM: [
        {
            style: 'color',
            getAttrs: function (maybeValue) {
                var value = maybeValue;
                var hexColor;
                if (value.match(/^rgb/i)) {
                    hexColor = colors_1.rgbToHex(value);
                }
                else if (value[0] === '#') {
                    hexColor = value.toLowerCase();
                }
                // else handle other colour formats
                return hexColor && exports.colorPalette.has(hexColor)
                    ? { color: hexColor }
                    : false;
            },
        },
    ],
    toDOM: function (mark) {
        return [
            'span',
            {
                style: "color: " + mark.attrs.color,
            },
        ];
    },
};
//# sourceMappingURL=text-color.js.map