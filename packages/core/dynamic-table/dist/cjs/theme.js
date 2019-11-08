"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
exports.arrow = {
    defaultColor: components_1.themed({ light: colors.N40, dark: colors.DN40 }),
    selectedColor: components_1.themed({ light: colors.N300, dark: colors.DN300 }),
    hoverColor: components_1.themed({ light: colors.N60, dark: colors.DN60 }),
};
exports.row = {
    highlightedBackground: components_1.themed({ light: colors.N20, dark: colors.DN50 }),
    hoverBackground: components_1.themed({ light: colors.N10, dark: colors.DN40 }),
    hoverHighlightedBackground: components_1.themed({ light: colors.N30, dark: colors.DN60 }),
};
exports.head = {
    borderColor: components_1.themed({ light: colors.N40, dark: colors.DN50 }),
    textColor: components_1.themed({ light: colors.N300, dark: colors.DN300 }),
};
//# sourceMappingURL=theme.js.map