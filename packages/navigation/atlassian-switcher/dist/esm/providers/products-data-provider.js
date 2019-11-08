import * as React from 'react';
import { createAvailableProductsProvider } from './default-available-products-provider';
var _a = createAvailableProductsProvider(), fetchAvailableProducts = _a.fetchMethod, DefaultDataProviderComponent = _a.ProviderComponent;
export var AvailableProductsProvider = function (_a) {
    var children = _a.children, availableProductsDataProvider = _a.availableProductsDataProvider;
    var CustomDataProviderComponent = availableProductsDataProvider &&
        availableProductsDataProvider.ProviderComponent;
    var DataProviderComponent = CustomDataProviderComponent || DefaultDataProviderComponent;
    return React.createElement(DataProviderComponent, null, children);
};
export var prefetchAvailableProducts = function (customProvider) {
    if (customProvider) {
        customProvider.fetchMethod({});
        return;
    }
    fetchAvailableProducts({});
};
export var resetAvailableProducts = function (customProvider) {
    if (customProvider) {
        customProvider.fetchMethod.reset();
        return;
    }
    fetchAvailableProducts.reset();
};
//# sourceMappingURL=products-data-provider.js.map