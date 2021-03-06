"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_text_1 = require("../tokenize/link-text");
var defaultWidth = 200;
var defaultHeight = 183;
function getMediaSingleNodeView(schema, filename, attrs) {
    var _a = schema.nodes, media = _a.media, mediaSingle = _a.mediaSingle;
    var width = defaultWidth;
    var height = defaultHeight;
    if (attrs.width) {
        var parsed = parseInt(attrs.width, 10);
        if (!isNaN(parsed)) {
            width = parsed;
        }
    }
    if (attrs.height) {
        var parsed = parseInt(attrs.height, 10);
        if (!isNaN(parsed)) {
            height = parsed;
        }
    }
    if (filename.match(link_text_1.LINK_TEXT_REGEXP)) {
        var externalMediaNode = media.createChecked({
            type: 'external',
            url: filename,
            width: width,
            height: height,
        });
        return mediaSingle.createChecked({}, externalMediaNode);
    }
    else {
        var mediaNode = media.createChecked({
            id: filename,
            type: 'file',
            collection: '',
            width: width,
            height: height,
        });
        return mediaSingle.createChecked({}, mediaNode);
    }
}
exports.default = getMediaSingleNodeView;
//# sourceMappingURL=mediaSingle.js.map