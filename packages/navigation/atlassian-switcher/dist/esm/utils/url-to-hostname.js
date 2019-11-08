// ie11-friendly way to extract a hostname from a string URL.
export function urlToHostname(url) {
    var lowerUrl = (url || '').toLowerCase();
    // If we don't have a protocol, we can't assume that what we have is a hostname instead of a path.
    if (!/^[a-z]+:\/\//.test(lowerUrl)) {
        return 'invalid';
    }
    var withoutProtocol = lowerUrl.replace(/^(.*):\/\//, '');
    // Remove port, fragment, path, query string
    return withoutProtocol.replace(/[:\/?#](.*)$/, '');
}
//# sourceMappingURL=url-to-hostname.js.map