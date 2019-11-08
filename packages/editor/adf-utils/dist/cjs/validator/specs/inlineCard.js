"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['inlineCard'] },
        attrs: [
            { props: { url: { type: 'string' } } },
            { props: { data: { type: 'object' } } },
        ],
    },
    required: ['attrs'],
};
//# sourceMappingURL=inlineCard.js.map