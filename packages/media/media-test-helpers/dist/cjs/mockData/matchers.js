"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_matches_1 = tslib_1.__importDefault(require("lodash.matches"));
exports.matchMethod = function (req, data) {
    return data.method ? data.method === req.method() : true;
};
exports.exactMatchUrl = function (req, data) {
    return data.url ? lodash_matches_1.default(data.url)(req.url()) : true;
};
exports.exactMatchHeaders = function (req, data) {
    return data.headers ? lodash_matches_1.default(data.headers)(req.headers()) : true;
};
exports.exactMatchBody = function (req, data) {
    try {
        return data.body
            ? lodash_matches_1.default(JSON.parse(data.body))(JSON.parse(req.body() || '{}'))
            : true;
    }
    catch (e) {
        return false;
    }
};
exports.exactMatch = function (req, data) {
    return [exports.matchMethod, exports.exactMatchUrl, exports.exactMatchHeaders, exports.exactMatchBody].reduce(function (coll, fn) { return coll && fn(req, data); }, true);
};
//# sourceMappingURL=matchers.js.map