import { createProvider } from './create-data-provider';
var DEFAULT_AVAILABLE_PRODUCTS_ENDPOINT = '/gateway/api/worklens/api/available-products';
export var createAvailableProductsProvider = function (url) {
    if (url === void 0) { url = DEFAULT_AVAILABLE_PRODUCTS_ENDPOINT; }
    return createProvider('availableProducts', url);
};
//# sourceMappingURL=default-available-products-provider.js.map