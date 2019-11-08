"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
var nodes_1 = require("./nodes");
var TextSerializer = /** @class */ (function () {
    function TextSerializer(schema) {
        this.schema = schema;
        this.schema = schema;
    }
    TextSerializer.prototype.serializeFragment = function (fragment) {
        var _this = this;
        var result = [];
        fragment.forEach(function (n) {
            result.push(nodes_1.reduce(n, _this.schema));
        });
        return result.join('\n').replace(/\n+/g, '\n');
    };
    TextSerializer.fromSchema = function (schema) {
        if (schema === void 0) { schema = adf_schema_1.defaultSchema; }
        return new TextSerializer(schema);
    };
    return TextSerializer;
}());
exports.default = TextSerializer;
//# sourceMappingURL=index.js.map