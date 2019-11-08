import { __assign } from "tslib";
import { gridSize as gridSizeFn } from '@atlaskit/theme/constants';
import { HORIZONTAL_GLOBAL_NAV_HEIGHT } from '../../common/constants';
var gridSize = gridSizeFn();
export var containerCSS = function (_a) {
    var navigation = _a.mode.navigation;
    return (__assign({ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: 0, justifyContent: 'space-between', paddingLeft: gridSize * 2, paddingRight: gridSize * 2, height: HORIZONTAL_GLOBAL_NAV_HEIGHT }, navigation));
};
export var leftCSS = {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    height: 'inherit',
};
export var rightCSS = {
    alignItems: 'center',
    display: 'flex',
    flexShrink: 0,
    right: gridSize * 4,
};
//# sourceMappingURL=styles.js.map