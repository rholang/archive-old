"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['heading'] },
        content: {
            type: 'array',
            items: ['inline'],
            allowUnsupportedInline: true,
            optional: true,
        },
        marks: { type: 'array', items: [], optional: true },
        attrs: { props: { level: { type: 'number', minimum: 1, maximum: 6 } } },
    },
};
//# sourceMappingURL=heading.js.map