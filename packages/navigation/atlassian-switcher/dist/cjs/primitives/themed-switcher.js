"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var switcher_1 = tslib_1.__importDefault(require("../components/switcher"));
var default_theme_1 = require("../theme/default-theme");
var theme_builder_1 = require("../theme/theme-builder");
exports.default = (function (_a) {
    var theme = _a.theme, _b = _a.appearance, appearance = _b === void 0 ? 'drawer' : _b, rest = tslib_1.__rest(_a, ["theme", "appearance"]);
    var customTheme = theme_builder_1.createCustomTheme(theme);
    return (React.createElement(default_theme_1.TopLevelItemWrapperTheme.Provider, { value: customTheme.topLevelItemWrapperTheme },
        React.createElement(default_theme_1.ItemTheme.Provider, { value: customTheme.itemTheme },
            React.createElement(default_theme_1.ChildItemTheme.Provider, { value: customTheme.childItemTheme },
                React.createElement(switcher_1.default, tslib_1.__assign({}, rest, { appearance: appearance }))))));
});
//# sourceMappingURL=themed-switcher.js.map