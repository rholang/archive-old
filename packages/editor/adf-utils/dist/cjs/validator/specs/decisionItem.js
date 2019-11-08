"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['decisionItem'] },
        content: {
            type: 'array',
            items: ['inline'],
            allowUnsupportedInline: true,
            optional: true,
        },
        attrs: {
            props: { localId: { type: 'string' }, state: { type: 'string' } },
        },
    },
};
//# sourceMappingURL=decisionItem.js.map