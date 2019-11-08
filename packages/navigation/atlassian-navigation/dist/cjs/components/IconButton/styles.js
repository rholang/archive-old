"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("@atlaskit/theme/constants");
var styles_1 = require("../../common/styles");
var gridSize = constants_1.gridSize();
exports.margin = {
    left: gridSize / 2,
};
exports.padding = {
    all: gridSize / 2,
};
exports.getIconButtonTheme = function (_a) {
    var iconButton = _a.mode.iconButton;
    return function (current, props) {
        var _a = current(props), buttonStyles = _a.buttonStyles, spinnerStyles = _a.spinnerStyles;
        return {
            buttonStyles: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, buttonStyles), { borderRadius: 100, display: 'flex', height: 'auto', marginLeft: exports.margin.left, padding: exports.padding.all }), iconButton.default), { ':hover': iconButton.hover, ':focus': iconButton.focus, ':active': iconButton.active, '> span > span': {
                    margin: 0,
                } }),
            spinnerStyles: spinnerStyles,
        };
    };
};
var buttonHeight = gridSize * 4;
exports.iconButtonSkeletonCSS = function (theme, _a) {
    var marginLeft = _a.marginLeft, marginRight = _a.marginRight, size = _a.size;
    return (tslib_1.__assign({ borderRadius: '50%', marginLeft: typeof marginLeft === 'number' ? marginLeft : exports.margin.left + "px", marginRight: typeof marginRight === 'number' ? marginRight : 0, width: typeof size === 'number' ? size : buttonHeight + "px}", height: typeof size === 'number' ? size : buttonHeight + "px" }, styles_1.skeletonCSS(theme)));
};
//# sourceMappingURL=styles.js.map