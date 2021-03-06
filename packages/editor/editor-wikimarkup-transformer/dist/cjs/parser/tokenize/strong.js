"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require("./");
var text_1 = require("../utils/text");
var common_formatter_1 = require("./common-formatter");
var text_2 = require("../text");
exports.strong = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    /**
     * The following token types will be ignored in parsing
     * the content of a strong mark
     */
    var ignoreTokenTypes = [
        _1.TokenType.DOUBLE_DASH_SYMBOL,
        _1.TokenType.TRIPLE_DASH_SYMBOL,
        _1.TokenType.QUADRUPLE_DASH_SYMBOL,
        _1.TokenType.ISSUE_KEY,
    ];
    // Adding strong mark to all text
    var contentDecorator = function (pmNode) {
        var mark = schema.marks.strong.create();
        // We don't want to mix `code` mark with others
        if (pmNode.type.name === 'text' &&
            !text_1.hasAnyOfMarks(pmNode, ['strong', 'code'])) {
            return pmNode.mark(tslib_1.__spread(pmNode.marks, [mark]));
        }
        return pmNode;
    };
    var rawContentProcessor = function (raw, length) {
        var content = text_2.parseString({
            schema: schema,
            context: context,
            ignoreTokenTypes: ignoreTokenTypes,
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
        opening: '*',
        closing: '*',
        context: context,
        rawContentProcessor: rawContentProcessor,
    });
};
//# sourceMappingURL=strong.js.map