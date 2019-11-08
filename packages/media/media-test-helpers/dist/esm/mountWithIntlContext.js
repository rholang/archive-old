import { __assign } from "tslib";
import { IntlProvider, intlShape } from 'react-intl';
import { mount } from 'enzyme';
/* TODO: We are explicitly using the third arg of ReactWrapper to work around the following TS issue which prevents a d.ts from being generated
 * and therefore fails the build:
 * error TS2742: The inferred type of 'mountWithIntlContext' cannot be named without a reference to 'react-transition-group/node_modules/@types/react'. This is likely not portable. A type annotation is necessary.
 * TS is resolving enzyme's usage of react to react-transition-group???
 */
export var mountWithIntlContext = function (node, reactContext, childContextTypes) {
    var intlProvider = new IntlProvider({
        locale: 'en',
        messages: {},
    });
    var intl = intlProvider.getChildContext().intl;
    return mount(node, {
        context: __assign({ intl: intl }, reactContext),
        childContextTypes: __assign({ intl: intlShape }, childContextTypes),
    });
};
//# sourceMappingURL=mountWithIntlContext.js.map