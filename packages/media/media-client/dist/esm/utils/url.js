import { __assign } from "tslib";
import URLSearchParams from 'url-search-params';
var mediaBlobUrlIdentifier = 'media-blob-url';
export var isMediaBlobUrl = function (url) {
    return url.indexOf(mediaBlobUrlIdentifier + "=true") > -1;
};
var getNumberFromParams = function (params, name) {
    var value = params.get(name);
    return typeof value === 'string' && !isNaN(parseInt(value))
        ? parseInt(value)
        : undefined;
};
var getStringFromParams = function (params, name) {
    var value = params.get(name);
    if (!value) {
        return;
    }
    return decodeURIComponent(value);
};
export var getAttrsFromUrl = function (blobUrl) {
    var url = new URL(blobUrl);
    var hash = url.hash.replace('#', '');
    var params = new URLSearchParams(hash);
    var id = params.get('id');
    var contextId = params.get('contextId');
    var collection = params.get('collection');
    // check if we have the required params
    if (!id || !contextId || !collection) {
        return;
    }
    return {
        id: id,
        contextId: contextId,
        collection: collection,
        alt: getStringFromParams(params, 'alt'),
        height: getNumberFromParams(params, 'height'),
        width: getNumberFromParams(params, 'width'),
        size: getNumberFromParams(params, 'size'),
        name: getStringFromParams(params, 'name'),
        mimeType: getStringFromParams(params, 'mimeType'),
    };
};
export var objectToQueryString = function (json) {
    return Object.keys(json)
        .filter(function (attrName) { return typeof json[attrName] !== 'undefined'; })
        .map(function (key) {
        var value = json[key];
        if (typeof value === 'undefined') {
            return;
        }
        return encodeURIComponent(key) + "=" + encodeURIComponent(value.toString());
    })
        .join('&');
};
export var addFileAttrsToUrl = function (url, fileAttrs) {
    var _a;
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
        return url;
    }
    var mediaIdentifierAttr = (_a = {},
        _a[mediaBlobUrlIdentifier] = 'true',
        _a);
    var mergedAttrs = __assign(__assign({}, mediaIdentifierAttr), fileAttrs);
    var queryAttrs = objectToQueryString(mergedAttrs);
    // we can't use '?' separator for blob url params
    return url + "#" + queryAttrs;
};
//# sourceMappingURL=url.js.map