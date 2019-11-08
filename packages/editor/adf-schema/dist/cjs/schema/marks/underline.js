"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groups_1 = require("../groups");
exports.underline = {
    inclusive: true,
    group: groups_1.FONT_STYLE,
    parseDOM: [
        { tag: 'u' },
        {
            style: 'text-decoration',
            getAttrs: function (value) { return value === 'underline' && null; },
        },
    ],
    toDOM: function () {
        return ['u'];
    },
};
//# sourceMappingURL=underline.js.map