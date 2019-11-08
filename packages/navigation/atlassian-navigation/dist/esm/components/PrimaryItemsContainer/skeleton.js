/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { PrimaryButtonSkeleton } from '../PrimaryButton/skeleton';
import { primaryButtonSkeletonCSS } from './styles';
export var PrimaryItemsContainerSkeleton = function (_a) {
    var count = _a.count;
    return (jsx(Fragment, null, Array.from({ length: count }, function (_, index) { return (jsx(PrimaryButtonSkeleton, { key: index, css: primaryButtonSkeletonCSS })); })));
};
//# sourceMappingURL=skeleton.js.map