"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mediaGroup = function (node) {
    // count children which are media files
    // ignore card links
    var childMediaFilesCount = 0;
    node.content.forEach(function (childNode) {
        if (childNode.attrs.type === 'file') {
            childMediaFilesCount += 1;
        }
    });
    if (childMediaFilesCount) {
        var postfix = childMediaFilesCount > 1 ? 'Files' : 'File';
        return "\uD83D\uDCCE " + childMediaFilesCount + " " + postfix;
    }
    return '';
};
exports.default = mediaGroup;
//# sourceMappingURL=mediaGroup.js.map