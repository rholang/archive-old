import { ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, EVENT_TYPE, } from '../analytics';
export function getLinkCreationAnalyticsEvent(inputMethod, url) {
    // Remove protocol and www., if either exists
    var withoutProtocol = url.toLowerCase().replace(/^(.*):\/\//, '');
    var withoutWWW = withoutProtocol.replace(/^(www\.)/, '');
    // Remove port, fragment, path, query string
    var linkDomain = withoutWWW.replace(/[:\/?#](.*)$/, '');
    return {
        action: ACTION.INSERTED,
        actionSubject: ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: ACTION_SUBJECT_ID.LINK,
        attributes: { inputMethod: inputMethod },
        eventType: EVENT_TYPE.TRACK,
        nonPrivacySafeAttributes: { linkDomain: linkDomain },
    };
}
//# sourceMappingURL=analytics.js.map