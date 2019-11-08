"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var list_builder_1 = require("../builder/list-builder");
var text_1 = require("../text");
var normalize_1 = require("../utils/normalize");
var keyword_1 = require("./keyword");
var _1 = require("./");
var whitespace_1 = require("./whitespace");
var LIST_ITEM_REGEXP = /^ *([*\-#]+) /;
var EMPTY_LINE_REGEXP = /^[ \t]*\r?\n/;
var RULER_SYMBOL_REGEXP = /^-{4,5}/;
var processState = {
    NEW_LINE: 0,
    BUFFER: 1,
    END: 2,
    MACRO: 3,
};
exports.list = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    /**
     * The following token types will be ignored in parsing
     * the content of a listItem
     */
    var ignoreTokenTypes = [_1.TokenType.QUADRUPLE_DASH_SYMBOL, _1.TokenType.LIST];
    var index = position;
    var state = processState.NEW_LINE;
    var buffer = '';
    var lastListSymbols = null;
    var builder = null;
    var contentBuffer = [];
    var output = [];
    while (index < input.length) {
        var char = input.charAt(index);
        switch (state) {
            case processState.NEW_LINE: {
                var substring = input.substring(index);
                var listMatch = substring.match(LIST_ITEM_REGEXP);
                if (listMatch) {
                    var _b = tslib_1.__read(listMatch, 2), symbols = _b[1];
                    // Handle ruler in list
                    var rulerMatch = symbols.match(RULER_SYMBOL_REGEXP);
                    if (rulerMatch) {
                        var remainingAfterSymbol = input.substring(index + rulerMatch[0].length);
                        var emptyLineMatch_1 = remainingAfterSymbol.match(EMPTY_LINE_REGEXP);
                        // If this is an empty line skip to the buffering step rather than match as a list element
                        if (emptyLineMatch_1) {
                            state = processState.BUFFER;
                            continue;
                        }
                    }
                    if (!builder) {
                        // It happens because this is the first item of the list
                        builder = new list_builder_1.ListBuilder(schema, symbols);
                        lastListSymbols = symbols;
                    }
                    else {
                        /**
                         * There is a builder, so we are in the middle of building a list
                         * and now there is a new list item
                         */
                        if (buffer.length > 0) {
                            // Wrap up previous list item and clear buffer
                            var content = text_1.parseString({
                                ignoreTokenTypes: ignoreTokenTypes,
                                schema: schema,
                                context: context,
                                input: buffer,
                                includeLeadingSpace: true,
                            });
                            contentBuffer.push.apply(contentBuffer, tslib_1.__spread(content));
                            builder.add([
                                {
                                    style: lastListSymbols,
                                    content: sanitize(normalize_1.normalizePMNodes(contentBuffer, schema), schema),
                                },
                            ]);
                            buffer = '';
                            contentBuffer = [];
                        }
                        // We finished last list item here, going to the new one
                        lastListSymbols = symbols;
                        var type = list_builder_1.getType(symbols);
                        // If it's top level and doesn't match, create a new list
                        if (type !== builder.type && symbols.length === 1) {
                            output.push.apply(output, tslib_1.__spread(builder.buildPMNode()));
                            builder = new list_builder_1.ListBuilder(schema, symbols);
                        }
                    }
                    index += listMatch[0].length;
                }
                // If we encounter an empty line, we should end the list
                var emptyLineMatch = substring.match(EMPTY_LINE_REGEXP);
                if (emptyLineMatch) {
                    state = processState.END;
                    continue;
                }
                state = processState.BUFFER;
                continue;
            }
            case processState.BUFFER: {
                var length_1 = whitespace_1.parseNewlineOnly(input.substring(index));
                if (length_1) {
                    buffer += input.substr(index, length_1);
                    state = processState.NEW_LINE;
                    index += length_1;
                    continue;
                }
                if (char === '{') {
                    state = processState.MACRO;
                    continue;
                }
                else {
                    buffer += char;
                }
                break;
            }
            case processState.MACRO: {
                var match = keyword_1.parseMacroKeyword(input.substring(index));
                if (!match) {
                    buffer += char;
                    state = processState.BUFFER;
                    break;
                }
                var token = _1.parseToken(input, match.type, index, schema, context);
                if (token.type === 'text') {
                    buffer += token.text;
                }
                else {
                    // We found a macro in the list...
                    if (!builder) {
                        // Something is really wrong here
                        return fallback(input, position);
                    }
                    if (buffer.length > 0) {
                        /**
                         * Wrapup what is already in the string buffer and save it to
                         * contentBuffer
                         */
                        var content = text_1.parseString({
                            ignoreTokenTypes: ignoreTokenTypes,
                            schema: schema,
                            context: context,
                            input: buffer,
                            includeLeadingSpace: true,
                        });
                        contentBuffer.push.apply(contentBuffer, tslib_1.__spread(sanitize(content, schema)));
                        buffer = '';
                    }
                    contentBuffer.push.apply(contentBuffer, tslib_1.__spread(sanitize(token.nodes, schema)));
                }
                index += token.length;
                state = processState.BUFFER;
                continue;
            }
            case processState.END: {
                if (!builder) {
                    // Something is really wrong here
                    return fallback(input, position);
                }
                if (buffer.length > 0) {
                    // Wrap up previous list item and clear buffer
                    var content = text_1.parseString({
                        ignoreTokenTypes: ignoreTokenTypes,
                        schema: schema,
                        context: context,
                        input: buffer,
                        includeLeadingSpace: true,
                    });
                    contentBuffer.push.apply(contentBuffer, tslib_1.__spread(content));
                }
                builder.add([
                    {
                        style: lastListSymbols,
                        content: sanitize(normalize_1.normalizePMNodes(contentBuffer, schema), schema),
                    },
                ]);
                output.push.apply(output, tslib_1.__spread(builder.buildPMNode()));
                return {
                    type: 'pmnode',
                    nodes: output,
                    length: index - position,
                };
            }
        }
        index++;
    }
    if (buffer.length > 0) {
        // Wrap up what's left in the buffer
        var content = text_1.parseString({
            ignoreTokenTypes: ignoreTokenTypes,
            schema: schema,
            context: context,
            input: buffer,
            includeLeadingSpace: true,
        });
        contentBuffer.push.apply(contentBuffer, tslib_1.__spread(content));
    }
    if (builder) {
        builder.add([
            {
                style: lastListSymbols,
                content: sanitize(normalize_1.normalizePMNodes(contentBuffer, schema), schema),
            },
        ]);
        output.push.apply(output, tslib_1.__spread(builder.buildPMNode()));
    }
    return {
        type: 'pmnode',
        nodes: output,
        length: index - position,
    };
};
function sanitize(nodes, schema) {
    return nodes.reduce(function (result, curr) {
        switch (curr.type.name) {
            case 'blockquote': {
                /**
                 * If a blockquote is inside a list item
                 * - Convert it to paragraph
                 */
                curr.content.forEach(function (n) {
                    result.push(n);
                });
                break;
            }
            case 'heading': {
                /**
                 * If a heading is inside a list item
                 * - Convert the heading to paragraph
                 * - Convert text to upper case
                 * - Mark text with strong.
                 */
                var contentBuffer_1 = [];
                curr.content.forEach(function (n) {
                    var mark = schema.marks.strong.create();
                    if (n.type.name === 'text') {
                        if (n.text) {
                            n.text = n.text.toUpperCase();
                        }
                        contentBuffer_1.push(n.mark(tslib_1.__spread(n.marks, [mark])));
                    }
                    else {
                        contentBuffer_1.push(n);
                    }
                });
                var p = schema.nodes.paragraph.createChecked({}, contentBuffer_1);
                result.push(p);
                break;
            }
            default:
                result.push(curr);
        }
        return result;
    }, []);
}
function fallback(input, position) {
    return {
        type: 'text',
        text: input.substr(position, 1),
        length: 1,
    };
}
//# sourceMappingURL=list.js.map