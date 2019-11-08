"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeholder = {
    inline: true,
    group: 'inline',
    selectable: false,
    marks: '',
    attrs: {
        text: { default: '' },
    },
    parseDOM: [
        {
            tag: 'span[data-placeholder]',
            getAttrs: function (dom) { return ({
                text: dom.getAttribute('data-placeholder') ||
                    exports.placeholder.attrs.text.default,
            }); },
        },
    ],
    toDOM: function (node) {
        var text = node.attrs.text;
        var attrs = {
            'data-placeholder': text,
            contenteditable: 'false',
        };
        return ['span', attrs, text];
    },
};
//# sourceMappingURL=placeholder.js.map