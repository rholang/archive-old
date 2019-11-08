"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var namedColors = tslib_1.__importStar(require("css-color-names"));
/**
 * @return String with HEX-coded color
 */
function normalizeHexColor(color, defaultColor) {
    if (!color) {
        return null;
    }
    // Normalize to hex
    color = color.trim().toLowerCase();
    if (isHex(color)) {
        // Normalize 3-hex to 6-hex colours
        if (color.length === 4) {
            color = color
                .split('')
                .map(function (c) { return (c === '#' ? '#' : "" + c + c); })
                .join('');
        }
    }
    else if (isRgb(color)) {
        return rgbToHex(color);
    }
    else {
        // http://dev.w3.org/csswg/css-color/#named-colors
        if (namedColors.default && namedColors.default[color]) {
            color = namedColors.default[color];
        }
        else if (namedColors && namedColors[color]) {
            color = namedColors[color];
        }
        else {
            return null;
        }
    }
    if (color === defaultColor) {
        return null;
    }
    return color;
}
exports.normalizeHexColor = normalizeHexColor;
/**
 * Converts hex color format to rgb.
 * Works well with full hex color format and shortcut as well.
 *
 * @param hex - hex color string (#xxx, or #xxxxxx)
 */
function hexToRgb(color) {
    if (!isHex(color)) {
        return null;
    }
    var colorBits = color.substring(1).split('');
    if (colorBits.length === 3) {
        colorBits = [
            colorBits[0],
            colorBits[0],
            colorBits[1],
            colorBits[1],
            colorBits[2],
            colorBits[2],
        ];
    }
    var rgb = Number("0x" + colorBits.join(''));
    // eslint-disable-next-line no-bitwise
    return "rgb(" + ((rgb >> 16) & 255) + "," + ((rgb >> 8) & 255) + "," + (rgb & 255) + ")";
}
exports.hexToRgb = hexToRgb;
/**
 * Converts hex color format to rgba.
 *
 * @param hex - hex color string (#xxx, or #xxxxxx)
 */
function hexToRgba(rawColor, alpha) {
    var color = normalizeHexColor(rawColor);
    if (!color) {
        return null;
    }
    var hex2rgb = function (color) {
        return color.match(/[a-z0-9]{2}/gi).map(function (hex) { return parseInt(hex, 16); });
    };
    return "rgba(" + hex2rgb(color)
        .concat(alpha)
        .join(',') + ")";
}
exports.hexToRgba = hexToRgba;
function rgbToHex(value) {
    var matches = value.match(/(0?\.?\d{1,3})%?\b/g);
    if (matches && matches.length >= 3) {
        var _a = tslib_1.__read(matches.map(Number), 3), red = _a[0], green = _a[1], blue = _a[2];
        return ('#' +
            (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1) // eslint-disable-line no-bitwise
        );
    }
    return null;
}
exports.rgbToHex = rgbToHex;
function isRgb(color) {
    return /rgba?\(/.test(color);
}
exports.isRgb = isRgb;
function isHex(color) {
    return /^#([A-Fa-f0-9]{3}){1,2}$/.test(color);
}
exports.isHex = isHex;
//# sourceMappingURL=color.js.map