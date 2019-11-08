"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_loadable_1 = tslib_1.__importDefault(require("react-loadable"));
exports.isCardWithData = function (props) { return !!props.data; };
exports.isSpecialEvent = function (evt) {
    return evt.isDefaultPrevented() &&
        (exports.isIframe() || exports.isSpecialKey(evt) || exports.isSpecialClick(evt));
};
exports.isIframe = function () { return window.parent !== parent; };
exports.isSpecialKey = function (event) {
    return event.metaKey || event.ctrlKey;
};
exports.isSpecialClick = function (event) { return event.button === 1; };
exports.getCollapsedIcon = function (details) {
    var jsonLdData = (details && details.data) || {};
    return (jsonLdData &&
        jsonLdData.generator &&
        jsonLdData.generator.icon &&
        jsonLdData.generator.icon.url);
};
exports.getIconForFileType = function (fileMimeType) {
    var icon = typeToIcon[fileMimeType.toLowerCase()];
    if (!icon) {
        return;
    }
    var _a = tslib_1.__read(icon, 2), label = _a[0], importCb = _a[1];
    if (!importCb) {
        return;
    }
    var Icon = react_loadable_1.default({
        loader: function () { return importCb().then(function (module) { return module.default; }); },
        loading: function () { return null; },
    }); // because we're using dynamic loading here, TS will not be able to infer the type
    return React.createElement(Icon, { label: label });
};
exports.getLabelForFileType = function (fileMimeType) {
    var icon = typeToIcon[fileMimeType.toLowerCase()];
    if (!icon) {
        return;
    }
    var _a = tslib_1.__read(icon, 1), label = _a[0];
    return label;
};
var typeToIcon = {
    'text/plain': [
        'Document',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/document/16')); }); },
    ],
    'application/vnd.oasis.opendocument.text': [
        'Document',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/document/16')); }); },
    ],
    'application/vnd.apple.pages': [
        'Document',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/document/16')); }); },
    ],
    'application/vnd.google-apps.document': [
        'Google Doc',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/google-doc/16')); }); },
    ],
    'application/vnd.ms-word': [
        'Word document',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/word-document/16')); }); },
    ],
    'application/pdf': [
        'PDF document',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/pdf-document/16')); }); },
    ],
    'application/vnd.oasis.opendocument.spreadsheet': [
        'Spreadsheet',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/spreadsheet/16')); }); },
    ],
    'application/vnd.apple.numbers': [
        'Spreadsheet',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/spreadsheet/16')); }); },
    ],
    'application/vnd.google-apps.spreadsheet': [
        'Google Sheet',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/google-sheet/16')); }); },
    ],
    'application/vnd.ms-excel': [
        'Excel spreadsheet',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/excel-spreadsheet/16')); }); },
    ],
    'application/vnd.oasis.opendocument.presentation': [
        'Presentation',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/presentation/16')); }); },
    ],
    'application/vnd.apple.keynote': [
        'Presentation',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/presentation/16')); }); },
    ],
    'application/vnd.google-apps.presentation': [
        'Google Slide',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/google-slide/16')); }); },
    ],
    'application/vnd.mspowerpoint': [
        'PowerPoint presentation',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/powerpoint-presentation/16')); }); },
    ],
    'application/vnd.google-apps.form': [
        'Google Form',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/google-form/16')); }); },
    ],
    'image/png': [
        'Image',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/image/16')); }); },
    ],
    'image/jpeg': [
        'Image',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/image/16')); }); },
    ],
    'image/bmp': [
        'Image',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/image/16')); }); },
    ],
    'image/webp': [
        'Image',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/image/16')); }); },
    ],
    'image/svg+xml': [
        'Image',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/image/16')); }); },
    ],
    'image/gif': ['GIF', function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/gif/16')); }); }],
    'audio/midi': [
        'Audio',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/audio/16')); }); },
    ],
    'audio/mpeg': [
        'Audio',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/audio/16')); }); },
    ],
    'audio/webm': [
        'Audio',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/audio/16')); }); },
    ],
    'audio/ogg': [
        'Audio',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/audio/16')); }); },
    ],
    'audio/wav': [
        'Audio',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/audio/16')); }); },
    ],
    'video/mp4': [
        'Video',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/video/16')); }); },
    ],
    'video/webm': [
        'Video',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/video/16')); }); },
    ],
    'video/ogg': [
        'Video',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/video/16')); }); },
    ],
    'video/x-ms-wmv': [
        'Video',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/video/16')); }); },
    ],
    'video/x-msvideo': [
        'Video',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/video/16')); }); },
    ],
    'application/zip': [
        'Archive',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/archive/16')); }); },
    ],
    'application/x-tar': [
        'Archive',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/archive/16')); }); },
    ],
    'application/x-gtar': [
        'Archive',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/archive/16')); }); },
    ],
    'application/x-7z-compressed': [
        'Archive',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/archive/16')); }); },
    ],
    'application/x-apple-diskimage': [
        'Archive',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/archive/16')); }); },
    ],
    'application/dmg': [
        'Executable',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/executable/16')); }); },
    ],
    'text/css': [
        'Source Code',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/source-code/16')); }); },
    ],
    'text/html': [
        'Source Code',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/source-code/16')); }); },
    ],
    'application/javascript': [
        'Source Code',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/source-code/16')); }); },
    ],
    'application/octet-stream': [
        'Binary file',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/generic/16')); }); },
    ],
    'application/invision.prototype': ['Prototype', undefined],
    // TODO: Figure a way to detect those
    'application/sketch': [
        'Sketch',
        function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/icon-file-type/glyph/sketch/16')); }); },
    ],
};
//# sourceMappingURL=index.js.map