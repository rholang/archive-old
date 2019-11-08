import { Product } from '../types';
import { loadAtlassianSwitcher, loadJiraSwitcher, loadConfluenceSwitcher, loadGenericSwitcher, } from '../components/loaders';
export default (function (product) {
    loadAtlassianSwitcher();
    if (product === Product.JIRA) {
        return loadJiraSwitcher();
    }
    if (product === Product.CONFLUENCE) {
        return loadConfluenceSwitcher();
    }
    return loadGenericSwitcher();
});
//# sourceMappingURL=prefetch-bundles.js.map