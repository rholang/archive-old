"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("../../utils/uuid");
exports.status = {
    inline: true,
    group: 'inline',
    selectable: true,
    attrs: {
        text: { default: '' },
        color: { default: '' },
        localId: { default: uuid_1.uuid.generate() },
        style: { default: '' },
    },
    parseDOM: [
        {
            tag: 'span[data-node-type="status"]',
            getAttrs: function (domNode) {
                var dom = domNode;
                return {
                    text: dom.textContent.replace(/\n/, '').trim(),
                    color: dom.getAttribute('data-color'),
                    localId: uuid_1.uuid.generate(),
                    style: dom.getAttribute('data-style'),
                };
            },
        },
    ],
    toDOM: function (node) {
        var _a = node.attrs, text = _a.text, color = _a.color, localId = _a.localId, style = _a.style;
        var attrs = {
            'data-node-type': 'status',
            'data-color': color,
            'data-local-id': localId,
            'data-style': style,
            contenteditable: 'false',
        };
        return ['span', attrs, text];
    },
};
//# sourceMappingURL=status.js.map