/** @jsx jsx */
import { gridSize } from '@atlaskit/theme/constants';
import { jsx } from '@emotion/core';
import { ThemeProvider, defaultTheme } from '../../theme';
import { CreateSkeleton } from '../Create/skeleton';
import { IconButtonSkeleton } from '../IconButton/skeleton';
import { PrimaryItemsContainerSkeleton } from '../PrimaryItemsContainer/skeleton';
import { ProductHomeSkeleton } from '../ProductHome/skeleton';
import { ProfileSkeleton } from '../Profile/skeleton';
import { SearchSkeleton } from '../Search/skeleton';
import { containerCSS, leftCSS, rightCSS } from './styles';
export var NavigationSkeleton = function (_a) {
    var _b = _a.primaryItemsCount, primaryItemsCount = _b === void 0 ? 4 : _b, _c = _a.secondaryItemsCount, secondaryItemsCount = _c === void 0 ? 4 : _c, _d = _a.theme, theme = _d === void 0 ? defaultTheme : _d;
    return (jsx(ThemeProvider, { value: theme },
        jsx("div", { css: containerCSS(theme) },
            jsx("div", { css: leftCSS },
                jsx(ProductHomeSkeleton, null),
                jsx(PrimaryItemsContainerSkeleton, { count: primaryItemsCount })),
            jsx("div", { css: rightCSS },
                jsx(CreateSkeleton, null),
                jsx(SearchSkeleton, null),
                Array.from({ length: secondaryItemsCount }, function (_, index) { return (jsx(IconButtonSkeleton, { key: index, marginLeft: 0, marginRight: 5, size: gridSize() * 3.25 })); }),
                jsx(ProfileSkeleton, null)))));
};
//# sourceMappingURL=skeleton.js.map