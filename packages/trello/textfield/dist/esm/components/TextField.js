import { __assign } from "tslib";
import * as React from 'react';
import Textfield from '@atlaskit/textfield';
import nachosTFTheme from '../theme';
export function TextField(textFieldProps) {
    var nachosTheme = function (adgTheme, themeProps) { return ({
        container: __assign(__assign({}, nachosTFTheme(adgTheme, themeProps).container), (textFieldProps.theme && textFieldProps.theme(themeProps).container)),
        input: __assign(__assign({}, nachosTFTheme(adgTheme, themeProps).input), (textFieldProps.theme && textFieldProps.theme(themeProps).input)),
    }); };
    return React.createElement(Textfield, __assign({}, textFieldProps, { theme: nachosTheme }));
}
TextField.defaultProps = {
    appearance: 'default',
};
export default TextField;
//# sourceMappingURL=TextField.js.map