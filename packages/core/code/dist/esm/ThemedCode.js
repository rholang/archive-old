import { __assign } from "tslib";
import React from 'react';
import { withTheme, ThemeProvider } from 'styled-components';
import Code from './components/Code';
var CodeWithTheme = withTheme(Code);
var emptyTheme = {};
export default function (props) {
    return (React.createElement(ThemeProvider, { theme: emptyTheme },
        React.createElement(CodeWithTheme, __assign({}, props))));
}
//# sourceMappingURL=ThemedCode.js.map