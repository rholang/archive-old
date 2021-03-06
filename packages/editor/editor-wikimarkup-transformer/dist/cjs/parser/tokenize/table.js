"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var table_builder_1 = require("../builder/table-builder");
var text_1 = require("../text");
var normalize_1 = require("../utils/normalize");
var link_format_1 = require("./links/link-format");
var media_1 = require("./media");
var emoji_1 = require("./emoji");
var _1 = require("./");
var whitespace_1 = require("./whitespace");
var keyword_1 = require("./keyword");
var _2 = require("./");
/*
  The following are currently NOT supported
  1. Macros
  2. Escape |
  3. Table of table
*/
var CELL_REGEXP = /^([ \t]*)([|]+)([ \t]*)/;
var EMPTY_LINE_REGEXP = /^[ \t]*\r?\n/;
var EMPTY_CELL_REGEXP = /^([ \t]+)/;
var processState = {
    END_TABLE: 2,
    BUFFER: 4,
    CLOSE_ROW: 5,
    NEW_ROW: 6,
    LINE_BREAK: 7,
    LINK: 8,
    MEDIA: 9,
    MACRO: 10,
    EMOJI: 11,
};
exports.table = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    /**
     * The following token types will be ignored in parsing
     * the content of a table cell
     */
    var ignoreTokenTypes = [
        _1.TokenType.DOUBLE_DASH_SYMBOL,
        _1.TokenType.TRIPLE_DASH_SYMBOL,
        _1.TokenType.QUADRUPLE_DASH_SYMBOL,
        _1.TokenType.TABLE,
        _1.TokenType.RULER,
    ];
    var output = [];
    var index = position;
    var currentState = processState.NEW_ROW;
    var buffer = '';
    var cellsBuffer = [];
    var cellStyle = '';
    var builder = null;
    while (index < input.length) {
        var char = input.charAt(index);
        var substring = input.substring(index);
        switch (currentState) {
            case processState.NEW_ROW: {
                var tableMatch = substring.match(CELL_REGEXP);
                if (tableMatch) {
                    if (!builder) {
                        builder = new table_builder_1.TableBuilder(schema);
                    }
                    // Capture empty spaces
                    index += tableMatch[1].length;
                    cellStyle = tableMatch[2];
                    index += tableMatch[2].length;
                    currentState = processState.BUFFER;
                    continue;
                }
                currentState = processState.END_TABLE;
                continue;
            }
            case processState.LINE_BREAK: {
                // If we encounter an empty line, we should end the table
                var emptyLineMatch = substring.match(EMPTY_LINE_REGEXP);
                if (emptyLineMatch) {
                    bufferToCells(cellStyle, buffer, cellsBuffer, schema, ignoreTokenTypes, context);
                    currentState = processState.END_TABLE;
                    continue;
                }
                // If we enconter a new row
                var cellMatch = substring.match(CELL_REGEXP);
                if (cellMatch) {
                    currentState = processState.CLOSE_ROW;
                }
                else {
                    currentState = processState.BUFFER;
                }
                continue;
            }
            case processState.BUFFER: {
                var length_1 = whitespace_1.parseNewlineOnly(substring);
                if (length_1) {
                    var charBefore = input.charAt(index - 1);
                    if (charBefore === '|' || charBefore.match(EMPTY_CELL_REGEXP)) {
                        currentState = processState.CLOSE_ROW;
                    }
                    else {
                        currentState = processState.LINE_BREAK;
                        buffer += input.substr(index, length_1);
                    }
                    index += length_1;
                    continue;
                }
                switch (char) {
                    case '|': {
                        // This is now end of a cell, we should wrap the buffer into a cell
                        bufferToCells(cellStyle, buffer, cellsBuffer, schema, ignoreTokenTypes, context);
                        buffer = '';
                        // Update cells tyle
                        var cellMatch = substring.match(CELL_REGEXP);
                        // The below if statement should aways be true, we leave it here to prevent any future code changes fall into infinite loop
                        if (cellMatch) {
                            cellStyle = cellMatch[2];
                            // Move into the cell content
                            index += cellMatch[2].length;
                            continue;
                        }
                        break;
                    }
                    case ':':
                    case ';':
                    case '(': {
                        currentState = processState.EMOJI;
                        continue;
                    }
                    case '[': {
                        currentState = processState.LINK;
                        continue;
                    }
                    case '!': {
                        currentState = processState.MEDIA;
                        continue;
                    }
                    case '{': {
                        currentState = processState.MACRO;
                        continue;
                    }
                    default: {
                        buffer += char;
                        index++;
                        continue;
                    }
                }
                break;
            }
            case processState.CLOSE_ROW: {
                bufferToCells(cellStyle, buffer, cellsBuffer, schema, ignoreTokenTypes, context);
                buffer = '';
                if (builder) {
                    builder.add(cellsBuffer);
                    cellsBuffer = [];
                }
                currentState = processState.NEW_ROW;
                continue;
            }
            case processState.END_TABLE: {
                if (builder) {
                    if (cellsBuffer.length) {
                        builder.add(cellsBuffer);
                    }
                    output.push(builder.buildPMNode());
                }
                return {
                    type: 'pmnode',
                    nodes: output,
                    length: index - position,
                };
            }
            case processState.MEDIA: {
                var token = media_1.media({ input: input, schema: schema, context: context, position: index });
                buffer += input.substr(index, token.length);
                index += token.length;
                currentState = processState.BUFFER;
                continue;
            }
            case processState.EMOJI: {
                var token = emoji_1.emoji({ input: input, schema: schema, context: context, position: index });
                buffer += input.substr(index, token.length);
                index += token.length;
                currentState = processState.BUFFER;
                continue;
            }
            case processState.LINK: {
                /**
                 * We should "fly over" the link format and we dont want
                 * -awesome [link|https://www.atlass-ian.com] nice
                 * to be a strike through because of the '-' in link
                 */
                var token = link_format_1.linkFormat({ input: input, schema: schema, context: context, position: index });
                if (token.type === 'text') {
                    buffer += token.text;
                    index += token.length;
                    currentState = processState.BUFFER;
                    continue;
                }
                else if (token.type === 'pmnode') {
                    buffer += input.substr(index, token.length);
                    index += token.length;
                    currentState = processState.BUFFER;
                    continue;
                }
                break;
            }
            case processState.MACRO: {
                var match = keyword_1.parseMacroKeyword(input.substring(index));
                if (!match) {
                    buffer += char;
                    currentState = processState.BUFFER;
                    break;
                }
                var token = _2.parseToken(input, match.type, index, schema, context);
                buffer += input.substr(index, token.length);
                index += token.length;
                currentState = processState.BUFFER;
                continue;
            }
        }
        index++;
    }
    /**
     * If there are left over content which didn't have a closing |
     * For example
     * |cell1|cell2|cell3
     * we still want to create a new cell for the last cell3 if it's
     * not empty.
     */
    if (buffer.trim().length > 0) {
        bufferToCells(cellStyle, buffer, cellsBuffer, schema, ignoreTokenTypes, context);
    }
    if (builder) {
        if (cellsBuffer.length) {
            builder.add(cellsBuffer);
        }
        output.push(builder.buildPMNode());
    }
    return {
        type: 'pmnode',
        nodes: output,
        length: index - position,
    };
};
function bufferToCells(style, buffer, cellsBuffer, schema, ignoreTokenTypes, context) {
    if (buffer.length) {
        var contentNode = text_1.parseString({
            schema: schema,
            context: context,
            ignoreTokenTypes: ignoreTokenTypes,
            input: buffer,
        });
        cellsBuffer.push({
            style: style,
            content: normalize_1.normalizePMNodes(contentNode, schema),
        });
    }
}
//# sourceMappingURL=table.js.map