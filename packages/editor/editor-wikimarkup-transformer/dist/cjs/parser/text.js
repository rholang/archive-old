"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var text_1 = require("./nodes/text");
var keyword_1 = require("./tokenize/keyword");
var tokenize_1 = require("./tokenize");
var whitespace_1 = require("./tokenize/whitespace");
var escape_1 = require("./utils/escape");
var processState = {
    NEWLINE: 0,
    BUFFER: 1,
    TOKEN: 2,
    ESCAPE: 3,
};
function parseString(_a) {
    var input = _a.input, schema = _a.schema, _b = _a.ignoreTokenTypes, ignoreTokenTypes = _b === void 0 ? [] : _b, context = _a.context, _c = _a.includeLeadingSpace, includeLeadingSpace = _c === void 0 ? false : _c;
    var index = 0;
    var state = processState.NEWLINE;
    var buffer = '';
    var tokenType = tokenize_1.TokenType.STRING;
    var output = [];
    while (index < input.length) {
        var char = input.charAt(index);
        switch (state) {
            case processState.NEWLINE: {
                /**
                 * During this state, the parser will trim leading
                 * spaces and looking for any leading keywords.
                 */
                var substring = input.substring(index);
                var length_1 = whitespace_1.parseWhitespaceOnly(substring);
                if (length_1) {
                    index += length_1;
                    if (includeLeadingSpace) {
                        buffer += char;
                    }
                    continue;
                }
                var match = keyword_1.parseLeadingKeyword(substring) ||
                    keyword_1.parseMacroKeyword(substring) ||
                    keyword_1.parseOtherKeyword(substring) ||
                    keyword_1.parseIssueKeyword(substring, context.issueKeyRegex);
                if (match && ignoreTokenTypes.indexOf(match.type) === -1) {
                    tokenType = match.type;
                    state = processState.TOKEN;
                    continue;
                }
                else {
                    state = processState.BUFFER;
                    continue;
                }
            }
            case processState.BUFFER: {
                /**
                 * During this state, the parser will start
                 * saving plantext into the buffer until it hits
                 * a keyword
                 */
                var substring = input.substring(index);
                /**
                 * If the previous char is not a alphanumeric, we will parse
                 * format keywords.
                 * If the previous char is '{', we need to skip parse macro
                 * keyword
                 */
                var match = null;
                if (buffer.endsWith('{')) {
                    match = keyword_1.parseOtherKeyword(substring);
                }
                else {
                    match =
                        keyword_1.parseMacroKeyword(substring) ||
                            keyword_1.parseOtherKeyword(substring) ||
                            keyword_1.parseIssueKeyword(substring, context.issueKeyRegex);
                }
                if (match && ignoreTokenTypes.indexOf(match.type) === -1) {
                    tokenType = match.type;
                    state = processState.TOKEN;
                    continue;
                }
                if (char === '\\') {
                    state = processState.ESCAPE;
                    continue;
                }
                buffer += char;
                break;
            }
            case processState.TOKEN: {
                var token = tokenize_1.parseToken(input, tokenType, index, schema, context);
                if (token.type === 'text') {
                    buffer += token.text;
                }
                else if (token.type === 'pmnode') {
                    output.push.apply(output, tslib_1.__spread(text_1.createTextNode(buffer, schema)));
                    buffer = ''; // clear the buffer
                    output.push.apply(// clear the buffer
                    output, tslib_1.__spread(token.nodes));
                }
                index += token.length;
                if (tokenType === tokenize_1.TokenType.HARD_BREAK) {
                    state = processState.NEWLINE;
                }
                else {
                    state = processState.BUFFER;
                }
                continue;
            }
            case processState.ESCAPE: {
                var token = escape_1.escapeHandler(input, index);
                buffer += token.text;
                index += token.length;
                state = processState.BUFFER;
                continue;
            }
            default:
        }
        index++;
    }
    if (buffer.length > 0) {
        // Wrapping the rest of the buffer into a text node
        output.push.apply(output, tslib_1.__spread(text_1.createTextNode(buffer, schema)));
    }
    return output;
}
exports.parseString = parseString;
//# sourceMappingURL=text.js.map