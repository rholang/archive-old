import { __assign } from "tslib";
import * as React from 'react';
import Switcher from '../primitives/themed-switcher';
import CommonDataProvider from '../providers/common-data-provider';
import { mapResultsToSwitcherProps } from '../utils/map-results-to-switcher-props';
import { AvailableProductsProvider, } from '../providers/products-data-provider';
export default (function (props) { return (React.createElement(AvailableProductsProvider, { availableProductsDataProvider: props.availableProductsDataProvider }, function (availableProducts) { return (React.createElement(CommonDataProvider, { cloudId: props.cloudId, disableRecentContainers: props.features.disableRecentContainers }, function (providerResults) {
    var switcherLinks = mapResultsToSwitcherProps(props.cloudId, providerResults, props.features, availableProducts, props.product);
    return React.createElement(Switcher, __assign({}, props, switcherLinks));
})); })); });
//# sourceMappingURL=generic-switcher.js.map