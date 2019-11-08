"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var issues = {
    '999': '',
    '123': 'A short issue title',
    '234': 'Improve typing performance on large documents',
    '345': 'Copying an image from the web and pastes creates an external image node instead of uploading',
};
var buildCardData = function (name, url) { return ({
    '@type': ['Object', 'atlassian:Task'],
    '@context': {
        '@vocab': 'https://www.w3.org/ns/activitystreams#',
        atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
        schema: 'http://schema.org/',
    },
    url: url,
    generator: {
        '@type': 'Application',
        '@id': 'https://www.atlassian.com/#Jira',
        name: 'Jira',
    },
    isCompleted: false,
    isDeleted: false,
    name: name,
    taskType: {
        '@type': ['Object', 'atlassian:TaskType'],
        '@id': 'https://www.atlassian.com/#JiraBug',
        name: 'JiraBug',
    },
}); };
exports.autoformattingProvider = {
    getRules: function () {
        return Promise.resolve({
            '[Ee][Dd]-(\\d+)': function (match) {
                var ticketNumber = match[1];
                var ticketTitle = issues[ticketNumber];
                if (ticketTitle === undefined) {
                    return Promise.resolve();
                }
                var title = "ED-" + ticketNumber + (ticketTitle.length ? ": " + ticketTitle : '');
                return new Promise(function (resolve) {
                    return setTimeout(function () {
                        resolve({
                            type: 'inlineCard',
                            attrs: {
                                data: buildCardData(title, 'https://www.atlassian.com/'),
                            },
                        });
                    }, 1000);
                });
            },
        });
    },
};
//# sourceMappingURL=autoformatting-provider.js.map