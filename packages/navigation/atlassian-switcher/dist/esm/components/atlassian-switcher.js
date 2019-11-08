import { __assign } from "tslib";
import * as React from 'react';
import ErrorBoundary from './error-boundary';
import { Product } from '../types';
import IntlProvider from './intl-provider';
import messages from '../utils/messages';
import { analyticsAttributes, NavigationAnalyticsContext, SWITCHER_COMPONENT, SWITCHER_SOURCE, } from '../utils/analytics';
import packageContext from '../utils/package-context';
import mapPropsToFeatures from '../utils/map-props-to-features';
import { JiraSwitcherLoader, ConfluenceSwitcherLoader, GenericSwitcherLoader, } from './loaders';
var getAnalyticsContext = function (attributes) { return (__assign(__assign({ source: SWITCHER_SOURCE, componentName: SWITCHER_COMPONENT }, packageContext), analyticsAttributes(attributes))); };
var AtlassianSwitcher = function (props) {
    var product = props.product;
    var Switcher;
    switch (product) {
        case Product.JIRA:
            Switcher = JiraSwitcherLoader;
            break;
        case Product.CONFLUENCE:
            Switcher = ConfluenceSwitcherLoader;
            break;
        default:
            Switcher = GenericSwitcherLoader;
    }
    var features = mapPropsToFeatures(props);
    return (React.createElement(IntlProvider, null,
        React.createElement(NavigationAnalyticsContext, { data: getAnalyticsContext({ featureFlags: features }) },
            React.createElement(ErrorBoundary, { messages: messages },
                React.createElement(Switcher, __assign({}, props, { messages: messages, features: features }))))));
};
export default AtlassianSwitcher;
//# sourceMappingURL=atlassian-switcher.js.map