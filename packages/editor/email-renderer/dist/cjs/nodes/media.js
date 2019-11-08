"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var adf_schema_1 = require("@atlaskit/adf-schema");
var util_1 = require("../styles/util");
var static_1 = require("../static");
var className = util_1.createClassName('media');
var ICON_DIMENSION = 14;
function media(node) {
    var context = node.context, attrs = node.attrs;
    // Without metadata, we render a generic lozenge
    if (!context || !context.mediaMetaData || !context.mediaMetaData[attrs.id]) {
        return renderLozenge();
    }
    var metadata = context.mediaMetaData[attrs.id];
    switch (metadata.mediaType) {
        case 'image':
            return renderImage(node, metadata);
        case 'video':
        case 'doc':
            return renderPreview(node, metadata);
        case 'audio':
        case 'unknown':
        default:
            return renderLozenge(metadata);
    }
}
exports.default = media;
var imageStyles = "\n." + className + "-wrapper {\n  margin: 12px;\n  text-align: center;\n}\n." + className + "-img {\n  max-width: 100%;\n}\n";
var renderImage = function (_a, metadata) {
    var attrs = _a.attrs;
    var src;
    if (attrs.id) {
        // ID is defined, render image using CID:
        src = "cid:" + attrs.id;
    }
    else if (attrs.url) {
        // url defined, user direct link image
        src = attrs.url;
    }
    if (src) {
        var img = create_tag_1.createTag('img', {
            class: className + "-img",
            src: src,
        });
        return create_tag_1.createTag('div', { class: className + "-wrapper" }, img);
    }
    // no id or url found, fall back to lozenge
    return renderLozenge(metadata);
};
var lozengeStyles = "\n." + className + "-lozenge-wrapper {\n  margin: 8px 0;\n}\n." + className + "-lozenge-icon {\n  vertical-align: baseline;\n}\n." + className + "-lozenge {\n  line-height: 14px;\n  display: inline-block;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n}\n." + className + "-lozenge-text {\n  overflow: hidden;\n  display: inline-block;\n}\n";
var renderLozenge = function (metadata) {
    var iconType;
    var text;
    if (metadata) {
        text = metadata.name || 'Attached file';
        iconType = getIconFromMediaType(metadata.mediaType);
    }
    else {
        iconType = 'genericAttachment';
        text = 'Attached file';
    }
    var icon = create_tag_1.createTag('img', {
        class: className + "-lozenge-icon",
        src: static_1.createContentId(iconType),
        width: ICON_DIMENSION + "px",
        height: ICON_DIMENSION + "px",
    });
    var iconTag = create_tag_1.createTag('span', {}, icon);
    var textTag = create_tag_1.createTag('span', { class: className + "-lozenge-text" }, text);
    var lozenge = create_tag_1.createTag('div', { class: className + "-lozenge" }, iconTag + textTag);
    return create_tag_1.createTag('div', { class: className + "-lozenge-wrapper" }, lozenge);
};
var previewStyles = "\n." + className + "-preview-img-wrapper {\n  width: " + util_1.MEDIA_PREVIEW_IMAGE_WIDTH + "px;\n}\n." + className + "-preview-img {\n  width: " + util_1.MEDIA_PREVIEW_IMAGE_WIDTH + "px;\n  height: " + util_1.MEDIA_PREVIEW_IMAGE_HEIGHT + "px;\n  background-color: " + adf_schema_1.N30 + ";\n  display: block;\n  object-fit: contain;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n}\n." + className + "-preview-wrapper {\n  margin: 8px 0px;\n  padding: 0;\n  display: table;\n}\n." + className + "-preview-desc {\n  margin-top: 3px;\n  line-height: 14px;\n  display: block;\n}\n." + className + "-preview-text {\n  text-overflow: ellipsis;\n  width: " + (util_1.MEDIA_PREVIEW_IMAGE_WIDTH - ICON_DIMENSION - 4) + "px;\n  overflow: hidden;\n  white-space: nowrap;\n  display: inline-block;\n}\n." + className + "-preview-wrapper .diff-image-container {\n  display: inline-block;\n  padding: 4px;\n}\n." + className + "-preview-desc .diff-image-container {\n  display: inline-block;\n  padding: 0 4px;\n}\n";
var renderPreview = function (node, metadata) {
    var previewImg = create_tag_1.createTag('img', {
        class: className + "-preview-img",
        src: "cid:" + node.attrs.id,
    });
    var iconType = getIconFromMediaType(metadata.mediaType);
    var icon = create_tag_1.createTag('img', {
        class: className + "-lozenge-icon",
        src: static_1.createContentId(iconType),
        width: ICON_DIMENSION + "px",
        height: ICON_DIMENSION + "px",
    });
    var iconTag = create_tag_1.createTag('span', { class: className + "-preview-img-wrapper" }, icon);
    var textTag = create_tag_1.createTag('span', { class: className + "-preview-text" }, metadata.name || 'Attached file');
    var description = create_tag_1.createTag('div', { class: className + "-preview-desc" }, iconTag + textTag);
    return create_tag_1.createTag('div', { class: className + "-preview-wrapper" }, previewImg + description);
};
var getIconFromMediaType = function (mediaType) {
    switch (mediaType) {
        case 'archive':
            return 'archiveAttachment';
        case 'audio':
            return 'audioAttachment';
        case 'doc':
            return 'documentAttachment';
        case 'video':
            return 'videoAttachment';
        default:
            return 'genericAttachment';
    }
};
exports.styles = "\n" + imageStyles + "\n" + lozengeStyles + "\n" + previewStyles + "\n";
//# sourceMappingURL=media.js.map