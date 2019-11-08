export var addQueryParam = function (url, queryName, queryValue) {
    if (!url || !queryName) {
        return url;
    }
    var urlSplit = url.split('?');
    var queryString = urlSplit.length === 2 ? urlSplit[1] : null;
    var urlWithoutQuery = urlSplit.length > 0 ? urlSplit[0] : '';
    var encodedQueryName = encodeURIComponent(queryName);
    var newQueryItem = encodedQueryName + "=" + encodeURIComponent(queryValue || '');
    // If url has no existing query strings
    if (!queryString) {
        return url + "?" + newQueryItem;
    }
    var existingQueries = queryString.split('&');
    var newQueryString = existingQueries
        .filter(function (query) {
        // If the query already exists we will replace it with the new one so we filter it out here
        return !query.startsWith(encodedQueryName + "=");
    })
        .concat(newQueryItem)
        .join('&');
    return urlWithoutQuery + "?" + newQueryString;
};
//# sourceMappingURL=url-utils.js.map