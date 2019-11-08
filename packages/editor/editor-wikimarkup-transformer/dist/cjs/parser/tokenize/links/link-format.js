"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_resolver_1 = require("./link-resolver");
var link_parser_1 = require("./link-parser");
// [http://www.example.com] and [Example|http://www.example.com]
var LINK_FORMAT_REGEXP = /^\[([^\[\]\n]+)]/;
exports.linkFormat = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    var match = input.substring(position).match(LINK_FORMAT_REGEXP);
    if (!match) {
        return fallback();
    }
    var content = link_parser_1.parseContentLink(match[1]);
    return link_resolver_1.resolveLink(content, schema, context);
};
function fallback() {
    return {
        type: 'text',
        text: '[',
        length: 1,
    };
}
//# sourceMappingURL=link-format.js.map