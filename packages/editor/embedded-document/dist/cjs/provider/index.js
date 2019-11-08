"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var service_provider_1 = tslib_1.__importDefault(require("./service-provider"));
exports.ServiceProvider = service_provider_1.default;
exports.getProvider = function (_a) {
    var provider = _a.provider, url = _a.url;
    if (provider) {
        return provider;
    }
    if (url) {
        return new service_provider_1.default({ url: url });
    }
    throw new Error('Missing provider');
};
//# sourceMappingURL=index.js.map