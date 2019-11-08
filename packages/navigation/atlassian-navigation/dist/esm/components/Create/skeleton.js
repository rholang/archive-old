/** @jsx jsx */
import { gridSize } from '@atlaskit/theme/constants';
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { useTheme } from '../../theme';
import { IconButtonSkeleton } from '../IconButton/skeleton';
import { createButtonSkeletonCSS, createIconSkeletonCSS } from './styles';
export var CreateSkeleton = function () {
    var theme = useTheme();
    return (jsx(Fragment, null,
        jsx("div", { css: createButtonSkeletonCSS(theme) }),
        jsx(IconButtonSkeleton, { css: createIconSkeletonCSS, size: gridSize() * 3.25 })));
};
//# sourceMappingURL=skeleton.js.map