"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var as_data_provider_1 = tslib_1.__importDefault(require("./as-data-provider"));
var fetch_1 = require("../utils/fetch");
var with_cached_1 = require("../utils/with-cached");
exports.createProvider = function (name, url) {
    var fetchMethod = with_cached_1.withCached(function (param) { return fetch_1.fetchJson(url); });
    return {
        fetchMethod: fetchMethod,
        ProviderComponent: as_data_provider_1.default(name, fetchMethod, fetchMethod.cached),
    };
};
//# sourceMappingURL=create-data-provider.js.map