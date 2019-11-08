"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var extractPropsFromObject_1 = require("./extractPropsFromObject");
var extractPropsFromSourceCodeCommon_1 = require("./extractPropsFromSourceCodeCommon");
var _16_1 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/commit/16"));
exports.buildIcon = function (json) {
    var name = json.name;
    return { icon: React.createElement(_16_1.default, { label: name }) };
};
exports.extractInlineViewPropsFromSourceCodeCommit = function (json) {
    var props = extractPropsFromObject_1.extractInlineViewPropsFromObject(json);
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, props), exports.buildIcon(json)), extractPropsFromSourceCodeCommon_1.buildName(props, json));
};
//# sourceMappingURL=extractPropsFromSourceCodeCommit.js.map