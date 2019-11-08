import memoizeOne from 'memoize-one';
export var getAutocompleteText = memoizeOne(function (query, autocompleteSuggestions) {
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