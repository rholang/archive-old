"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("@atlaskit/theme/constants");
var styles_1 = require("../../common/styles");
var gridSize = constants_1.gridSize();
exports.buttonHeight = gridSize * 4;
exports.margin = {
    left: gridSize / 2,
};
exports.padding = {
    all: gridSize / 2,
};
exports.getPrimaryButtonTheme = function (_a) {
    var primaryButton = _a.mode.primaryButton;
    return function (current, props) {
        var _a = current(props), buttonStyles = _a.buttonStyles, spinnerStyles = _a.spinnerStyles;
        return {
            buttonStyles: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, buttonStyles), { fontSize: constants_1.fontSizeSmall(), fontWeight: 'bold', height: exports.buttonHeight, padding: exports.padding.all }), primaryButton.default), { ':hover': primaryButton.hover, ':focus': primaryButton.focus, ':active': primaryButton.active }),
            spinnerStyles: spinnerStyles,
        };
    };
};
exports.primaryButtonSkeletonCSS = function (theme) { return (tslib_1.__assign({ borderRadius: gridSize / 2 + "px", display: 'inline-flex', height: exports.buttonHeight - exports.padding.all * 2.5 + "px", width: '68px' }, styles_1.skeletonCSS(theme))); };
//# sourceMappingURL=styles.js.map