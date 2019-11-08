"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groups_1 = require("../groups");
exports.strike = {
    inclusive: true,
    group: groups_1.FONT_STYLE,
    parseDOM: [
        { tag: 'strike' },
        { tag: 's' },
        { tag: 'del' },
        {
            style: 'text-decoration',
            getAttrs: function (value) { return value === 'line-through' && null; },
        },
    ],
    toDOM: function () {
        return ['s'];
    },
};
//# sourceMappingURL=strike.js.map