"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['layoutColumn'] },
        attrs: { props: { width: { type: 'number', minimum: 0, maximum: 100 } } },
        content: { type: 'array', items: ['block_content'], minItems: 1 },
    },
};
//# sourceMappingURL=layoutColumn.js.map