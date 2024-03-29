"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['emoji'] },
        attrs: {
            props: {
                id: { type: 'string', optional: true },
                shortName: { type: 'string' },
                text: { type: 'string', optional: true },
            },
        },
    },
};
//# sourceMappingURL=emoji.js.map