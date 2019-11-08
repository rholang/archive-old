"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = require("./text");
var normalize_1 = require("./utils/normalize");
var AbstractTree = /** @class */ (function () {
    function AbstractTree(schema, wikiMarkup) {
        this.schema = schema;
        this.wikiMarkup = wikiMarkup;
    }
    /**
     * Convert reduced macros tree into prosemirror model tree
     */
    AbstractTree.prototype.getProseMirrorModel = function (context) {
        var content = text_1.parseString({
            context: context,
            ignoreTokenTypes: [],
            input: this.wikiMarkup,
            schema: this.schema,
        });
        return this.schema.nodes.doc.createChecked({}, normalize_1.normalizePMNodes(content, this.schema));
    };
    return AbstractTree;
}());
exports.default = AbstractTree;
//# sourceMappingURL=abstract-tree.js.map