import { __assign } from "tslib";
import { fontSize, gridSize as gridSizeFn } from '@atlaskit/theme/constants';
import { actionSectionDesktopCSS, actionSectionMobileCSS, skeletonCSS, } from '../../common/styles';
var gridSize = gridSizeFn();
var searchCommonCSS = {
    borderRadius: gridSize * 2 + "px",
    boxSizing: 'border-box',
    height: gridSize * 4 + "px",
    padding: "0 " + gridSize + "px 0 40px",
    width: '220px',
};
export var searchIconCSS = actionSectionMobileCSS;
export var searchIconSkeletonCSS = searchIconCSS;
export var searchInputContainerCSS = __assign({ marginLeft: '20px', paddingRight: gridSize + "px", position: 'relative' }, actionSectionDesktopCSS);
export var searchInputCSS = function (_a) {
    var search = _a.mode.search;
    return (__assign(__assign(__assign({}, searchCommonCSS), { border: 'none', fontSize: fontSize() + "px", outline: 'none', '::placeholder': {
            color: 'inherit',
        } }), search));
};
export var searchInputIconCSS = {
    height: '20px',
    left: '10px',
    position: 'absolute',
    pointerEvents: 'none',
    top: '5px',
    width: '20px',
};
export var searchInputSkeletonCSS = function (theme) { return (__assign(__assign({}, searchCommonCSS), skeletonCSS(theme))); };
//# sourceMappingURL=styles.js.map