"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var constants_1 = require("@atlaskit/theme/constants");
var HORIZONTAL_SPACING = constants_1.gridSize() / 2 + "px";
exports.default = (function (_a) {
    var maxWidth = _a.maxWidth, children = _a.children;
    return (core_1.jsx("span", { css: {
            display: 'inline-block',
            verticalAlign: 'top',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            padding: "0 " + HORIZONTAL_SPACING,
            maxWidth: typeof maxWidth === 'number' ? maxWidth + "px" : maxWidth,
            width: '100%',
        } }, children));
});
//# sourceMappingURL=Content.js.map