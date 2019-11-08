"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var themed_switcher_1 = tslib_1.__importDefault(require("../primitives/themed-switcher"));
var common_data_provider_1 = tslib_1.__importDefault(require("../providers/common-data-provider"));
var map_results_to_switcher_props_1 = require("../utils/map-results-to-switcher-props");
var products_data_provider_1 = require("../providers/products-data-provider");
exports.default = (function (props) { return (React.createElement(products_data_provider_1.AvailableProductsProvider, { availableProductsDataProvider: props.availableProductsDataProvider }, function (availableProducts) { return (React.createElement(common_data_provider_1.default, { cloudId: props.cloudId, disableRecentContainers: props.features.disableRecentContainers }, function (providerResults) {
    var switcherLinks = map_results_to_switcher_props_1.mapResultsToSwitcherProps(props.cloudId, providerResults, props.features, availableProducts, props.product);
    return React.createElement(themed_switcher_1.default, tslib_1.__assign({}, props, switcherLinks));
})); })); });
//# sourceMappingURL=generic-switcher.js.map