"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confluenceInlineComment = {
    inclusive: false,
    excludes: '',
    attrs: {
        reference: {
            default: '',
        },
    },
    parseDOM: [{ tag: 'span[data-mark-type="confluenceInlineComment"]' }],
    toDOM: function (node) {
        return [
            'span',
            {
                'data-mark-type': 'confluenceInlineComment',
                'data-reference': node.attrs.reference,
            },
        ];
    },
};
//# sourceMappingURL=confluence-inline-comment.js.map