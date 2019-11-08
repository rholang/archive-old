import { __assign } from "tslib";
import React from 'react';
import { withTheme, ThemeProvider } from 'styled-components';
import CodeBlock from './components/CodeBlock';
var CodeBlockWithTheme = withTheme(CodeBlock);
var emptyTheme = {};
export default function (props) {
    return (React.createElement(ThemeProvider, { theme: emptyTheme },
        React.createElement(CodeBlockWithTheme, __assign({}, props))));
}
//# sourceMappingURL=ThemedCodeBlock.js.map