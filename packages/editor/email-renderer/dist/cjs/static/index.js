"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var icons = tslib_1.__importStar(require("./icons"));
var icons_1 = require("./icons");
var constants_1 = require("./generator/constants");
var util_1 = require("../styles/util");
tslib_1.__exportStar(require("./icons"), exports);
var cidPrefix = 'cid:';
var pfcsPrefix = util_1.CS_CONTENT_PREFIX;
var cidMatcher = new RegExp("src=\"" + cidPrefix + pfcsPrefix + "-([\\w]*)-([\\w-]*)\"", 'gi');
exports.createContentId = function (imageName, isCidPrefixed) {
    if (isCidPrefixed === void 0) { isCidPrefixed = true; }
    return "" + (isCidPrefixed ? cidPrefix : '') + pfcsPrefix + "-icon-" + imageName;
};
var embeddedImagesMapper = function (iconName) { return ({
    contentId: exports.createContentId(icons_1.IconName[iconName], false),
    contentType: "image/" + constants_1.imageOutputType,
    data: icons[iconName],
}); };
exports.processImages = function (html, isMockEnabled) {
    if (isMockEnabled === void 0) { isMockEnabled = false; }
    var imageSet = new Set();
    var imageProcessor = function (match) {
        var captureGroups = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            captureGroups[_i - 1] = arguments[_i];
        }
        // Inline the image if mock is enabled
        if (isMockEnabled) {
            return "src=\"" + constants_1.base64Prefix + icons[captureGroups[1]] + "\"";
        }
        // Otherwise, do not do a replacement (keep the cid as the src), and add the image to the set.
        imageSet.add(captureGroups[1]);
        return match;
    };
    var result = html.replace(cidMatcher, imageProcessor);
    var embeddedImages = tslib_1.__spread(imageSet).map(embeddedImagesMapper);
    return { result: result, embeddedImages: embeddedImages };
};
//# sourceMappingURL=index.js.map