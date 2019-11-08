import { __assign } from "tslib";
import { gridSize as gridSizeFn } from '@atlaskit/theme/constants';
import { skeletonCSS } from '../../common/styles';
var gridSize = gridSizeFn();
export var margin = {
    left: gridSize / 2,
};
export var padding = {
    all: gridSize / 2,
};
export var getIconButtonTheme = function (_a) {
    var iconButton = _a.mode.iconButton;
    return function (current, props) {
        var _a = current(props), buttonStyles = _a.buttonStyles, spinnerStyles = _a.spinnerStyles;
        return {
            buttonStyles: __assign(__assign(__assign(__assign({}, buttonStyles), { borderRadius: 100, display: 'flex', height: 'auto', marginLeft: margin.left, padding: padding.all }), iconButton.default), { ':hover': iconButton.hover, ':focus': iconButton.focus, ':active': iconButton.active, '> span > span': {
                    margin: 0,
                } }),
            spinnerStyles: spinnerStyles,
        };
    };
};
var buttonHeight = gridSize * 4;
export var iconButtonSkeletonCSS = function (theme, _a) {
    var marginLeft = _a.marginLeft, marginRight = _a.marginRight, size = _a.size;
    return (__assign({ borderRadius: '50%', marginLeft: typeof marginLeft === 'number' ? marginLeft : margin.left + "px", marginRight: typeof marginRight === 'number' ? marginRight : 0, width: typeof size === 'number' ? size : buttonHeight + "px}", height: typeof size === 'number' ? size : buttonHeight + "px" }, skeletonCSS(theme)));
};
//# sourceMappingURL=styles.js.map