"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mention_link_1 = require("./mention-link");
var attachment_link_1 = require("./attachment-link");
var url_link_1 = require("./url-link");
var issue_link_1 = require("./issue-link");
// jira-components/jira-core/src/main/resources/system-contentlinkresolvers-plugin.xml
// attachment resolver: 10
// anchor resolver: 20 - unsupported
// jiraissue resolver: 30 - unsupported
// user profile: 40
//
// Fall back to url link resolver
var linkResolverStrategies = [
    attachment_link_1.attachmentLinkResolver,
    mention_link_1.mentionLinkResolver,
    issue_link_1.issueLinkResolver,
    url_link_1.urlLinkResolver,
];
function resolveLink(link, schema, context) {
    var e_1, _a;
    var length = link.originalLinkText.length + 2;
    try {
        for (var linkResolverStrategies_1 = tslib_1.__values(linkResolverStrategies), linkResolverStrategies_1_1 = linkResolverStrategies_1.next(); !linkResolverStrategies_1_1.done; linkResolverStrategies_1_1 = linkResolverStrategies_1.next()) {
            var resolver = linkResolverStrategies_1_1.value;
            var resolvedLink = resolver(link, schema, context);
            if (resolvedLink) {
                return {
                    length: length,
                    nodes: resolvedLink,
                    type: 'pmnode',
                };
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (linkResolverStrategies_1_1 && !linkResolverStrategies_1_1.done && (_a = linkResolverStrategies_1.return)) _a.call(linkResolverStrategies_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        length: 1,
        type: 'text',
        text: "[",
    };
}
exports.resolveLink = resolveLink;
//# sourceMappingURL=link-resolver.js.map