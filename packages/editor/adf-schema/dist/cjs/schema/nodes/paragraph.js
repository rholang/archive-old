"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pDOM = ['p', 0];
exports.paragraph = {
    content: 'inline*',
    group: 'block',
    marks: 'strong code em link strike subsup textColor typeAheadQuery underline confluenceInlineComment action annotation',
    parseDOM: [{ tag: 'p' }],
    toDOM: function () {
        return pDOM;
    },
};
//# sourceMappingURL=paragraph.js.map