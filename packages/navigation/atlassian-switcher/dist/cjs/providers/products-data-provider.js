"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var default_available_products_provider_1 = require("./default-available-products-provider");
var _a = default_available_products_provider_1.createAvailableProductsProvider(), fetchAvailableProducts = _a.fetchMethod, DefaultDataProviderComponent = _a.ProviderComponent;
exports.AvailableProductsProvider = function (_a) {
    var children = _a.children, availableProductsDataProvider = _a.availableProductsDataProvider;
    var CustomDataProviderComponent = availableProductsDataProvider &&
        availableProductsDataProvider.ProviderComponent;
    var DataProviderComponent = CustomDataProviderComponent || DefaultDataProviderComponent;
    return React.createElement(DataProviderComponent, null, children);
};
exports.prefetchAvailableProducts = function (customProvider) {
    if (customProvider) {
        customProvider.fetchMethod({});
        return;
    }
    fetchAvailableProducts({});
};
exports.resetAvailableProducts = function (customProvider) {
    if (customProvider) {
        customProvider.fetchMethod.reset();
        return;
    }
    fetchAvailableProducts.reset();
};
//# sourceMappingURL=products-data-provider.js.map