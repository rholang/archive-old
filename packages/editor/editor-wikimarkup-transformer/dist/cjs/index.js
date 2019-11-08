"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adf_schema_1 = require("@atlaskit/adf-schema");
var encoder_1 = require("./encoder");
var abstract_tree_1 = tslib_1.__importDefault(require("./parser/abstract-tree"));
var issue_key_1 = require("./parser/tokenize/issue-key");
var WikiMarkupTransformer = /** @class */ (function () {
    function WikiMarkupTransformer(schema) {
        if (schema === void 0) { schema = adf_schema_1.defaultSchema; }
        this.schema = schema;
    }
    WikiMarkupTransformer.prototype.encode = function (node) {
        return encoder_1.encode(node);
    };
    WikiMarkupTransformer.prototype.parse = function (wikiMarkup, context) {
        var tree = new abstract_tree_1.default(this.schema, wikiMarkup);
        return tree.getProseMirrorModel(this.buildContext(context));
    };
    WikiMarkupTransformer.prototype.buildContext = function (context) {
        return context
            ? tslib_1.__assign(tslib_1.__assign({}, context), { issueKeyRegex: issue_key_1.buildIssueKeyRegex(context.inlineCardConversion) }) : {};
    };
    return WikiMarkupTransformer;
}());
exports.WikiMarkupTransformer = WikiMarkupTransformer;
exports.default = WikiMarkupTransformer;
//# sourceMappingURL=index.js.map