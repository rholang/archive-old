import { __assign, __rest } from "tslib";
import * as React from 'react';
import Button from '@atlaskit/button';
import * as colors from '@atlaskit/theme/colors';
var buttonTheme = {
    toolbar: {
        background: {
            default: { light: 'transparent' },
            hover: { light: colors.DN60 },
            active: { light: colors.B75 },
        },
        boxShadowColor: {
            focus: { light: colors.B75 },
        },
        color: {
            default: { light: colors.DN400 },
            hover: { light: colors.DN400 },
            active: { light: colors.B400 },
            disabled: { light: colors.DN100 },
        },
    },
    primary: {
        background: {
            default: { light: colors.B100 },
            hover: { light: colors.B75 },
            active: { light: colors.B200 },
            disabled: { light: colors.DN70 },
        },
        boxShadowColor: {
            focus: { light: colors.B75 },
        },
        color: {
            default: { light: colors.DN30 },
        },
    },
};
function extract(newTheme, _a) {
    var appearance = _a.appearance, state = _a.state, mode = _a.mode;
    if (!newTheme[appearance]) {
        return;
    }
    var root = newTheme[appearance];
    return Object.keys(root).reduce(function (acc, val) {
        var node = root;
        [val, state, mode].forEach(function (item) {
            if (!node[item]) {
                return;
            }
            if (typeof node[item] !== 'object') {
                acc[val] = node[item];
                return;
            }
            node = node[item];
            return;
        });
        return acc;
    }, {});
}
export default (function (props) { return (React.createElement(Button, __assign({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = __rest(_a, ["buttonStyles"]);
        return __assign({ buttonStyles: __assign(__assign({}, buttonStyles), extract(buttonTheme, themeProps)) }, rest);
    } }))); });
//# sourceMappingURL=MediaButton.js.map