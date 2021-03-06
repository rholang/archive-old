"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        content: { type: 'array', items: ['taskItem'], minItems: 1 },
        type: { type: 'enum', values: ['taskList'] },
        attrs: { props: { localId: { type: 'string' } } },
    },
};
//# sourceMappingURL=taskList.js.map