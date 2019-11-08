import { __assign } from "tslib";
import * as React from 'react';
import PullRequestIcon from '@atlaskit/icon-object/glyph/pull-request/16';
import { extractInlineViewPropsFromObject } from './extractPropsFromObject';
import { buildName } from './extractPropsFromSourceCodeCommon';
var buildInlineSourceCodePullRequestTag = function (json) {
    if (json['atlassian:state']) {
        return {
            lozenge: {
                appearance: 'success',
                text: json['atlassian:state'],
            },
        };
    }
    return {};
};
export var buildIcon = function (json) {
    var name = json.name;
    return { icon: React.createElement(PullRequestIcon, { label: name }) };
};
export var extractInlineViewPropsFromSourceCodePullRequest = function (json) {
    var props = extractInlineViewPropsFromObject(json);
    return __assign(__assign(__assign(__assign({}, props), buildIcon(json)), buildName(props, json)), buildInlineSourceCodePullRequestTag(json));
};
//# sourceMappingURL=extractPropsFromSourceCodePullRequest.js.map