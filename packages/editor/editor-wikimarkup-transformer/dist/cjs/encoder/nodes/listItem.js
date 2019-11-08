"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var paragraph_1 = require("./paragraph");
var unknown_1 = require("./unknown");
var code_block_1 = require("./code-block");
var media_group_1 = require("./media-group");
exports.listItem = function (node, prefix) {
    var result = [];
    var contentBuffer = [];
    node.forEach(function (n) {
        switch (n.type.name) {
            case 'paragraph': {
                contentBuffer.push(paragraph_1.paragraph(n));
                break;
            }
            case 'bulletList':
            case 'orderedList': {
                if (contentBuffer.length) {
                    result.push(prefix + " " + contentBuffer.join('\n'));
                    contentBuffer = [];
                }
                var nestedList = __1.encode(n)
                    .split('\n')
                    .map(function (line) {
                    if (['#', '*'].indexOf(line.substr(0, 1)) !== -1) {
                        return "" + prefix + line;
                    }
                    return line;
                })
                    .join('\n');
                result.push(nestedList);
                break;
            }
            case 'codeBlock': {
                contentBuffer.push(code_block_1.codeBlock(n));
                break;
            }
            case 'mediaSingle': {
                // mediaSingle and mediaGroup are holding the same conversion logic
                contentBuffer.push(media_group_1.mediaGroup(n));
                break;
            }
            default:
                contentBuffer.push(unknown_1.unknown(n));
        }
    });
    if (contentBuffer.length) {
        result.push(prefix + " " + contentBuffer.join('\n'));
    }
    return result.join('\n');
};
//# sourceMappingURL=listItem.js.map