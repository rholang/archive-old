"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mediaGroup_1 = tslib_1.__importDefault(require("../nodes/mediaGroup"));
// [^attachment.pdf]
var FILE_LINK_REGEXP = /^\[\^([\(\)\w. -]+)\]/;
function fileLink(input, position, schema) {
    var match = input.substring(position).match(FILE_LINK_REGEXP);
    if (!match) {
        return fallback(input, position);
    }
    var node = mediaGroup_1.default(schema, match[1]);
    return {
        type: 'pmnode',
        nodes: [node],
        length: match[0].length,
    };
}
exports.fileLink = fileLink;
function fallback(input, position) {
    return {
        type: 'text',
        text: input.substr(position, 1),
        length: 1,
    };
}
//# sourceMappingURL=file-link.js.map