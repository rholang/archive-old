"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = require("../text");
var _1 = require("./");
// h1. HEADING
var HEADING_REGEXP = /^h([1-6])\.(.*)/;
exports.heading = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    /**
     * The following token types will be ignored in parsing
     * the content of a strong mark
     */
    var ignoreTokenTypes = [
        _1.TokenType.DOUBLE_DASH_SYMBOL,
        _1.TokenType.TRIPLE_DASH_SYMBOL,
        _1.TokenType.QUADRUPLE_DASH_SYMBOL,
    ];
    var match = input.substring(position).match(HEADING_REGEXP);
    if (!match) {
        return fallback(input, position);
    }
    var level = parseInt(match[1], 10);
    var content = text_1.parseString({
        schema: schema,
        ignoreTokenTypes: ignoreTokenTypes,
        context: context,
        input: match[2],
    });
    try {
        var headingNode = schema.nodes.heading.createChecked({
            level: level,
        }, content);
        return {
            type: 'pmnode',
            nodes: [headingNode],
            length: match[0].length,
        };
    }
    catch (err) {
        /**
         * If the heading fails to rendering, we want to skip the text
         * "h1."
         */
        return {
            type: 'text',
            text: '',
            length: 4,
        };
    }
};
function fallback(input, position) {
    return {
        type: 'text',
        text: input.substr(position, 1),
        length: 1,
    };
}
//# sourceMappingURL=heading.js.map