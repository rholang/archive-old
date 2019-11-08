"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var insert_query_1 = require("../../type-ahead/commands/insert-query");
var analytics_1 = require("../../analytics");
function insertMentionQuery(inputMethod) {
    return analytics_1.withAnalytics({
        action: analytics_1.ACTION.INVOKED,
        actionSubject: analytics_1.ACTION_SUBJECT.TYPEAHEAD,
        actionSubjectId: analytics_1.ACTION_SUBJECT_ID.TYPEAHEAD_MENTION,
        attributes: { inputMethod: inputMethod },
        eventType: analytics_1.EVENT_TYPE.UI,
    })(insert_query_1.insertTypeAheadQuery('@'));
}
exports.insertMentionQuery = insertMentionQuery;
//# sourceMappingURL=insert-mention-query.js.map