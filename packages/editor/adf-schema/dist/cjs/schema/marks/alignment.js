"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groups_1 = require("../groups");
/** TODO: Flip these positions for RTL */
exports.alignmentPositionMap = {
    end: 'right',
    right: 'end',
    center: 'center',
};
exports.alignment = {
    excludes: "alignment " + groups_1.INDENTATION,
    group: groups_1.ALIGNMENT,
    attrs: {
        align: {},
    },
    parseDOM: [
        {
            tag: 'div.fabric-editor-block-mark',
            getAttrs: function (dom) {
                var align = dom.getAttribute('data-align');
                return align ? { align: align } : false;
            },
        },
    ],
    toDOM: function (mark) {
        return [
            'div',
            {
                class: "fabric-editor-block-mark fabric-editor-align-" + mark.attrs.align,
                'data-align': mark.attrs.align,
            },
            0,
        ];
    },
};
//# sourceMappingURL=alignment.js.map