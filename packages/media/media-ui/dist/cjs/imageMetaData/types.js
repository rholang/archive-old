"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageType;
(function (ImageType) {
    ImageType["JPEG"] = "image/jpeg";
    ImageType["PNG"] = "image/png";
})(ImageType = exports.ImageType || (exports.ImageType = {}));
var SupportedImageMetaTag;
(function (SupportedImageMetaTag) {
    SupportedImageMetaTag["XResolution"] = "XResolution";
    SupportedImageMetaTag["YResolution"] = "YResolution";
    SupportedImageMetaTag["Orientation"] = "Orientation";
})(SupportedImageMetaTag = exports.SupportedImageMetaTag || (exports.SupportedImageMetaTag = {}));
// http://sylvana.net/jpegcrop/exif_orientation.html
exports.ExifOrientation = {
    'top-left': 1,
    'top-right': 2,
    'bottom-right': 3,
    'bottom-left': 4,
    'left-top': 5,
    'right-top': 6,
    'right-bottom': 7,
    'left-bottom': 8,
};
//# sourceMappingURL=types.js.map