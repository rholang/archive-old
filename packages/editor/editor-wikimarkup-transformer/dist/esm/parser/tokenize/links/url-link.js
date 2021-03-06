import { __read, __spread } from "tslib";
import { TokenType } from '../index';
import { isSafeUrl } from '@atlaskit/adf-schema';
import { parseString } from '../../text';
import { hasAnyOfMarks } from '../../utils/text';
export function urlLinkResolver(link, schema, context) {
    var output = [];
    var url = link.notLinkBody;
    var textRepresentation = link.linkBody || link.notLinkBody;
    if (!isSafeUrl(url)) {
        return;
    }
    var ignoreTokenTypes = [
        TokenType.DOUBLE_DASH_SYMBOL,
        TokenType.TRIPLE_DASH_SYMBOL,
        TokenType.QUADRUPLE_DASH_SYMBOL,
        TokenType.LINK_TEXT,
        TokenType.ISSUE_KEY,
    ];
    var rawContent = parseString({
        ignoreTokenTypes: ignoreTokenTypes,
        schema: schema,
        context: context,
        input: textRepresentation.replace(/^mailto:/, ''),
    });
    var decoratedContent = rawContent.map(function (n) {
        var mark = schema.marks.link.create({
            href: url,
        });
        // We don't want to mix `code` mark with others
        if (n.type.name === 'text' && !hasAnyOfMarks(n, ['link', 'code'])) {
            return n.mark(__spread(n.marks, [mark]));
        }
        return n;
    });
    output.push.apply(output, __spread(decoratedContent));
    if (!hasTextNode(rawContent)) {
        var mark = schema.marks.link.create({
            href: url,
        });
        var linkTextNode = schema.text(textRepresentation, [mark]);
        output.push(linkTextNode);
    }
    return output;
}
function hasTextNode(nodes) {
    return nodes.find(function (n) {
        return n.type.name === 'text';
    });
}
//# sourceMappingURL=url-link.js.map