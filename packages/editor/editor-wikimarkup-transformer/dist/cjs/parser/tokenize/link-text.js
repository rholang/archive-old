"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
// https://www.atlassian.com
exports.LINK_TEXT_REGEXP = /^(https?:\/\/|irc:\/\/|mailto:)([\w.?\/\\#-=@]+)/;
exports.linkText = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema;
    var match = input.substring(position).match(exports.LINK_TEXT_REGEXP);
    if (!match) {
        return fallback(input, position);
    }
    // Remove mailto:
    var textRepresentation = match[1] === 'mailto:' ? match[2] : match[0];
    var url = unescape(match[0]);
    if (!adf_schema_1.isSafeUrl(url)) {
        return fallback(input, position);
    }
    var mark = schema.marks.link.create({
        href: encodeURI(url),
    });
    var textNode = schema.text(textRepresentation, [mark]);
    return {
        type: 'pmnode',
        nodes: [textNode],
        length: match[0].length,
    };
};
function unescape(url) {
    var result = '';
    for (var i = 0; i < url.length; i++) {
        var char = url[i];
        if (char !== '\\') {
            result += char;
            continue;
        }
        var nextChar = url[i + 1];
        if (nextChar) {
            result += nextChar;
            i++;
        }
    }
    return result;
}
function fallback(input, position) {
    return {
        type: 'text',
        text: input.substr(position, 1),
        length: 1,
    };
}
//# sourceMappingURL=link-text.js.map