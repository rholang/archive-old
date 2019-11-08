import { prefetchAll } from './providers/instance-data-providers';
import { prefetchAvailableProducts, } from './providers/products-data-provider';
import prefetchSwitcherBundles from './utils/prefetch-bundles';
export var prefetch = function (props) {
    var cloudId = props.cloudId, product = props.product;
    prefetchSwitcherBundles(product);
    prefetchAvailableProducts(props.availableProductsDataProvider);
    if (cloudId) {
        prefetchAll({ cloudId: cloudId });
    }
};
//# sourceMappingURL=prefetch.js.map