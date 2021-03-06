import { __read } from "tslib";
import * as namedColors from 'css-color-names';
/**
 * We're avoding importing these colors from @atlaskit/theme since we
 * do not want to have react as a dependency of this package.
 * TODO: Refactor this once tokenization by Core team is ready
 * https://product-fabric.atlassian.net/browse/CS-908
 */
export var R50 = '#FFEBE6';
export var R75 = '#FFBDAD';
export var R100 = '#FF8F73';
export var R300 = '#FF5630';
export var R400 = '#DE350B';
export var R500 = '#BF2600';
export var Y50 = '#FFFAE6';
export var Y75 = '#FFF0B3';
export var Y200 = '#FFC400';
export var Y400 = '#FF991F';
export var Y500 = '#FF8B00';
export var G50 = '#E3FCEF';
export var G75 = '#ABF5D1';
export var G200 = '#57D9A3';
export var G300 = '#36B37E';
export var G400 = '#00875A';
export var G500 = '#006644';
export var B50 = '#DEEBFF';
export var B75 = '#B3D4FF';
export var B100 = '#4C9AFF';
export var B400 = '#0052CC';
export var B500 = '#0747A6';
export var N0 = '#FFFFFF';
export var N20 = '#F4F5F7';
export var N30 = '#EBECF0';
export var N40 = '#DFE1E6';
export var N50 = '#C1C7D0';
export var N60 = '#B3BAC5';
export var N80 = '#97A0AF';
export var N90 = '#8993A4';
export var N200 = '#6B778C';
export var N300 = '#5E6C84';
export var N500 = '#42526E';
export var N800 = '#172B4D';
export var P50 = '#EAE6FF';
export var P75 = '#C0B6F2';
export var P100 = '#998DD9';
export var P300 = '#6554C0';
export var P400 = '#5243AA';
export var P500 = '#403294';
export var T50 = '#E6FCFF';
export var T75 = '#B3F5FF';
export var T100 = '#79E2F2';
export var T300 = '#00B8D9';
export var T500 = '#008DA6';
/**
 * @return String with HEX-coded color
 */
export function normalizeHexColor(color, defaultColor) {
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
/**
 * Converts hex color format to rgb.
 * Works well with full hex color format and shortcut as well.
 *
 * @param hex - hex color string (#xxx, or #xxxxxx)
 */
export function hexToRgb(color) {
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
/**
 * Converts hex color format to rgba.
 *
 * @param hex - hex color string (#xxx, or #xxxxxx)
 */
export function hexToRgba(rawColor, alpha) {
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
export function rgbToHex(value) {
    var matches = value.match(/(0?\.?\d{1,3})%?\b/g);
    if (matches && matches.length >= 3) {
        var _a = __read(matches.map(Number), 3), red = _a[0], green = _a[1], blue = _a[2];
        return ('#' +
            (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1) // eslint-disable-line no-bitwise
        );
    }
    return null;
}
export function isRgb(color) {
    return /rgba?\(/.test(color);
}
export function isHex(color) {
    return /^#([A-Fa-f0-9]{3}){1,2}$/.test(color);
}
//# sourceMappingURL=colors.js.map