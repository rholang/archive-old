import { __assign } from "tslib";
import * as React from 'react';
import { extractInlineViewPropsFromObject } from './extractPropsFromObject';
import { buildName } from './extractPropsFromSourceCodeCommon';
import CommitIcon from '@atlaskit/icon-object/glyph/commit/16';
export var buildIcon = function (json) {
    var name = json.name;
    return { icon: React.createElement(CommitIcon, { label: name }) };
};
export var extractInlineViewPropsFromSourceCodeCommit = function (json) {
    var props = extractInlineViewPropsFromObject(json);
    return __assign(__assign(__assign({}, props), buildIcon(json)), buildName(props, json));
};
//# sourceMappingURL=extractPropsFromSourceCodeCommit.js.map