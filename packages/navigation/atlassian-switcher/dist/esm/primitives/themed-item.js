import { __assign } from "tslib";
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { itemThemeNamespace } from '@atlaskit/item';
import Item from './item';
import { ItemTheme } from '../theme/default-theme';
export default (function (props) { return (React.createElement(ItemTheme.Consumer, null, function (tokens) {
    var _a;
    return (React.createElement(ThemeProvider, { theme: (_a = {}, _a[itemThemeNamespace] = tokens, _a) },
        React.createElement(Item, __assign({}, props))));
})); });
//# sourceMappingURL=themed-item.js.map