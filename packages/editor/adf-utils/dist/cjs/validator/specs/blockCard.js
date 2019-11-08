"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['blockCard'] },
        attrs: [
            { props: { url: { type: 'string' } } },
            { props: { data: { type: 'object' } } },
        ],
    },
    required: ['attrs'],
};
//# sourceMappingURL=blockCard.js.map