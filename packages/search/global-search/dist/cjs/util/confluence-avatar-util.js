"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Result_1 = require("../model/Result");
var _24_1 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/page/24"));
var _24_2 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/blog/24"));
var _24_3 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/image/24"));
var _24_4 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/excel-spreadsheet/24"));
var _24_5 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/video/24"));
var _24_6 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/archive/24"));
var _24_7 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/powerpoint-presentation/24"));
var _24_8 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/source-code/24"));
var _24_9 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/audio/24"));
var _24_10 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/word-document/24"));
var _24_11 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/pdf-document/24"));
var _24_12 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/generic/24"));
var avatar_1 = tslib_1.__importDefault(require("@atlaskit/avatar"));
var theme_1 = require("@atlaskit/theme");
/**
 * The following code was derived from an implementation in confluence-frontend,
 * although it differs substantially.
 *
 * The original can be found at ./packages/confluence-rest-api/src/helpers/icons.js
 */
var ATTACHMENT_ICON_CLASS_PREFIXES = [
    // Quick Nav prefix
    'content-type-attachment-',
    // CQL prefix
    'icon-file-',
];
var DEFAULT_ATTACHMENT_AVATAR = _24_12.default;
var ATTACHMENT_FILE_EXTENSION_MATCHERS = [
    {
        regexp: /\.(gif|jpeg|jpg|png)$/i,
        avatar: _24_3.default,
    },
    {
        regexp: /\.(pdf)$/i,
        avatar: _24_11.default,
    },
    {
        regexp: /\.(docx|dotx|doc|dot)$/i,
        avatar: _24_10.default,
    },
    {
        regexp: /\.(xml|html|js|css|java|jar|war|ear)$/i,
        avatar: _24_8.default,
    },
    {
        regexp: /\.(xlt|xls|xlsm|xlsx|xlst)$/i,
        avatar: _24_4.default,
    },
    {
        regexp: /\.(wma|wmv|ram|mp3)$/i,
        avatar: _24_9.default,
    },
    {
        regexp: /\.(pptx|ppsx|potx|pot|ppt|pptm)$/i,
        avatar: _24_7.default,
    },
    {
        regexp: /\.(mov|mpeg|mpg|mp4|avi)$/i,
        avatar: _24_5.default,
    },
    {
        regexp: /\.(zip)$/i,
        avatar: _24_6.default,
    },
];
var getIconType = function (iconClass, fileName) {
    // Check the iconClass to make sure we're looking at an attachment
    var prefixMatches = ATTACHMENT_ICON_CLASS_PREFIXES.find(function (prefix) {
        return iconClass.startsWith(prefix);
    });
    // if it's an attachment, look at the file extension to work out which type
    if (prefixMatches) {
        var matchingType = ATTACHMENT_FILE_EXTENSION_MATCHERS.find(function (extensionMatcher) {
            var matches = extensionMatcher.regexp.exec(fileName);
            return !!matches && matches.length > 0;
        });
        if (matchingType) {
            return matchingType.avatar;
        }
    }
    return DEFAULT_ATTACHMENT_AVATAR;
};
exports.getAvatarForConfluenceObjectResult = function (result) {
    if (result.contentType === Result_1.ContentType.ConfluencePage) {
        return (React.createElement(_24_1.default, { size: "medium", primaryColor: theme_1.colors.B200, label: result.name }));
    }
    else if (result.contentType === Result_1.ContentType.ConfluenceBlogpost) {
        return (React.createElement(_24_2.default, { label: result.name, size: "medium", primaryColor: theme_1.colors.B200 }));
    }
    else if (result.contentType === Result_1.ContentType.ConfluenceAttachment) {
        return exports.getMediaTypeAvatarForResult(result);
    }
    else {
        return React.createElement(avatar_1.default, { src: result.avatarUrl, size: "medium", appearance: "square" });
    }
};
exports.getMediaTypeAvatarForResult = function (result) {
    var IconComponent = getIconType(result.iconClass, result.name);
    return React.createElement(IconComponent, { label: result.name, size: "medium" });
};
//# sourceMappingURL=confluence-avatar-util.js.map