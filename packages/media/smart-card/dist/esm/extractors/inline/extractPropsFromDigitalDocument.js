import { __assign } from "tslib";
import * as React from 'react';
import FileIcon from '@atlaskit/icon-file-type/glyph/generic/16';
import { extractInlineViewPropsFromDocument } from './extractPropsFromDocument';
import { getIconForFileType } from '../../utils';
export var buildIcon = function (json) {
    if (json.fileFormat) {
        return { icon: getIconForFileType(json.fileFormat) };
    }
    return { icon: React.createElement(FileIcon, { label: json.name }) };
};
export var extractInlineViewPropsFromDigitalDocument = function (json) {
    var props = extractInlineViewPropsFromDocument(json);
    return __assign(__assign({}, props), buildIcon(json));
};
//# sourceMappingURL=extractPropsFromDigitalDocument.js.map