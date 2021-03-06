"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INLINE_COMMENT = 'inlineComment';
exports.annotation = {
    inclusive: false,
    group: 'annotation',
    excludes: '',
    attrs: {
        id: {
            default: '',
        },
        annotationType: {
            default: exports.INLINE_COMMENT,
        },
    },
    parseDOM: [
        {
            tag: 'span[data-mark-type="annotation"]',
            getAttrs: function (dom) {
                var elem = dom;
                var annotationType = elem.getAttribute('data-mark-annotation-type');
                if (!annotationType) {
                    return false;
                }
                return {
                    id: elem.getAttribute('data-id'),
                    annotationType: annotationType,
                };
            },
        },
    ],
    toDOM: function (node) {
        /*
          Data attributes on the DOM node are a temporary means of
          incrementally switching over to the Annotation mark. Once renderer
          provides native support for inline comments the data attributes on the
          DOM nodes will be removed.
        */
        return [
            'span',
            {
                // Prettier will remove the quotes around class. This would cause some browsers
                // to not add this attribute properly, as its a reserved word.
                // prettier-ignore
                'class': 'fabric-editor-annotation',
                'data-mark-type': 'annotation',
                'data-mark-annotation-type': node.attrs.annotationType,
                'data-id': node.attrs.id,
            },
            0,
        ];
    },
};
//# sourceMappingURL=annotation.js.map