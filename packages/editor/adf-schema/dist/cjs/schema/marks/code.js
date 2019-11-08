"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groups_1 = require("../groups");
exports.code = {
    excludes: groups_1.FONT_STYLE + " " + groups_1.LINK + " " + groups_1.SEARCH_QUERY + " " + groups_1.COLOR,
    inclusive: true,
    parseDOM: [
        { tag: 'span.code', preserveWhitespace: true },
        { tag: 'code', preserveWhitespace: true },
        { tag: 'tt', preserveWhitespace: true },
        {
            tag: 'span',
            preserveWhitespace: true,
            getAttrs: function (domNode) {
                var dom = domNode;
                if (dom.style.whiteSpace === 'pre') {
                    return {};
                }
                if (dom.style.fontFamily &&
                    dom.style.fontFamily.toLowerCase().indexOf('monospace') >= 0) {
                    return {};
                }
                return false;
            },
        },
    ],
    toDOM: function () {
        return [
            'span',
            {
                style: 'white-space: pre-wrap;',
                class: 'code',
            },
        ];
    },
};
//# sourceMappingURL=code.js.map