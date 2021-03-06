"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['annotation'] },
        attrs: {
            props: {
                id: { type: 'string' },
                annotationType: { type: 'enum', values: ['inlineComment'] },
            },
        },
    },
};
//# sourceMappingURL=annotation.js.map