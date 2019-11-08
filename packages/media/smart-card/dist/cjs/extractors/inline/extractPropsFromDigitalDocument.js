"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var _16_1 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/generic/16"));
var extractPropsFromDocument_1 = require("./extractPropsFromDocument");
var utils_1 = require("../../utils");
exports.buildIcon = function (json) {
    if (json.fileFormat) {
        return { icon: utils_1.getIconForFileType(json.fileFormat) };
    }
    return { icon: React.createElement(_16_1.default, { label: json.name }) };
};
exports.extractInlineViewPropsFromDigitalDocument = function (json) {
    var props = extractPropsFromDocument_1.extractInlineViewPropsFromDocument(json);
    return tslib_1.__assign(tslib_1.__assign({}, props), exports.buildIcon(json));
};
//# sourceMappingURL=extractPropsFromDigitalDocument.js.map