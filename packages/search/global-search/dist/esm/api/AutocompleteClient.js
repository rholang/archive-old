import { __awaiter, __generator } from "tslib";
import { utils, } from '@atlaskit/util-service-support';
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
        return utils.requestService(this.serviceConfig, options);
    };
    AutocompleteClientImpl.prototype.getAutocompleteSuggestions = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.createAutocompleteRequestPromise(query)];
            });
        });
    };
    return AutocompleteClientImpl;
}());
export { AutocompleteClientImpl };
//# sourceMappingURL=AutocompleteClient.js.map