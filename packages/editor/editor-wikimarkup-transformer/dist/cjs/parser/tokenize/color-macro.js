"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require(".");
var common_macro_1 = require("./common-macro");
var attrs_1 = require("../utils/attrs");
var text_1 = require("../text");
var color_1 = require("../color");
var text_2 = require("../utils/text");
exports.colorMacro = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    return common_macro_1.commonMacro(input.substring(position), schema, {
        keyword: 'color',
        paired: true,
        context: context,
        rawContentProcessor: rawContentProcessor,
    });
};
var rawContentProcessor = function (rawAttrs, rawContent, length, schema, context) {
    var ignoreTokenTypes = [
        _1.TokenType.DOUBLE_DASH_SYMBOL,
        _1.TokenType.TRIPLE_DASH_SYMBOL,
        _1.TokenType.QUADRUPLE_DASH_SYMBOL,
        _1.TokenType.ISSUE_KEY,
    ];
    var parsedAttrs = attrs_1.parseAttrs(rawAttrs);
    var content = text_1.parseString({
        ignoreTokenTypes: ignoreTokenTypes,
        schema: schema,
        context: context,
        input: rawContent,
    });
    var decoratedContent = content.map(function (n) {
        var mark = schema.marks.textColor.create({
            color: color_1.getEditorColor(parsedAttrs) || '#000000',
        });
        // We don't want to mix `code` mark with others
        if (n.type.name === 'text' && !text_2.hasAnyOfMarks(n, ['textColor', 'code'])) {
            return n.mark(tslib_1.__spread(n.marks, [mark]));
        }
        return n;
    });
    return {
        type: 'pmnode',
        nodes: decoratedContent,
        length: length,
    };
};
//# sourceMappingURL=color-macro.js.map