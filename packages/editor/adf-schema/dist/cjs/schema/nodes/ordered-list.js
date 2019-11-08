"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderedListSelector = '.ak-ol';
exports.orderedList = {
    group: 'block',
    content: 'listItem+',
    parseDOM: [{ tag: 'ol' }],
    toDOM: function () {
        var attrs = {
            class: exports.orderedListSelector.substr(1),
        };
        return ['ol', attrs, 0];
    },
};
//# sourceMappingURL=ordered-list.js.map