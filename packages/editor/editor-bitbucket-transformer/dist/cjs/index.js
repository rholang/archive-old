"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_model_1 = require("prosemirror-model");
var serializer_1 = require("./serializer");
var util_1 = require("./util");
var BitbucketTransformer = /** @class */ (function () {
    function BitbucketTransformer(schema, options) {
        if (options === void 0) { options = {}; }
        this.serializer = new serializer_1.MarkdownSerializer(serializer_1.nodes, serializer_1.marks);
        this.schema = schema;
        this.options = options;
    }
    BitbucketTransformer.prototype.encode = function (node) {
        return this.serializer.serialize(node);
    };
    BitbucketTransformer.prototype.parse = function (html) {
        var dom = this.buildDOMTree(html);
        return prosemirror_model_1.DOMParser.fromSchema(this.schema).parse(dom);
    };
    BitbucketTransformer.prototype.buildDOMTree = function (html) {
        return util_1.transformHtml(html, this.options);
    };
    return BitbucketTransformer;
}());
exports.BitbucketTransformer = BitbucketTransformer;
//# sourceMappingURL=index.js.map