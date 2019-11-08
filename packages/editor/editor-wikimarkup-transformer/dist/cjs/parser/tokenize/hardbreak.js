"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var whitespace_1 = require("./whitespace");
exports.hardbreak = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema;
    // Look for normal hardbreak \r, \n, \r\n
    var length = whitespace_1.parseNewlineOnly(input.substring(position));
    if (length === 0) {
        // not a valid hardbreak
        return {
            type: 'text',
            text: input.substr(position, 1),
            length: 1,
        };
    }
    return {
        type: 'pmnode',
        nodes: [schema.nodes.hardBreak.createChecked()],
        length: length,
    };
};
//# sourceMappingURL=hardbreak.js.map