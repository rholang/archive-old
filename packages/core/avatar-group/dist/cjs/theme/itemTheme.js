"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = require("@atlaskit/item");
var constants_1 = require("@atlaskit/theme/constants");
var math_1 = require("@atlaskit/theme/math");
var colors_1 = require("@atlaskit/theme/colors");
var dropdownPadding = {
    bottom: 1,
    left: math_1.multiply(constants_1.gridSize, 1.5),
    right: math_1.multiply(constants_1.gridSize, 1.5),
    top: 1,
};
// Override specific parts of droplist's item theme
var avatarItemTheme = {
    borderRadius: '0px',
    default: {
        background: colors_1.backgroundOnLayer,
        text: colors_1.N900,
    },
    active: {
        text: colors_1.N900,
        background: colors_1.backgroundActive,
    },
    padding: {
        default: dropdownPadding,
        compact: dropdownPadding,
    },
};
exports.default = (_a = {},
    _a[item_1.itemThemeNamespace] = avatarItemTheme,
    _a);
//# sourceMappingURL=itemTheme.js.map