"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var loaders_1 = require("../components/loaders");
exports.default = (function (product) {
    loaders_1.loadAtlassianSwitcher();
    if (product === types_1.Product.JIRA) {
        return loaders_1.loadJiraSwitcher();
    }
    if (product === types_1.Product.CONFLUENCE) {
        return loaders_1.loadConfluenceSwitcher();
    }
    return loaders_1.loadGenericSwitcher();
});
//# sourceMappingURL=prefetch-bundles.js.map