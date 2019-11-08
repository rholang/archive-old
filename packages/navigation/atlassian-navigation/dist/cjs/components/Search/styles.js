"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("@atlaskit/theme/constants");
var styles_1 = require("../../common/styles");
var gridSize = constants_1.gridSize();
var searchCommonCSS = {
    borderRadius: gridSize * 2 + "px",
    boxSizing: 'border-box',
    height: gridSize * 4 + "px",
    padding: "0 " + gridSize + "px 0 40px",
    width: '220px',
};
exports.searchIconCSS = styles_1.actionSectionMobileCSS;
exports.searchIconSkeletonCSS = exports.searchIconCSS;
exports.searchInputContainerCSS = tslib_1.__assign({ marginLeft: '20px', paddingRight: gridSize + "px", position: 'relative' }, styles_1.actionSectionDesktopCSS);
exports.searchInputCSS = function (_a) {
    var search = _a.mode.search;
    return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, searchCommonCSS), { border: 'none', fontSize: constants_1.fontSize() + "px", outline: 'none', '::placeholder': {
            color: 'inherit',
        } }), search));
};
exports.searchInputIconCSS = {
    height: '20px',
    left: '10px',
    position: 'absolute',
    pointerEvents: 'none',
    top: '5px',
    width: '20px',
};
exports.searchInputSkeletonCSS = function (theme) { return (tslib_1.__assign(tslib_1.__assign({}, searchCommonCSS), styles_1.skeletonCSS(theme))); };
//# sourceMappingURL=styles.js.map