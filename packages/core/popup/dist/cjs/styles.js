"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("@atlaskit/theme/colors");
var constants_1 = require("@atlaskit/theme/constants");
var shadow = colors_1.N40A;
exports.popupCSS = {
    backgroundColor: colors_1.N0,
    borderRadius: constants_1.borderRadius() + "px",
    boxShadow: "0 0 0 1px " + shadow + ", 0 4px 11px " + shadow,
    boxSizing: 'border-box',
    display: 'block',
    flex: '1 1 auto',
    overflow: 'auto',
    zIndex: constants_1.layers.layer(),
    ':focus': {
        outline: 'none',
    },
};
exports.containerCSS = {
    position: 'relative',
};
//# sourceMappingURL=styles.js.map