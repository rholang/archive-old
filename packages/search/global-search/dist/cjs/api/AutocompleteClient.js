"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_service_support_1 = require("@atlaskit/util-service-support");
var AutocompleteClientImpl = /** @class */ (function () {
    function AutocompleteClientImpl(url, cloudId) {
        this.serviceConfig = { url: url };
        this.cloudId = cloudId;
    }
    AutocompleteClientImpl.prototype.createAutocompleteRequestPromise = function (query) {
        var options = {
            queryParams: {
                cloudId: this.cloudId,
                query: query,
            },
        };
        return util_service_support_1.utils.requestService(this.serviceConfig, options);
    };
    AutocompleteClientImpl.prototype.getAutocompleteSuggestions = function (query) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createAutocompleteRequestPromise(query)];
            });
        });
    };
    return AutocompleteClientImpl;
}());
exports.AutocompleteClientImpl = AutocompleteClientImpl;
//# sourceMappingURL=AutocompleteClient.js.map