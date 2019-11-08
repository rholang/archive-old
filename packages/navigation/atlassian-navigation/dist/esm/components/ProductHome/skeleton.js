/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from '../../theme';
import { containerSkeletonCSS, productIconSkeletonCSS, productLogoSkeletonCSS, } from './styles';
export var ProductHomeSkeleton = function () {
    var theme = useTheme();
    return (jsx("div", { css: containerSkeletonCSS },
        jsx("div", { css: productLogoSkeletonCSS(theme) }),
        jsx("div", { css: productIconSkeletonCSS(theme) })));
};
//# sourceMappingURL=skeleton.js.map