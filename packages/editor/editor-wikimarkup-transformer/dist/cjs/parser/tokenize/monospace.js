"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var common_formatter_1 = require("./common-formatter");
var text_1 = require("../text");
exports.monospace = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    /**
     * The following token types will be ignored in parsing
     * the content
     */
    var ignoreTokenTypes = [
        _1.TokenType.DOUBLE_DASH_SYMBOL,
        _1.TokenType.TRIPLE_DASH_SYMBOL,
        _1.TokenType.QUADRUPLE_DASH_SYMBOL,
        _1.TokenType.ISSUE_KEY,
        _1.TokenType.TABLE,
    ];
    // Add code mark to each text
    var contentDecorator = function (n) {
        var mark = schema.marks.code.create();
        // We don't want to mix `code` mark with others
        if (n.type.name === 'text' && n.marks.length) {
            return n;
        }
        return n.mark([mark]);
    };
    var rawContentProcessor = function (raw, length) {
        var content = text_1.parseString({
            ignoreTokenTypes: ignoreTokenTypes,
            schema: schema,
            context: context,
            input: raw,
        });
        var decoratedContent = content.map(contentDecorator);
        return {
            type: 'pmnode',
            nodes: decoratedContent,
            length: length,
        };
    };
    return common_formatter_1.commonFormatter(input, position, schema, {
        opening: '{{',
        closing: '}}',
        context: context,
        rawContentProcessor: rawContentProcessor,
    });
};
//# sourceMappingURL=monospace.js.map