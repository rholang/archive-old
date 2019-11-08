"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var extractPropsFromObject_1 = require("./extractPropsFromObject");
// This extractor doesn't currently recognise any subclass fields
// - to be added in the near future.
exports.extractInlineViewPropsFromDocument = function (json) { return extractPropsFromObject_1.extractInlineViewPropsFromObject(json); };
//# sourceMappingURL=extractPropsFromDocument.js.map