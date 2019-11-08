"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emoji_unicode_mapping_1 = require("../emoji-unicode-mapping");
var unknown_1 = require("./unknown");
exports.emoji = function (node) {
    var value = emoji_unicode_mapping_1.mapping[node.attrs.id];
    if (value) {
        return value;
    }
    return unknown_1.unknown(node);
};
//# sourceMappingURL=emoji.js.map