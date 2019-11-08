"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var themed_switcher_1 = tslib_1.__importDefault(require("../primitives/themed-switcher"));
var confluence_data_providers_1 = require("../providers/confluence-data-providers");
var common_data_provider_1 = tslib_1.__importDefault(require("../providers/common-data-provider"));
var map_results_to_switcher_props_1 = require("../utils/map-results-to-switcher-props");
var types_1 = require("../types");
var products_data_provider_1 = require("../providers/products-data-provider");
exports.default = (function (props) { return (React.createElement(confluence_data_providers_1.CustomLinksProvider, { disableCustomLinks: props.features.disableCustomLinks }, function (customLinks) { return (React.createElement(products_data_provider_1.AvailableProductsProvider, null, function (availableProducts) { return (React.createElement(common_data_provider_1.default, { cloudId: props.cloudId, disableRecentContainers: props.features.disableRecentContainers }, function (providerResults) {
    var _a = map_results_to_switcher_props_1.mapResultsToSwitcherProps(props.cloudId, tslib_1.__assign({ customLinks: customLinks }, providerResults), props.features, availableProducts, types_1.Product.CONFLUENCE), showManageLink = _a.showManageLink, switcherLinks = tslib_1.__rest(_a, ["showManageLink"]);
    return (React.createElement(themed_switcher_1.default, tslib_1.__assign({}, props, switcherLinks, { manageLink: showManageLink ? confluence_data_providers_1.MANAGE_HREF : undefined })));
})); })); })); });
//# sourceMappingURL=confluence-switcher.js.map