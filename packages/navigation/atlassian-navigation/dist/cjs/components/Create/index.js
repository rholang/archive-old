"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var react_1 = require("react");
var core_1 = require("@emotion/core");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var add_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/add"));
var theme_1 = require("../../theme");
var IconButton_1 = require("../IconButton");
var styles_1 = require("./styles");
exports.Create = function (_a) {
    var onClick = _a.onClick, text = _a.text;
    var theme = theme_1.useTheme();
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(button_1.default, { css: styles_1.createButtonCSS, onClick: onClick, theme: styles_1.getCreateButtonTheme(theme) }, text),
        core_1.jsx(IconButton_1.IconButton, { css: styles_1.createIconCSS, icon: core_1.jsx(add_1.default, { label: text }), onClick: onClick, tooltip: text })));
};
//# sourceMappingURL=index.js.map