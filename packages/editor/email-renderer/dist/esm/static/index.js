import { __read, __spread } from "tslib";
import * as icons from './icons';
import { IconName } from './icons';
import { base64Prefix, imageOutputType } from './generator/constants';
import { CS_CONTENT_PREFIX } from '../styles/util';
export * from './icons';
var cidPrefix = 'cid:';
var pfcsPrefix = CS_CONTENT_PREFIX;
var cidMatcher = new RegExp("src=\"" + cidPrefix + pfcsPrefix + "-([\\w]*)-([\\w-]*)\"", 'gi');
export var createContentId = function (imageName, isCidPrefixed) {
    if (isCidPrefixed === void 0) { isCidPrefixed = true; }
    return "" + (isCidPrefixed ? cidPrefix : '') + pfcsPrefix + "-icon-" + imageName;
};
var embeddedImagesMapper = function (iconName) { return ({
    contentId: createContentId(IconName[iconName], false),
    contentType: "image/" + imageOutputType,
    data: icons[iconName],
}); };
export var processImages = function (html, isMockEnabled) {
    if (isMockEnabled === void 0) { isMockEnabled = false; }
    var imageSet = new Set();
    var imageProcessor = function (match) {
        var captureGroups = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            captureGroups[_i - 1] = arguments[_i];
        }
        // Inline the image if mock is enabled
        if (isMockEnabled) {
            return "src=\"" + base64Prefix + icons[captureGroups[1]] + "\"";
        }
        // Otherwise, do not do a replacement (keep the cid as the src), and add the image to the set.
        imageSet.add(captureGroups[1]);
        return match;
    };
    var result = html.replace(cidMatcher, imageProcessor);
    var embeddedImages = __spread(imageSet).map(embeddedImagesMapper);
    return { result: result, embeddedImages: embeddedImages };
};
//# sourceMappingURL=index.js.map