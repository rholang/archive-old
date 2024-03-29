"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require("./");
var text_1 = require("../utils/text");
var common_formatter_1 = require("./common-formatter");
var text_2 = require("../text");
var char_1 = require("../../char");
exports.citation = function (_a) {
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
    ];
    // Add code mark to each text
    var contentDecorator = function (n, index) {
        var mark = schema.marks.em.create();
        // We don't want to mix `code` mark with others
        if (n.type.name === 'text' && !text_1.hasAnyOfMarks(n, ['em', 'code'])) {
            if (index === 0) {
                n.text = char_1.EM_DASH + " " + n.text;
            }
            return n.mark(tslib_1.__spread(n.marks, [mark]));
        }
        return n;
    };
    var rawContentProcessor = function (raw, length) {
        var content = text_2.parseString({
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
        opening: '??',
        closing: '??',
        context: context,
        rawContentProcessor: rawContentProcessor,
    });
};
//# sourceMappingURL=citation.js.map