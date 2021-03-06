import { __assign, __rest } from "tslib";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getLoadingStyle } from './utils';
import { gridSize } from '@atlaskit/theme/constants';
export default (function (_a) {
    var spacing = _a.spacing, icon = _a.icon, isOnlyChild = _a.isOnlyChild, isLoading = _a.isLoading, rest = __rest(_a, ["spacing", "icon", "isOnlyChild", "isLoading"]);
    return (jsx("span", __assign({ css: __assign({ alignSelf: 'center', display: 'flex', flexShrink: 0, lineHeight: 0, fontSize: 0, userSelect: 'none', margin: spacing === 'none'
                ? 0
                : isOnlyChild
                    ? "0 -" + gridSize() / 4 + "px"
                    : "0 " + gridSize() / 2 + "px" }, getLoadingStyle(isLoading)) }, rest), icon));
});
//# sourceMappingURL=IconWrapper.js.map