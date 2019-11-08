"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var _16_1 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/page/16"));
var extractPropsFromDocument_1 = require("./extractPropsFromDocument");
var constants_1 = require("./constants");
exports.buildTextDocumentIcon = function (json) {
    if (json.generator && json.generator['@id'] === constants_1.CONFLUENCE_GENERATOR_ID) {
        return { icon: React.createElement(_16_1.default, { label: "Confluence" }) };
    }
    return {};
};
function extractInlineViewPropsFromTextDocument(json) {
    var props = extractPropsFromDocument_1.extractInlineViewPropsFromDocument(json);
    return tslib_1.__assign(tslib_1.__assign({}, props), exports.buildTextDocumentIcon(json));
}
exports.extractInlineViewPropsFromTextDocument = extractInlineViewPropsFromTextDocument;
//# sourceMappingURL=extractPropsFromTextDocument.js.map