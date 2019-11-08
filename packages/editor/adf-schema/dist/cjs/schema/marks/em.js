"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groups_1 = require("../groups");
var emDOM = ['em'];
exports.em = {
    inclusive: true,
    group: groups_1.FONT_STYLE,
    parseDOM: [{ tag: 'i' }, { tag: 'em' }, { style: 'font-style=italic' }],
    toDOM: function () {
        return emDOM;
    },
};
//# sourceMappingURL=em.js.map