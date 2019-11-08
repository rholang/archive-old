"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var parse_1 = tslib_1.__importDefault(require("./parse"));
var encode_1 = tslib_1.__importDefault(require("./encode"));
var languageMap_1 = require("./languageMap");
exports.CONFLUENCE_LANGUAGE_MAP = languageMap_1.LANGUAGE_MAP;
var ConfluenceTransformer = /** @class */ (function () {
    function ConfluenceTransformer(schema) {
        var _this = this;
        this.parse = function (html) { return parse_1.default(html, _this.schema); };
        this.encode = function (node) { return encode_1.default(node, _this.schema); };
        this.schema = schema;
    }
    return ConfluenceTransformer;
}());
exports.ConfluenceTransformer = ConfluenceTransformer;
//# sourceMappingURL=index.js.map