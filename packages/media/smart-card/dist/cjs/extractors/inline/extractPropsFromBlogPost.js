"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var _16_1 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/blog/16"));
var constants_1 = require("./constants");
var extractPropsFromTextDocument_1 = require("./extractPropsFromTextDocument");
exports.buildBlogPostIcon = function (json) {
    if (json.generator && json.generator['@id'] === constants_1.CONFLUENCE_GENERATOR_ID) {
        return { icon: React.createElement(_16_1.default, { label: "Confluence" }) };
    }
    return {};
};
function extractInlineViewPropsFromBlogPost(json) {
    var props = extractPropsFromTextDocument_1.extractInlineViewPropsFromTextDocument(json);
    return tslib_1.__assign(tslib_1.__assign({}, props), exports.buildBlogPostIcon(json));
}
exports.extractInlineViewPropsFromBlogPost = extractInlineViewPropsFromBlogPost;
//# sourceMappingURL=extractPropsFromBlogPost.js.map