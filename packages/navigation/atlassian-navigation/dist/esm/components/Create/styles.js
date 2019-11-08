import { __assign } from "tslib";
import { fontSizeSmall, gridSize as gridSizeFn, } from '@atlaskit/theme/constants';
import { actionSectionDesktopCSS, actionSectionMobileCSS, skeletonCSS, } from '../../common/styles';
var gridSize = gridSizeFn();
var buttonHeight = gridSize * 4;
export var createButtonCSS = actionSectionDesktopCSS;
export var createButtonSkeletonCSS = function (theme) { return (__assign(__assign({ height: buttonHeight + "px", width: '68px', borderRadius: '3px' }, createButtonCSS), skeletonCSS(theme))); };
export var createIconCSS = actionSectionMobileCSS;
export var createIconSkeletonCSS = createIconCSS;
export var getCreateButtonTheme = function (_a) {
    var create = _a.mode.create;
    return function (current, props) {
        var _a = current(props), buttonStyles = _a.buttonStyles, spinnerStyles = _a.spinnerStyles;
        return {
            buttonStyles: __assign(__assign(__assign(__assign({}, buttonStyles), { fontSize: fontSizeSmall(), fontWeight: 'bold', height: buttonHeight, textTransform: 'uppercase' }), create.default), { ':hover': create.hover, ':focus': create.focus, ':active': create.active }),
            spinnerStyles: spinnerStyles,
        };
    };
};
//# sourceMappingURL=styles.js.map