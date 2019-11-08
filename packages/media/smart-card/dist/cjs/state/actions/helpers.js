"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../client/types");
exports.cardAction = function (type, _a, payload) {
    var url = _a.url;
    return ({
        type: type,
        url: url,
        payload: payload,
    });
};
exports.getByDefinitionId = function (definitionId, store) {
    var urls = Object.keys(store);
    return urls.filter(function (url) {
        var details = store[url].details;
        return details && details.meta.definitionId === definitionId;
    });
};
exports.getUrl = function (store, url) {
    return (store.getState()[url] || {
        status: 'pending',
        lastUpdatedAt: Date.now(),
    });
};
exports.getDefinitionId = function (details) {
    return details && details.meta && details.meta.definitionId;
};
exports.getServices = function (details) {
    return (details && details.meta.auth) || [];
};
exports.hasResolved = function (details) {
    return details && exports.isAccessible(details) && exports.isVisible(details);
};
exports.isAccessible = function (_a) {
    var access = _a.meta.access;
    return access === 'granted';
};
exports.isVisible = function (_a) {
    var visibility = _a.meta.visibility;
    return visibility === 'restricted' || visibility === 'public';
};
exports.getStatus = function (_a) {
    var meta = _a.meta;
    var access = meta.access, visibility = meta.visibility;
    switch (access) {
        case 'forbidden':
            if (visibility === 'not_found') {
                return 'not_found';
            }
            else {
                return 'forbidden';
            }
        case 'unauthorized':
            return 'unauthorized';
        default:
            return 'resolved';
    }
};
exports.getError = function (obj) {
    if (types_1.isServerError(obj)) {
        return obj.name;
    }
    else {
        var data = obj.data;
        var _a = (data || {}).error, error = _a === void 0 ? {} : _a;
        return error.type;
    }
};
//# sourceMappingURL=helpers.js.map