"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['table'] },
        attrs: {
            props: {
                isNumberColumnEnabled: { type: 'boolean', optional: true },
                layout: {
                    type: 'enum',
                    values: ['wide', 'full-width', 'default'],
                    optional: true,
                },
            },
            optional: true,
        },
        content: { type: 'array', items: ['tableRow'], minItems: 1 },
    },
};
//# sourceMappingURL=table.js.map