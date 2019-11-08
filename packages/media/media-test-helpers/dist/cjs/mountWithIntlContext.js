"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_intl_1 = require("react-intl");
var enzyme_1 = require("enzyme");
/* TODO: We are explicitly using the third arg of ReactWrapper to work around the following TS issue which prevents a d.ts from being generated
 * and therefore fails the build:
 * error TS2742: The inferred type of 'mountWithIntlContext' cannot be named without a reference to 'react-transition-group/node_modules/@types/react'. This is likely not portable. A type annotation is necessary.
 * TS is resolving enzyme's usage of react to react-transition-group???
 */
exports.mountWithIntlContext = function (node, reactContext, childContextTypes) {
    var intlProvider = new react_intl_1.IntlProvider({
        locale: 'en',
        messages: {},
    });
    var intl = intlProvider.getChildContext().intl;
    return enzyme_1.mount(node, {
        context: tslib_1.__assign({ intl: intl }, reactContext),
        childContextTypes: tslib_1.__assign({ intl: react_intl_1.intlShape }, childContextTypes),
    });
};
//# sourceMappingURL=mountWithIntlContext.js.map