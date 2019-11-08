import { __assign, __rest } from "tslib";
import * as React from 'react';
import Button from '@atlaskit/button';
export default (function (props) { return (React.createElement(Button, __assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = __rest(_a, ["buttonStyles"]);
        return __assign({ buttonStyles: __assign(__assign({}, buttonStyles), { padding: 0, '& > span > span:first-of-type': {
                    margin: '0',
                } }) }, rest);
    } }))); });
//# sourceMappingURL=styles.js.map