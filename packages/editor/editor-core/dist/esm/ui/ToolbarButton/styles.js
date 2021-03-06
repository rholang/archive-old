import { __assign, __rest } from "tslib";
import * as React from 'react';
import Button from '@atlaskit/button';
export default (function (props) { return (React.createElement(Button, __assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = __rest(_a, ["buttonStyles"]);
        return __assign({ buttonStyles: __assign(__assign({}, buttonStyles), { lineHeight: 0, justifyContent: 'center', '> span': {
                    margin: "0 " + (props.spacing === 'none' ? '0' : '-2px'),
                }, '& + &': {
                    marginLeft: "" + (props.spacing === 'none' ? '4px' : '0px'),
                }, '&[disabled]': {
                    pointerEvents: 'none',
                } }) }, rest);
    } }))); });
//# sourceMappingURL=styles.js.map