"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var extractPropsFromDocument_1 = require("./extractPropsFromDocument");
var _24_1 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/document/24"));
var _24_2 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/google-sheet/24"));
var _24_3 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/word-document/24"));
function extractPropsFromTextDocument(json) {
    var props = extractPropsFromDocument_1.extractPropsFromDocument(json);
    // We use vendor-specific variations of the icons, whenever possible
    if (json.fileFormat === 'application/vnd.google-apps.document') {
        props.icon = (React.createElement(_24_2.default, { label: json.provider ? json.provider.name : 'Google Doc' }));
    }
    else if (json.fileFormat === 'application/vnd.ms-word') {
        props.icon = (React.createElement(_24_3.default, { label: json.provider ? json.provider.name : 'MS Word' }));
    }
    else {
        props.icon = (React.createElement(_24_1.default, { label: json.provider ? json.provider.name : 'Text document' }));
    }
    return props;
}
exports.extractPropsFromTextDocument = extractPropsFromTextDocument;
//# sourceMappingURL=extractPropsFromTextDocument.js.map