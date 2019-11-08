"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var error_boundary_1 = tslib_1.__importDefault(require("./error-boundary"));
var types_1 = require("../types");
var intl_provider_1 = tslib_1.__importDefault(require("./intl-provider"));
var messages_1 = tslib_1.__importDefault(require("../utils/messages"));
var analytics_1 = require("../utils/analytics");
var package_context_1 = tslib_1.__importDefault(require("../utils/package-context"));
var map_props_to_features_1 = tslib_1.__importDefault(require("../utils/map-props-to-features"));
var loaders_1 = require("./loaders");
var getAnalyticsContext = function (attributes) { return (tslib_1.__assign(tslib_1.__assign({ source: analytics_1.SWITCHER_SOURCE, componentName: analytics_1.SWITCHER_COMPONENT }, package_context_1.default), analytics_1.analyticsAttributes(attributes))); };
var AtlassianSwitcher = function (props) {
    var product = props.product;
    var Switcher;
    switch (product) {
        case types_1.Product.JIRA:
            Switcher = loaders_1.JiraSwitcherLoader;
            break;
        case types_1.Product.CONFLUENCE:
            Switcher = loaders_1.ConfluenceSwitcherLoader;
            break;
        default:
            Switcher = loaders_1.GenericSwitcherLoader;
    }
    var features = map_props_to_features_1.default(props);
    return (React.createElement(intl_provider_1.default, null,
        React.createElement(analytics_1.NavigationAnalyticsContext, { data: getAnalyticsContext({ featureFlags: features }) },
            React.createElement(error_boundary_1.default, { messages: messages_1.default },
                React.createElement(Switcher, tslib_1.__assign({}, props, { messages: messages_1.default, features: features }))))));
};
exports.default = AtlassianSwitcher;
//# sourceMappingURL=atlassian-switcher.js.map