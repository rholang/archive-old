import { __assign, __read, __rest, __spread } from "tslib";
/** @jsx jsx */
import SearchIcon from '@atlaskit/icon/glyph/search';
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { useTheme } from '../../theme';
import { IconButton } from '../IconButton';
import { searchInputContainerCSS, searchIconCSS, searchInputCSS, searchInputIconCSS, } from './styles';
var SearchComponent = function (props) {
    var onClick = props.onClick, text = props.text;
    var theme = useTheme();
    var onChange = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        onClick && onClick.apply(void 0, __spread(args));
    };
    var onInputClick = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        onClick && onClick.apply(void 0, __spread(args));
    };
    return (jsx("div", { css: searchInputContainerCSS },
        jsx("div", { css: searchInputIconCSS },
            jsx(SearchIcon, { label: text })),
        jsx("input", { css: searchInputCSS(theme), placeholder: text, onChange: onChange, onClick: onInputClick, value: "" })));
};
export var Search = function (props) {
    var text = props.text, tooltip = props.tooltip, iconButtonProps = __rest(props, ["text", "tooltip"]);
    return (jsx(Fragment, null,
        jsx(SearchComponent, { onClick: iconButtonProps.onClick, text: text }),
        jsx(IconButton, __assign({ css: searchIconCSS, icon: jsx(SearchIcon, { label: tooltip }), tooltip: tooltip }, iconButtonProps))));
};
//# sourceMappingURL=index.js.map