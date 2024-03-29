"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['paragraph'] },
        content: {
            type: 'array',
            items: ['inline'],
            allowUnsupportedInline: true,
            optional: true,
        },
        marks: { type: 'array', items: [], optional: true },
    },
};
//# sourceMappingURL=paragraph.js.map