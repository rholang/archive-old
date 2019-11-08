"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'text',
    {
        props: {
            marks: {
                type: 'array',
                items: [
                    [
                        'em',
                        'strike',
                        'strong',
                        'underline',
                        'link',
                        'subsup',
                        'textColor',
                        'annotation',
                    ],
                ],
                optional: true,
            },
        },
    },
];
//# sourceMappingURL=formatted_text_inline.js.map