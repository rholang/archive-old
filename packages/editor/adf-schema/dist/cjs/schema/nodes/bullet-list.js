"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulletListSelector = '.ak-ul';
exports.bulletList = {
    group: 'block',
    content: 'listItem+',
    parseDOM: [{ tag: 'ul' }],
    toDOM: function () {
        var attrs = {
            class: exports.bulletListSelector.substr(1),
        };
        return ['ul', attrs, 0];
    },
};
//# sourceMappingURL=bullet-list.js.map