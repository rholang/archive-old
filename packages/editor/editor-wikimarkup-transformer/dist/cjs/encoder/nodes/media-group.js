"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_1 = require("./media");
exports.mediaGroup = function (node) {
    var result = [];
    node.forEach(function (n) {
        result.push(media_1.media(n));
    });
    return result.join('\n');
};
//# sourceMappingURL=media-group.js.map