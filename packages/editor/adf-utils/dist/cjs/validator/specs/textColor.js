"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['textColor'] },
        attrs: { props: { color: { type: 'string', pattern: '^#[0-9a-f]{6}$' } } },
    },
};
//# sourceMappingURL=textColor.js.map