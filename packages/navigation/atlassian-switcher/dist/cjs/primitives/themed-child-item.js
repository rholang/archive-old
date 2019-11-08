"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = require("styled-components");
var item_1 = require("@atlaskit/item");
var item_2 = tslib_1.__importDefault(require("./item"));
var default_theme_1 = require("../theme/default-theme");
exports.default = (function (props) { return (React.createElement(default_theme_1.ChildItemTheme.Consumer, null, function (tokens) {
    var _a;
    return (React.createElement(styled_components_1.ThemeProvider, { theme: (_a = {}, _a[item_1.itemThemeNamespace] = tokens, _a) },
        React.createElement(item_2.default, tslib_1.__assign({}, props))));
})); });
//# sourceMappingURL=themed-child-item.js.map