"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['inlineExtension'] },
        attrs: {
            props: {
                extensionKey: { type: 'string', minLength: 1 },
                extensionType: { type: 'string', minLength: 1 },
                parameters: { type: 'object', optional: true },
                text: { type: 'string', optional: true },
            },
        },
    },
};
//# sourceMappingURL=inlineExtension.js.map