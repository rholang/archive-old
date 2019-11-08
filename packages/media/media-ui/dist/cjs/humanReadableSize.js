"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bytes = tslib_1.__importStar(require("bytes"));
// eslint-disable-next-line no-bitwise
var ONE_MEGABYTE_IN_BYTES = 1 << 20;
/**
 * Takes a media (file) size in bytes and returns a human readable string
 */
function toHumanReadableMediaSize(size) {
    // [MS-967]: Api issue might return string for size
    var parsedSize = parseInt("" + size, 10);
    var decimalPlaces = parsedSize < ONE_MEGABYTE_IN_BYTES ? 0 : 1;
    return bytes
        .format(parsedSize, {
        unitSeparator: ' ',
        decimalPlaces: decimalPlaces,
    })
        .toUpperCase();
}
exports.toHumanReadableMediaSize = toHumanReadableMediaSize;
//# sourceMappingURL=humanReadableSize.js.map