export var layoutColumn = {
    content: 'block+',
    isolating: true,
    marks: 'alignment',
    attrs: {
        width: {
            default: undefined,
        },
    },
    parseDOM: [
        {
            context: 'layoutColumn//',
            tag: 'div[data-layout-column]',
            skip: true,
        },
        {
            tag: 'div[data-layout-column]',
            getAttrs: function (domNode) {
                var dom = domNode;
                return {
                    width: Number(dom.getAttribute('data-column-width')) || undefined,
                };
            },
        },
    ],
    toDOM: function (node) {
        var attrs = {
            'data-layout-column': 'true',
        };
        var width = node.attrs.width;
        if (width) {
            attrs['style'] = "flex-basis: " + width + "%";
            attrs['data-column-width'] = width;
        }
        // We need to apply a attribute to the inner most child to help
        // ProseMirror identify its boundaries better.
        var contentAttrs = {
            'data-layout-content': 'true',
        };
        return ['div', attrs, ['div', contentAttrs, 0]];
    },
};
//# sourceMappingURL=layout-column.js.map