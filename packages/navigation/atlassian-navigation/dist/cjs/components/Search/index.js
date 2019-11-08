"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var search_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/search"));
var core_1 = require("@emotion/core");
var react_1 = require("react");
var theme_1 = require("../../theme");
var IconButton_1 = require("../IconButton");
var styles_1 = require("./styles");
var SearchComponent = function (props) {
    var onClick = props.onClick, text = props.text;
    var theme = theme_1.useTheme();
    var onChange = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        onClick && onClick.apply(void 0, tslib_1.__spread(args));
    };
    var onInputClick = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        onClick && onClick.apply(void 0, tslib_1.__spread(args));
    };
    return (core_1.jsx("div", { css: styles_1.searchInputContainerCSS },
        core_1.jsx("div", { css: styles_1.searchInputIconCSS },
            core_1.jsx(search_1.default, { label: text })),
        core_1.jsx("input", { css: styles_1.searchInputCSS(theme), placeholder: text, onChange: onChange, onClick: onInputClick, value: "" })));
};
exports.Search = function (props) {
    var text = props.text, tooltip = props.tooltip, iconButtonProps = tslib_1.__rest(props, ["text", "tooltip"]);
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(SearchComponent, { onClick: iconButtonProps.onClick, text: text }),
        core_1.jsx(IconButton_1.IconButton, tslib_1.__assign({ css: styles_1.searchIconCSS, icon: core_1.jsx(search_1.default, { label: tooltip }), tooltip: tooltip }, iconButtonProps))));
};
//# sourceMappingURL=index.js.map