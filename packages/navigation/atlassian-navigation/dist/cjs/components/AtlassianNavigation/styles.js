"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("@atlaskit/theme/constants");
var constants_2 = require("../../common/constants");
var gridSize = constants_1.gridSize();
exports.containerCSS = function (_a) {
    var navigation = _a.mode.navigation;
    return (tslib_1.__assign({ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: 0, justifyContent: 'space-between', paddingLeft: gridSize * 2, paddingRight: gridSize * 2, height: constants_2.HORIZONTAL_GLOBAL_NAV_HEIGHT }, navigation));
};
exports.leftCSS = {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    height: 'inherit',
};
exports.rightCSS = {
    alignItems: 'center',
    display: 'flex',
    flexShrink: 0,
    right: gridSize * 4,
};
//# sourceMappingURL=styles.js.map