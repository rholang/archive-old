/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from '../../theme';
import { iconButtonSkeletonCSS } from './styles';
export var IconButtonSkeleton = function (props) {
    var theme = useTheme();
    return (jsx("div", { className: props.className, css: iconButtonSkeletonCSS(theme, props) }));
};
//# sourceMappingURL=skeleton.js.map