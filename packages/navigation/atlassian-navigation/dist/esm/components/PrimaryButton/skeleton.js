import { __assign } from "tslib";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from '../../theme';
import { primaryButtonSkeletonCSS } from './styles';
export var PrimaryButtonSkeleton = function (props) {
    var theme = useTheme();
    return jsx("div", __assign({}, props, { css: primaryButtonSkeletonCSS(theme) }));
};
//# sourceMappingURL=skeleton.js.map