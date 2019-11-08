"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_1 = require("../analytics");
function getLinkCreationAnalyticsEvent(inputMethod, url) {
    // Remove protocol and www., if either exists
    var withoutProtocol = url.toLowerCase().replace(/^(.*):\/\//, '');
    var withoutWWW = withoutProtocol.replace(/^(www\.)/, '');
    // Remove port, fragment, path, query string
    var linkDomain = withoutWWW.replace(/[:\/?#](.*)$/, '');
    return {
        action: analytics_1.ACTION.INSERTED,
        actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: analytics_1.ACTION_SUBJECT_ID.LINK,
        attributes: { inputMethod: inputMethod },
        eventType: analytics_1.EVENT_TYPE.TRACK,
        nonPrivacySafeAttributes: { linkDomain: linkDomain },
    };
}
exports.getLinkCreationAnalyticsEvent = getLinkCreationAnalyticsEvent;
//# sourceMappingURL=analytics.js.map