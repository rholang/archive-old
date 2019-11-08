"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var document_filled_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/document-filled"));
var constants_1 = require("./constants");
var extractPropsFromDocument_1 = require("./extractPropsFromDocument");
exports.buildTemplateIcon = function (json) {
    if (json.generator && json.generator['@id'] === constants_1.CONFLUENCE_GENERATOR_ID) {
        return { icon: React.createElement(document_filled_1.default, { size: "small", label: "Confluence" }) };
    }
    return {};
};
function extractInlineViewPropsFromTemplate(json) {
    var props = extractPropsFromDocument_1.extractInlineViewPropsFromDocument(json);
    return tslib_1.__assign(tslib_1.__assign({}, exports.buildTemplateIcon(json)), props);
}
exports.extractInlineViewPropsFromTemplate = extractInlineViewPropsFromTemplate;
//# sourceMappingURL=extractPropsFromTemplate.js.map