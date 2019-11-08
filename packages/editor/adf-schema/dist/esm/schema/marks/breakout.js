var allowedTypes = ['wide', 'full-width'];
export var breakout = {
    // @ts-ignore
    // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/32611
    spanning: false,
    parseDOM: [
        {
            tag: 'div.fabric-editor-breakout-mark',
            getAttrs: function (dom) {
                var mode = dom.getAttribute('data-mode');
                return {
                    mode: allowedTypes.indexOf(mode || '') === -1 ? 'wide' : mode,
                };
            },
        },
    ],
    attrs: {
        mode: { default: 'wide' },
    },
    toDOM: function (mark) {
        return [
            'div',
            { class: 'fabric-editor-breakout-mark', 'data-mode': mark.attrs.mode },
            0,
        ];
    },
};
//# sourceMappingURL=breakout.js.map