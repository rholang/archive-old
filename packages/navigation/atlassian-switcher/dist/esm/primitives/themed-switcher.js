import { __assign, __rest } from "tslib";
import * as React from 'react';
import Switcher from '../components/switcher';
import { TopLevelItemWrapperTheme, ItemTheme, ChildItemTheme, } from '../theme/default-theme';
import { createCustomTheme } from '../theme/theme-builder';
export default (function (_a) {
    var theme = _a.theme, _b = _a.appearance, appearance = _b === void 0 ? 'drawer' : _b, rest = __rest(_a, ["theme", "appearance"]);
    var customTheme = createCustomTheme(theme);
    return (React.createElement(TopLevelItemWrapperTheme.Provider, { value: customTheme.topLevelItemWrapperTheme },
        React.createElement(ItemTheme.Provider, { value: customTheme.itemTheme },
            React.createElement(ChildItemTheme.Provider, { value: customTheme.childItemTheme },
                React.createElement(Switcher, __assign({}, rest, { appearance: appearance }))))));
});
//# sourceMappingURL=themed-switcher.js.map