"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var extractPropsFromDocument_1 = require("./extractPropsFromDocument");
var _24_1 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/spreadsheet/24"));
var _24_2 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/google-sheet/24"));
var _24_3 = tslib_1.__importDefault(require("@atlaskit/icon-file-type/glyph/excel-spreadsheet/24"));
function extractPropsFromSpreadsheet(json) {
    var props = extractPropsFromDocument_1.extractPropsFromDocument(json);
    // We use vendor-specific variations of the icons, whenever possible
    if (json.fileFormat === 'application/vnd.google-apps.spreadsheet') {
        props.icon = (React.createElement(_24_2.default, { label: json.provider ? json.provider.name : 'Google Sheet' }));
    }
    else if (json.fileFormat === 'application/vnd.ms-excel') {
        props.icon = (React.createElement(_24_3.default, { label: json.provider ? json.provider.name : 'MS Excel' }));
    }
    else {
        props.icon = (React.createElement(_24_1.default, { label: json.provider ? json.provider.name : 'Spreadsheet' }));
    }
    return props;
}
exports.extractPropsFromSpreadsheet = extractPropsFromSpreadsheet;
//# sourceMappingURL=extractPropsFromSpreadsheet.js.map