"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['taskItem'] },
        content: {
            type: 'array',
            items: ['inline'],
            allowUnsupportedInline: true,
            optional: true,
        },
        attrs: {
            props: {
                localId: { type: 'string' },
                state: { type: 'enum', values: ['TODO', 'DONE'] },
            },
        },
    },
};
//# sourceMappingURL=taskItem.js.map