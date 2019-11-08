"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var instance_data_providers_1 = require("./providers/instance-data-providers");
var products_data_provider_1 = require("./providers/products-data-provider");
var prefetch_bundles_1 = tslib_1.__importDefault(require("./utils/prefetch-bundles"));
exports.prefetch = function (props) {
    var cloudId = props.cloudId, product = props.product;
    prefetch_bundles_1.default(product);
    products_data_provider_1.prefetchAvailableProducts(props.availableProductsDataProvider);
    if (cloudId) {
        instance_data_providers_1.prefetchAll({ cloudId: cloudId });
    }
};
//# sourceMappingURL=prefetch.js.map