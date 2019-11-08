"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("@atlaskit/theme/constants");
var styles_1 = require("../../common/styles");
var gridSize = constants_1.gridSize();
var buttonHeight = gridSize * 4;
exports.createButtonCSS = styles_1.actionSectionDesktopCSS;
exports.createButtonSkeletonCSS = function (theme) { return (tslib_1.__assign(tslib_1.__assign({ height: buttonHeight + "px", width: '68px', borderRadius: '3px' }, exports.createButtonCSS), styles_1.skeletonCSS(theme))); };
exports.createIconCSS = styles_1.actionSectionMobileCSS;
exports.createIconSkeletonCSS = exports.createIconCSS;
exports.getCreateButtonTheme = function (_a) {
    var create = _a.mode.create;
    return function (current, props) {
        var _a = current(props), buttonStyles = _a.buttonStyles, spinnerStyles = _a.spinnerStyles;
        return {
            buttonStyles: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, buttonStyles), { fontSize: constants_1.fontSizeSmall(), fontWeight: 'bold', height: buttonHeight, textTransform: 'uppercase' }), create.default), { ':hover': create.hover, ':focus': create.focus, ':active': create.active }),
            spinnerStyles: spinnerStyles,
        };
    };
};
//# sourceMappingURL=styles.js.map