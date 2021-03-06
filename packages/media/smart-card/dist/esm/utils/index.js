import { __read } from "tslib";
import * as React from 'react';
import Loadable from 'react-loadable';
export var isCardWithData = function (props) { return !!props.data; };
export var isSpecialEvent = function (evt) {
    return evt.isDefaultPrevented() &&
        (isIframe() || isSpecialKey(evt) || isSpecialClick(evt));
};
export var isIframe = function () { return window.parent !== parent; };
export var isSpecialKey = function (event) {
    return event.metaKey || event.ctrlKey;
};
export var isSpecialClick = function (event) { return event.button === 1; };
export var getCollapsedIcon = function (details) {
    var jsonLdData = (details && details.data) || {};
    return (jsonLdData &&
        jsonLdData.generator &&
        jsonLdData.generator.icon &&
        jsonLdData.generator.icon.url);
};
export var getIconForFileType = function (fileMimeType) {
    var icon = typeToIcon[fileMimeType.toLowerCase()];
    if (!icon) {
        return;
    }
    var _a = __read(icon, 2), label = _a[0], importCb = _a[1];
    if (!importCb) {
        return;
    }
    var Icon = Loadable({
        loader: function () { return importCb().then(function (module) { return module.default; }); },
        loading: function () { return null; },
    }); // because we're using dynamic loading here, TS will not be able to infer the type
    return React.createElement(Icon, { label: label });
};
export var getLabelForFileType = function (fileMimeType) {
    var icon = typeToIcon[fileMimeType.toLowerCase()];
    if (!icon) {
        return;
    }
    var _a = __read(icon, 1), label = _a[0];
    return label;
};
var typeToIcon = {
    'text/plain': [
        'Document',
        function () { return import('@atlaskit/icon-file-type/glyph/document/16'); },
    ],
    'application/vnd.oasis.opendocument.text': [
        'Document',
        function () { return import('@atlaskit/icon-file-type/glyph/document/16'); },
    ],
    'application/vnd.apple.pages': [
        'Document',
        function () { return import('@atlaskit/icon-file-type/glyph/document/16'); },
    ],
    'application/vnd.google-apps.document': [
        'Google Doc',
        function () { return import('@atlaskit/icon-file-type/glyph/google-doc/16'); },
    ],
    'application/vnd.ms-word': [
        'Word document',
        function () { return import('@atlaskit/icon-file-type/glyph/word-document/16'); },
    ],
    'application/pdf': [
        'PDF document',
        function () { return import('@atlaskit/icon-file-type/glyph/pdf-document/16'); },
    ],
    'application/vnd.oasis.opendocument.spreadsheet': [
        'Spreadsheet',
        function () { return import('@atlaskit/icon-file-type/glyph/spreadsheet/16'); },
    ],
    'application/vnd.apple.numbers': [
        'Spreadsheet',
        function () { return import('@atlaskit/icon-file-type/glyph/spreadsheet/16'); },
    ],
    'application/vnd.google-apps.spreadsheet': [
        'Google Sheet',
        function () { return import('@atlaskit/icon-file-type/glyph/google-sheet/16'); },
    ],
    'application/vnd.ms-excel': [
        'Excel spreadsheet',
        function () { return import('@atlaskit/icon-file-type/glyph/excel-spreadsheet/16'); },
    ],
    'application/vnd.oasis.opendocument.presentation': [
        'Presentation',
        function () { return import('@atlaskit/icon-file-type/glyph/presentation/16'); },
    ],
    'application/vnd.apple.keynote': [
        'Presentation',
        function () { return import('@atlaskit/icon-file-type/glyph/presentation/16'); },
    ],
    'application/vnd.google-apps.presentation': [
        'Google Slide',
        function () { return import('@atlaskit/icon-file-type/glyph/google-slide/16'); },
    ],
    'application/vnd.mspowerpoint': [
        'PowerPoint presentation',
        function () { return import('@atlaskit/icon-file-type/glyph/powerpoint-presentation/16'); },
    ],
    'application/vnd.google-apps.form': [
        'Google Form',
        function () { return import('@atlaskit/icon-file-type/glyph/google-form/16'); },
    ],
    'image/png': [
        'Image',
        function () { return import('@atlaskit/icon-file-type/glyph/image/16'); },
    ],
    'image/jpeg': [
        'Image',
        function () { return import('@atlaskit/icon-file-type/glyph/image/16'); },
    ],
    'image/bmp': [
        'Image',
        function () { return import('@atlaskit/icon-file-type/glyph/image/16'); },
    ],
    'image/webp': [
        'Image',
        function () { return import('@atlaskit/icon-file-type/glyph/image/16'); },
    ],
    'image/svg+xml': [
        'Image',
        function () { return import('@atlaskit/icon-file-type/glyph/image/16'); },
    ],
    'image/gif': ['GIF', function () { return import('@atlaskit/icon-file-type/glyph/gif/16'); }],
    'audio/midi': [
        'Audio',
        function () { return import('@atlaskit/icon-file-type/glyph/audio/16'); },
    ],
    'audio/mpeg': [
        'Audio',
        function () { return import('@atlaskit/icon-file-type/glyph/audio/16'); },
    ],
    'audio/webm': [
        'Audio',
        function () { return import('@atlaskit/icon-file-type/glyph/audio/16'); },
    ],
    'audio/ogg': [
        'Audio',
        function () { return import('@atlaskit/icon-file-type/glyph/audio/16'); },
    ],
    'audio/wav': [
        'Audio',
        function () { return import('@atlaskit/icon-file-type/glyph/audio/16'); },
    ],
    'video/mp4': [
        'Video',
        function () { return import('@atlaskit/icon-file-type/glyph/video/16'); },
    ],
    'video/webm': [
        'Video',
        function () { return import('@atlaskit/icon-file-type/glyph/video/16'); },
    ],
    'video/ogg': [
        'Video',
        function () { return import('@atlaskit/icon-file-type/glyph/video/16'); },
    ],
    'video/x-ms-wmv': [
        'Video',
        function () { return import('@atlaskit/icon-file-type/glyph/video/16'); },
    ],
    'video/x-msvideo': [
        'Video',
        function () { return import('@atlaskit/icon-file-type/glyph/video/16'); },
    ],
    'application/zip': [
        'Archive',
        function () { return import('@atlaskit/icon-file-type/glyph/archive/16'); },
    ],
    'application/x-tar': [
        'Archive',
        function () { return import('@atlaskit/icon-file-type/glyph/archive/16'); },
    ],
    'application/x-gtar': [
        'Archive',
        function () { return import('@atlaskit/icon-file-type/glyph/archive/16'); },
    ],
    'application/x-7z-compressed': [
        'Archive',
        function () { return import('@atlaskit/icon-file-type/glyph/archive/16'); },
    ],
    'application/x-apple-diskimage': [
        'Archive',
        function () { return import('@atlaskit/icon-file-type/glyph/archive/16'); },
    ],
    'application/dmg': [
        'Executable',
        function () { return import('@atlaskit/icon-file-type/glyph/executable/16'); },
    ],
    'text/css': [
        'Source Code',
        function () { return import('@atlaskit/icon-file-type/glyph/source-code/16'); },
    ],
    'text/html': [
        'Source Code',
        function () { return import('@atlaskit/icon-file-type/glyph/source-code/16'); },
    ],
    'application/javascript': [
        'Source Code',
        function () { return import('@atlaskit/icon-file-type/glyph/source-code/16'); },
    ],
    'application/octet-stream': [
        'Binary file',
        function () { return import('@atlaskit/icon-file-type/glyph/generic/16'); },
    ],
    'application/invision.prototype': ['Prototype', undefined],
    // TODO: Figure a way to detect those
    'application/sketch': [
        'Sketch',
        function () { return import('@atlaskit/icon-file-type/glyph/sketch/16'); },
    ],
};
//# sourceMappingURL=index.js.map