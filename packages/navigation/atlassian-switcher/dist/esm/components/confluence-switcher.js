import { __assign, __rest } from "tslib";
import * as React from 'react';
import Switcher from '../primitives/themed-switcher';
import { CustomLinksProvider, MANAGE_HREF, } from '../providers/confluence-data-providers';
import CommonDataProvider from '../providers/common-data-provider';
import { mapResultsToSwitcherProps } from '../utils/map-results-to-switcher-props';
import { Product, } from '../types';
import { AvailableProductsProvider } from '../providers/products-data-provider';
export default (function (props) { return (React.createElement(CustomLinksProvider, { disableCustomLinks: props.features.disableCustomLinks }, function (customLinks) { return (React.createElement(AvailableProductsProvider, null, function (availableProducts) { return (React.createElement(CommonDataProvider, { cloudId: props.cloudId, disableRecentContainers: props.features.disableRecentContainers }, function (providerResults) {
    var _a = mapResultsToSwitcherProps(props.cloudId, __assign({ customLinks: customLinks }, providerResults), props.features, availableProducts, Product.CONFLUENCE), showManageLink = _a.showManageLink, switcherLinks = __rest(_a, ["showManageLink"]);
    return (React.createElement(Switcher, __assign({}, props, switcherLinks, { manageLink: showManageLink ? MANAGE_HREF : undefined })));
})); })); })); });
//# sourceMappingURL=confluence-switcher.js.map