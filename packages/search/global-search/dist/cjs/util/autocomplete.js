"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
exports.getAutocompleteText = memoize_one_1.default(function (query, autocompleteSuggestions) {
    if (!autocompleteSuggestions || query.length === 0) {
        return undefined;
    }
    if (autocompleteSuggestions.length === 0) {
        return query;
    }
    var lowerCaseQuery = query.toLowerCase();
    var match = autocompleteSuggestions.find(function (suggestion) {
        return suggestion.toLowerCase().startsWith(lowerCaseQuery);
    });
    if (!match) {
        return query;
    }
    return "" + query + match.slice(query.length);
});
//# sourceMappingURL=autocomplete.js.map