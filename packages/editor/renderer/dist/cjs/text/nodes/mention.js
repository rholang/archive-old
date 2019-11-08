"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mention = function (node, schema) {
    if (['all', 'here'].indexOf(node.attrs.id) !== -1) {
        return "@" + node.attrs.id;
    }
    return "" + (node.attrs.text || '@unknown');
};
exports.default = mention;
//# sourceMappingURL=mention.js.map