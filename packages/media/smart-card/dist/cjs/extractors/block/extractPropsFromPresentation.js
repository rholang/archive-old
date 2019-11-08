"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var extractPropsFromDocument_1 = require("./extractPropsFromDocument");
var _24_1 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/presentation/24"));
var _24_2 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/powerpoint-presentation/24"));
var _24_3 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/google-slide/24"));
function extractPropsFromPresentation(json) {
    var props = extractPropsFromDocument_1.extractPropsFromDocument(json);
    // We use vendor-specific variations of the icons, whenever possible
    if (json.fileFormat === 'application/vnd.google-apps.presentation') {
        props.icon = (React.createElement(_24_3.default, { label: json.provider ? json.provider.name : 'Google Slides' }));
    }
    else if (json.fileFormat === 'application/vnd.mspowerpoint') {
        props.icon = (React.createElement(_24_2.default, { label: json.provider ? json.provider.name : 'PowerPoint Presentation' }));
    }
    else {
        props.icon = (React.createElement(_24_1.default, { label: json.provider ? json.provider.name : 'Presentation' }));
    }
    return props;
}
exports.extractPropsFromPresentation = extractPropsFromPresentation;
//# sourceMappingURL=extractPropsFromPresentation.js.map