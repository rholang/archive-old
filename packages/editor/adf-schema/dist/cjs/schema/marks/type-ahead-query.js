"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groups_1 = require("../groups");
var colors_1 = require("../../utils/colors");
exports.typeAheadQuery = {
    inclusive: true,
    group: groups_1.SEARCH_QUERY,
    parseDOM: [{ tag: 'span[data-type-ahead-query]' }],
    toDOM: function (node) {
        return [
            'span',
            {
                'data-type-ahead-query': 'true',
                'data-trigger': node.attrs.trigger,
                style: "color: " + colors_1.B400,
            },
        ];
    },
    attrs: {
        trigger: { default: '' },
    },
};
//# sourceMappingURL=type-ahead-query.js.map