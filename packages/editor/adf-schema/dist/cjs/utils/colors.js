"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var namedColors = tslib_1.__importStar(require("css-color-names"));
/**
 * We're avoding importing these colors from @atlaskit/theme since we
 * do not want to have react as a dependency of this package.
 * TODO: Refactor this once tokenization by Core team is ready
 * https://product-fabric.atlassian.net/browse/CS-908
 */
exports.R50 = '#FFEBE6';
exports.R75 = '#FFBDAD';
exports.R100 = '#FF8F73';
exports.R300 = '#FF5630';
exports.R400 = '#DE350B';
exports.R500 = '#BF2600';
exports.Y50 = '#FFFAE6';
exports.Y75 = '#FFF0B3';
exports.Y200 = '#FFC400';
exports.Y400 = '#FF991F';
exports.Y500 = '#FF8B00';
exports.G50 = '#E3FCEF';
exports.G75 = '#ABF5D1';
exports.G200 = '#57D9A3';
exports.G300 = '#36B37E';
exports.G400 = '#00875A';
exports.G500 = '#006644';
exports.B50 = '#DEEBFF';
exports.B75 = '#B3D4FF';
exports.B100 = '#4C9AFF';
exports.B400 = '#0052CC';
exports.B500 = '#0747A6';
exports.N0 = '#FFFFFF';
exports.N20 = '#F4F5F7';
exports.N30 = '#EBECF0';
exports.N40 = '#DFE1E6';
exports.N50 = '#C1C7D0';
exports.N60 = '#B3BAC5';
exports.N80 = '#97A0AF';
exports.N90 = '#8993A4';
exports.N200 = '#6B778C';
exports.N300 = '#5E6C84';
exports.N500 = '#42526E';
exports.N800 = '#172B4D';
exports.P50 = '#EAE6FF';
exports.P75 = '#C0B6F2';
exports.P100 = '#998DD9';
exports.P300 = '#6554C0';
exports.P400 = '#5243AA';
exports.P500 = '#403294';
exports.T50 = '#E6FCFF';
exports.T75 = '#B3F5FF';
exports.T100 = '#79E2F2';
exports.T300 = '#00B8D9';
exports.T500 = '#008DA6';
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
//# sourceMappingURL=colors.js.map