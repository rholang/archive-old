"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = require("../index");
var adf_schema_1 = require("@atlaskit/adf-schema");
var text_1 = require("../../text");
var text_2 = require("../../utils/text");
function urlLinkResolver(link, schema, context) {
    var output = [];
    var url = link.notLinkBody;
    var textRepresentation = link.linkBody || link.notLinkBody;
    if (!adf_schema_1.isSafeUrl(url)) {
        return;
    }
    var ignoreTokenTypes = [
        index_1.TokenType.DOUBLE_DASH_SYMBOL,
        index_1.TokenType.TRIPLE_DASH_SYMBOL,
        index_1.TokenType.QUADRUPLE_DASH_SYMBOL,
        index_1.TokenType.LINK_TEXT,
        index_1.TokenType.ISSUE_KEY,
    ];
    var rawContent = text_1.parseString({
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
        if (n.type.name === 'text' && !text_2.hasAnyOfMarks(n, ['link', 'code'])) {
            return n.mark(tslib_1.__spread(n.marks, [mark]));
        }
        return n;
    });
    output.push.apply(output, tslib_1.__spread(decoratedContent));
    if (!hasTextNode(rawContent)) {
        var mark = schema.marks.link.create({
            href: url,
        });
        var linkTextNode = schema.text(textRepresentation, [mark]);
        output.push(linkTextNode);
    }
    return output;
}
exports.urlLinkResolver = urlLinkResolver;
function hasTextNode(nodes) {
    return nodes.find(function (n) {
        return n.type.name === 'text';
    });
}
//# sourceMappingURL=url-link.js.map