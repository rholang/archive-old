"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.layoutSection = {
    content: 'layoutColumn{2,3}',
    isolating: true,
    marks: 'breakout',
    parseDOM: [
        {
            context: 'layoutSection//|layoutColumn//',
            tag: 'div[data-layout-section]',
            skip: true,
        },
        {
            tag: 'div[data-layout-section]',
        },
    ],
    toDOM: function () {
        var attrs = { 'data-layout-section': 'true' };
        return ['div', attrs, 0];
    },
};
//# sourceMappingURL=layout-section.js.map