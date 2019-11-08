"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseWhitespaceAndNewLine(input) {
    var newlineLength = parseNewlineOnly(input);
    if (newlineLength) {
        return newlineLength;
    }
    var whitespaceLength = parseWhitespaceOnly(input);
    if (whitespaceLength) {
        return whitespaceLength;
    }
    // There is nether whitespace nor newline
    return 0;
}
exports.parseWhitespaceAndNewLine = parseWhitespaceAndNewLine;
function parseWhitespaceOnly(input) {
    var index = 0;
    var char = input.charAt(index);
    if (char === '\t' || char === ' ') {
        index++;
    }
    return index;
}
exports.parseWhitespaceOnly = parseWhitespaceOnly;
function parseNewlineOnly(input) {
    var index = 0;
    var char = input.charAt(index);
    if (char === '\r') {
        // CR (Unix)
        index++;
        if (input.charAt(index) === '\n') {
            // CRLF (Windows)
            index++;
        }
    }
    else if (char === '\n') {
        // LF (MacOS)
        index++;
    }
    return index;
}
exports.parseNewlineOnly = parseNewlineOnly;
//# sourceMappingURL=whitespace.js.map