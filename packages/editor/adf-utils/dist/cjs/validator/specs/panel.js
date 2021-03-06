"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        type: { type: 'enum', values: ['panel'] },
        attrs: {
            props: {
                panelType: {
                    type: 'enum',
                    values: ['info', 'note', 'tip', 'warning', 'error', 'success'],
                },
            },
        },
        content: {
            type: 'array',
            items: [
                [
                    'paragraph_with_no_marks',
                    'bulletList',
                    'orderedList',
                    'heading_with_no_marks',
                ],
            ],
            minItems: 1,
        },
    },
};
//# sourceMappingURL=panel.js.map