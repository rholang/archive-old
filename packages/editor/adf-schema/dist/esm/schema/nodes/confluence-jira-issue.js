var name = 'confluenceJiraIssue';
export var confluenceJiraIssue = {
    group: 'inline',
    inline: true,
    atom: true,
    attrs: {
        issueKey: { default: '' },
        macroId: { default: null },
        schemaVersion: { default: null },
        server: { default: null },
        serverId: { default: null },
    },
    parseDOM: [
        {
            tag: "span[data-node-type=\"" + name + "\"]",
            getAttrs: function (domNode) {
                var dom = domNode;
                return {
                    issueKey: dom.textContent,
                    macroId: dom.dataset && dom.dataset.macroId,
                    schemaVersion: dom.dataset && dom.dataset.schemaVersion,
                    server: dom.dataset && dom.dataset.server,
                    serverId: dom.dataset && dom.dataset.serverId,
                };
            },
        },
    ],
    toDOM: function (node) {
        var attrs = {
            'data-node-type': name,
            'data-macro-id': node.attrs.macroId,
            'data-schema-version': node.attrs.schemaVersion,
            'data-server': node.attrs.server,
            'data-server-id': node.attrs.serverId,
            'data-jira-issue': node.attrs.issueKey,
        };
        return ['span', attrs, node.attrs.issueKey];
    },
};
//# sourceMappingURL=confluence-jira-issue.js.map