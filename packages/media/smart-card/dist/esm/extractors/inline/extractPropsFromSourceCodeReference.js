import { __assign } from "tslib";
import * as React from 'react';
import BranchIcon from '@atlaskit/icon-object/glyph/branch/16';
import { extractInlineViewPropsFromObject } from './extractPropsFromObject';
import { buildName } from './extractPropsFromSourceCodeCommon';
export var buildIcon = function (json) {
    var name = json.name;
    return { icon: React.createElement(BranchIcon, { label: name }) };
};
export var extractInlineViewPropsFromSourceCodeReference = function (json) {
    var props = extractInlineViewPropsFromObject(json);
    return __assign(__assign(__assign({}, props), buildIcon(json)), buildName(props, json));
};
//# sourceMappingURL=extractPropsFromSourceCodeReference.js.map