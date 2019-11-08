"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@atlaskit/theme/constants");
var constants_2 = require("../../common/constants");
var topMarginSize = constants_2.HORIZONTAL_GLOBAL_NAV_HEIGHT * 0.25;
var rightMarginSize = 0;
var bottomMarginSize = topMarginSize;
var leftMarginSize = constants_1.gridSize() / 2;
exports.containerCSS = {
    display: 'flex',
    flexGrow: 1,
    overflow: 'hidden',
    '& > *': {
        flexShrink: 0,
        margin: topMarginSize + "px " + rightMarginSize + "px " + bottomMarginSize + "px " + leftMarginSize + "px",
    },
};
exports.widthDetectorContainerStyle = {
    flexShrink: 1,
    minWidth: 1,
};
exports.primaryButtonSkeletonCSS = {
    marginLeft: constants_1.gridSize() * 1.5 + "px",
    marginRight: constants_1.gridSize() * 1.5 + "px",
};
//# sourceMappingURL=styles.js.map