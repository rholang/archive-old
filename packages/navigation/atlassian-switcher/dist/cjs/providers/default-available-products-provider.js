"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_data_provider_1 = require("./create-data-provider");
var DEFAULT_AVAILABLE_PRODUCTS_ENDPOINT = '/gateway/api/worklens/api/available-products';
exports.createAvailableProductsProvider = function (url) {
    if (url === void 0) { url = DEFAULT_AVAILABLE_PRODUCTS_ENDPOINT; }
    return create_data_provider_1.createProvider('availableProducts', url);
};
//# sourceMappingURL=default-available-products-provider.js.map