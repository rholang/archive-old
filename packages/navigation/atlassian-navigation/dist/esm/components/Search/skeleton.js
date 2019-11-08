/** @jsx jsx */
import { gridSize } from '@atlaskit/theme/constants';
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { useTheme } from '../../theme';
import { IconButtonSkeleton } from '../IconButton/skeleton';
import { searchIconSkeletonCSS, searchInputContainerCSS, searchInputSkeletonCSS, } from './styles';
export var SearchSkeleton = function () {
    var theme = useTheme();
    return (jsx(Fragment, null,
        jsx("div", { css: searchInputContainerCSS },
            jsx("div", { css: searchInputSkeletonCSS(theme) })),
        jsx(IconButtonSkeleton, { css: searchIconSkeletonCSS, marginRight: 5, size: gridSize() * 3.25 })));
};
//# sourceMappingURL=skeleton.js.map