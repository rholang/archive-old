"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var issue_key_1 = require("../issue-key");
function issueLinkResolver(link, schema, context) {
    var originalLinkText = link.originalLinkText, linkTitle = link.linkTitle, notLinkBody = link.notLinkBody;
    if (linkTitle === 'smart-link') {
        return [
            schema.nodes.inlineCard.createChecked({
                url: notLinkBody,
            }),
        ];
    }
    var issue = issue_key_1.getIssue(context, originalLinkText);
    if (issue) {
        return issue_key_1.buildInlineCard(schema, issue);
    }
    return undefined;
}
exports.issueLinkResolver = issueLinkResolver;
//# sourceMappingURL=issue-link.js.map