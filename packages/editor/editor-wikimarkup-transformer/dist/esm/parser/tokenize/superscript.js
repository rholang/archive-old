import { __read, __spread } from "tslib";
import { TokenType } from './';
import { hasAnyOfMarks } from '../utils/text';
import { commonFormatter } from './common-formatter';
import { parseString } from '../text';
export var superscript = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    /**
     * The following token types will be ignored in parsing
     * the content of a  mark
     */
    var ignoreTokenTypes = [
        TokenType.DOUBLE_DASH_SYMBOL,
        TokenType.TRIPLE_DASH_SYMBOL,
        TokenType.QUADRUPLE_DASH_SYMBOL,
        TokenType.ISSUE_KEY,
    ];
    // Adding subsup mark to all text
    var contentDecorator = function (n) {
        var mark = schema.marks.subsup.create({ type: 'sup' });
        // We don't want to mix `code` mark with others
        if (n.type.name === 'text' && !hasAnyOfMarks(n, ['subsup', 'code'])) {
            return n.mark(__spread(n.marks, [mark]));
        }
        return n;
    };
    var rawContentProcessor = function (raw, length) {
        var content = parseString({
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
    return commonFormatter(input, position, schema, {
        opening: '^',
        closing: '^',
        context: context,
        rawContentProcessor: rawContentProcessor,
    });
};
//# sourceMappingURL=superscript.js.map