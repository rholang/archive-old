export var EVENT_TYPE;
(function (EVENT_TYPE) {
    EVENT_TYPE["OPERATIONAL"] = "operational";
    EVENT_TYPE["SCREEN"] = "screen";
    EVENT_TYPE["TRACK"] = "track";
    EVENT_TYPE["UI"] = "ui";
})(EVENT_TYPE || (EVENT_TYPE = {}));
export var ACTION;
(function (ACTION) {
    ACTION["STARTED"] = "started";
    ACTION["RENDERED"] = "rendered";
    ACTION["CLICKED"] = "clicked";
    ACTION["VIEWED"] = "viewed";
    ACTION["SORT_COLUMN"] = "sortedColumn";
    ACTION["SORT_COLUMN_NOT_ALLOWED"] = "sortColumnNotAllowed";
})(ACTION || (ACTION = {}));
export var ACTION_SUBJECT;
(function (ACTION_SUBJECT) {
    ACTION_SUBJECT["RENDERER"] = "renderer";
    ACTION_SUBJECT["BUTTON"] = "button";
    ACTION_SUBJECT["ANCHOR_LINK"] = "anchorLink";
    ACTION_SUBJECT["TABLE"] = "table";
})(ACTION_SUBJECT || (ACTION_SUBJECT = {}));
export var ACTION_SUBJECT_ID;
(function (ACTION_SUBJECT_ID) {
    ACTION_SUBJECT_ID["HEADING_ANCHOR_LINK"] = "headingAnchorLink";
})(ACTION_SUBJECT_ID || (ACTION_SUBJECT_ID = {}));
//# sourceMappingURL=enums.js.map