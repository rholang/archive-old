"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var querystring_1 = require("querystring");
function parseAttrs(str, sep) {
    if (sep === void 0) { sep = '|'; }
    var output = querystring_1.parse(str, sep);
    // take only first value of the same keys
    Object.keys(output).forEach(function (key) {
        if (Array.isArray(output[key])) {
            output[key] = output[key][0];
        }
    });
    return output;
}
exports.parseAttrs = parseAttrs;
//# sourceMappingURL=attrs.js.map