"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockquote = {
    content: 'paragraph+',
    group: 'block',
    defining: true,
    selectable: false,
    parseDOM: [{ tag: 'blockquote' }],
    toDOM: function () {
        return ['blockquote', 0];
    },
};
//# sourceMappingURL=blockquote.js.map