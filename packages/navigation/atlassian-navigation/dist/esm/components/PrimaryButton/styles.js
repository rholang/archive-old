import { __assign } from "tslib";
import { fontSizeSmall, gridSize as gridSizeFn, } from '@atlaskit/theme/constants';
import { skeletonCSS } from '../../common/styles';
var gridSize = gridSizeFn();
export var buttonHeight = gridSize * 4;
export var margin = {
    left: gridSize / 2,
};
export var padding = {
    all: gridSize / 2,
};
export var getPrimaryButtonTheme = function (_a) {
    var primaryButton = _a.mode.primaryButton;
    return function (current, props) {
        var _a = current(props), buttonStyles = _a.buttonStyles, spinnerStyles = _a.spinnerStyles;
        return {
            buttonStyles: __assign(__assign(__assign(__assign({}, buttonStyles), { fontSize: fontSizeSmall(), fontWeight: 'bold', height: buttonHeight, padding: padding.all }), primaryButton.default), { ':hover': primaryButton.hover, ':focus': primaryButton.focus, ':active': primaryButton.active }),
            spinnerStyles: spinnerStyles,
        };
    };
};
export var primaryButtonSkeletonCSS = function (theme) { return (__assign({ borderRadius: gridSize / 2 + "px", display: 'inline-flex', height: buttonHeight - padding.all * 2.5 + "px", width: '68px' }, skeletonCSS(theme))); };
//# sourceMappingURL=styles.js.map