"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMediaGroupNodeView(schema, filename) {
    var _a = schema.nodes, media = _a.media, mediaGroup = _a.mediaGroup;
    var mediaNode = media.createChecked({
        id: filename,
        type: 'file',
        collection: '',
    });
    return mediaGroup.createChecked({}, mediaNode);
}
exports.default = getMediaGroupNodeView;
//# sourceMappingURL=mediaGroup.js.map