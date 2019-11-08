"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blockquote_1 = require("./nodes/blockquote");
var bullet_list_1 = require("./nodes/bullet-list");
var code_block_1 = require("./nodes/code-block");
var doc_1 = require("./nodes/doc");
var heading_1 = require("./nodes/heading");
var media_group_1 = require("./nodes/media-group");
var ordered_list_1 = require("./nodes/ordered-list");
var panel_1 = require("./nodes/panel");
var paragraph_1 = require("./nodes/paragraph");
var rule_1 = require("./nodes/rule");
var table_1 = require("./nodes/table");
var unknown_1 = require("./nodes/unknown");
var nodeEncoderMapping = {
    blockquote: blockquote_1.blockquote,
    bulletList: bullet_list_1.bulletList,
    codeBlock: code_block_1.codeBlock,
    doc: doc_1.doc,
    heading: heading_1.heading,
    mediaGroup: media_group_1.mediaGroup,
    mediaSingle: media_group_1.mediaGroup,
    orderedList: ordered_list_1.orderedList,
    panel: panel_1.panel,
    paragraph: paragraph_1.paragraph,
    rule: rule_1.rule,
    table: table_1.table,
};
function encode(node) {
    var encoder = nodeEncoderMapping[node.type.name];
    try {
        if (encoder) {
            return encoder(node);
        }
        return unknown_1.unknown(node);
    }
    catch (err) {
        return unknown_1.unknown(node);
    }
}
exports.encode = encode;
//# sourceMappingURL=index.js.map