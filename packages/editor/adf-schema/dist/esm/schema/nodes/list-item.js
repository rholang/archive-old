export var listItem = {
    content: '(paragraph | mediaSingle | codeBlock) (paragraph | bulletList | orderedList | mediaSingle | codeBlock)*',
    defining: true,
    parseDOM: [{ tag: 'li' }],
    toDOM: function () {
        return ['li', 0];
    },
};
//# sourceMappingURL=list-item.js.map