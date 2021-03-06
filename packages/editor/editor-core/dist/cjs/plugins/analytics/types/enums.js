"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EVENT_TYPE;
(function (EVENT_TYPE) {
    EVENT_TYPE["OPERATIONAL"] = "operational";
    EVENT_TYPE["SCREEN"] = "screen";
    EVENT_TYPE["TRACK"] = "track";
    EVENT_TYPE["UI"] = "ui";
})(EVENT_TYPE = exports.EVENT_TYPE || (exports.EVENT_TYPE = {}));
var ACTION;
(function (ACTION) {
    ACTION["CHANGED_FULL_WIDTH_MODE"] = "changedFullWidthMode";
    ACTION["CHANGED_LAYOUT"] = "changedLayout";
    ACTION["CHANGED_TYPE"] = "changedType";
    ACTION["CHANGED_URL"] = "changedUrl";
    ACTION["CLICKED"] = "clicked";
    ACTION["DELETED"] = "deleted";
    ACTION["DISPATCHED_INVALID_TRANSACTION"] = "dispatchedInvalidTransaction";
    ACTION["EDITOR_MOUNTED"] = "mounted";
    ACTION["FORMATTED"] = "formatted";
    ACTION["INSERTED"] = "inserted";
    ACTION["INVOKED"] = "invoked";
    ACTION["OPENED"] = "opened";
    ACTION["PASTED"] = "pasted";
    ACTION["PASTED_AS_PLAIN"] = "pastedAsPlain";
    ACTION["PROSEMIRROR_RENDERED"] = "proseMirrorRendered";
    ACTION["REDID"] = "redid";
    ACTION["STARTED"] = "started";
    ACTION["STOPPED"] = "stopped";
    ACTION["SUBSTITUTED"] = "autoSubstituted";
    ACTION["UNDID"] = "undid";
    ACTION["UNLINK"] = "unlinked";
    ACTION["VISITED"] = "visited";
    ACTION["BROWSER_FREEZE"] = "browserFreeze";
    ACTION["SLOW_INPUT"] = "slowInput";
    ACTION["UPLOAD_EXTERNAL_FAIL"] = "uploadExternalFailed";
})(ACTION = exports.ACTION || (exports.ACTION = {}));
var INPUT_METHOD;
(function (INPUT_METHOD) {
    INPUT_METHOD["ASCII"] = "ascii";
    INPUT_METHOD["AUTO"] = "auto";
    INPUT_METHOD["AUTO_DETECT"] = "autoDetect";
    INPUT_METHOD["CARD"] = "card";
    INPUT_METHOD["CLIPBOARD"] = "clipboard";
    INPUT_METHOD["DRAG_AND_DROP"] = "dragAndDrop";
    INPUT_METHOD["EXTERNAL"] = "external";
    INPUT_METHOD["FORMATTING"] = "autoformatting";
    INPUT_METHOD["FLOATING_TB"] = "floatingToolbar";
    INPUT_METHOD["KEYBOARD"] = "keyboard";
    INPUT_METHOD["INSERT_MENU"] = "insertMenu";
    INPUT_METHOD["MANUAL"] = "manual";
    INPUT_METHOD["PICKER"] = "picker";
    INPUT_METHOD["PICKER_CLOUD"] = "cloudPicker";
    INPUT_METHOD["QUICK_INSERT"] = "quickInsert";
    INPUT_METHOD["SHORTCUT"] = "shortcut";
    INPUT_METHOD["TOOLBAR"] = "toolbar";
    INPUT_METHOD["TYPEAHEAD"] = "typeAhead";
    INPUT_METHOD["CONTEXT_MENU"] = "contextMenu";
    INPUT_METHOD["BUTTON"] = "button";
})(INPUT_METHOD = exports.INPUT_METHOD || (exports.INPUT_METHOD = {}));
var ACTION_SUBJECT;
(function (ACTION_SUBJECT) {
    ACTION_SUBJECT["BUTTON"] = "button";
    ACTION_SUBJECT["DOCUMENT"] = "document";
    ACTION_SUBJECT["EDITOR"] = "editor";
    ACTION_SUBJECT["FEEDBACK_DIALOG"] = "feedbackDialog";
    ACTION_SUBJECT["LAYOUT"] = "layout";
    ACTION_SUBJECT["MEDIA"] = "media";
    ACTION_SUBJECT["MEDIA_SINGLE"] = "mediaSingle";
    ACTION_SUBJECT["PANEL"] = "panel";
    ACTION_SUBJECT["PICKER"] = "picker";
    ACTION_SUBJECT["SMART_LINK"] = "smartLink";
    ACTION_SUBJECT["TEXT"] = "text";
    ACTION_SUBJECT["TYPEAHEAD"] = "typeAhead";
    ACTION_SUBJECT["TABLE"] = "table";
})(ACTION_SUBJECT = exports.ACTION_SUBJECT || (exports.ACTION_SUBJECT = {}));
var ACTION_SUBJECT_ID;
(function (ACTION_SUBJECT_ID) {
    ACTION_SUBJECT_ID["ACTION"] = "action";
    ACTION_SUBJECT_ID["ANNOTATE_BUTTON"] = "annotateButton";
    ACTION_SUBJECT_ID["BLOCK_QUOTE"] = "blockQuote";
    ACTION_SUBJECT_ID["BUTTON_HELP"] = "helpButton";
    ACTION_SUBJECT_ID["BUTTON_FEEDBACK"] = "feedbackButton";
    ACTION_SUBJECT_ID["CANCEL"] = "cancel";
    ACTION_SUBJECT_ID["CARD_INLINE"] = "inlineCard";
    ACTION_SUBJECT_ID["CARD_BLOCK"] = "blockCard";
    ACTION_SUBJECT_ID["CODE_BLOCK"] = "codeBlock";
    ACTION_SUBJECT_ID["DATE"] = "date";
    ACTION_SUBJECT_ID["DECISION"] = "decision";
    ACTION_SUBJECT_ID["DIVIDER"] = "divider";
    ACTION_SUBJECT_ID["EMOJI"] = "emoji";
    ACTION_SUBJECT_ID["FORMAT_BLOCK_QUOTE"] = "blockQuote";
    ACTION_SUBJECT_ID["FORMAT_CODE"] = "code";
    ACTION_SUBJECT_ID["FORMAT_COLOR"] = "color";
    ACTION_SUBJECT_ID["FORMAT_CLEAR"] = "clearFormatting";
    ACTION_SUBJECT_ID["FORMAT_HEADING"] = "heading";
    ACTION_SUBJECT_ID["FORMAT_INDENT"] = "indentation";
    ACTION_SUBJECT_ID["FORMAT_ITALIC"] = "italic";
    ACTION_SUBJECT_ID["FORMAT_LIST_NUMBER"] = "numberedList";
    ACTION_SUBJECT_ID["FORMAT_LIST_BULLET"] = "bulletedList";
    ACTION_SUBJECT_ID["FORMAT_STRIKE"] = "strike";
    ACTION_SUBJECT_ID["FORMAT_STRONG"] = "strong";
    ACTION_SUBJECT_ID["FORMAT_SUB"] = "subscript";
    ACTION_SUBJECT_ID["FORMAT_SUPER"] = "superscript";
    ACTION_SUBJECT_ID["FORMAT_UNDERLINE"] = "underline";
    ACTION_SUBJECT_ID["LAYOUT"] = "layout";
    ACTION_SUBJECT_ID["LINE_BREAK"] = "lineBreak";
    ACTION_SUBJECT_ID["LINK"] = "link";
    ACTION_SUBJECT_ID["MEDIA_LINK"] = "mediaLink";
    ACTION_SUBJECT_ID["LINK_PREVIEW"] = "linkPreview";
    ACTION_SUBJECT_ID["MEDIA"] = "media";
    ACTION_SUBJECT_ID["MENTION"] = "mention";
    ACTION_SUBJECT_ID["PICKER_CLOUD"] = "cloudPicker";
    ACTION_SUBJECT_ID["PICKER_EMOJI"] = "emojiPicker";
    ACTION_SUBJECT_ID["PRODUCT_NAME"] = "productName";
    ACTION_SUBJECT_ID["PANEL"] = "panel";
    ACTION_SUBJECT_ID["PUNC"] = "punctuation";
    ACTION_SUBJECT_ID["SAVE"] = "save";
    ACTION_SUBJECT_ID["SECTION"] = "section";
    ACTION_SUBJECT_ID["SMART_LINK"] = "smartLink";
    ACTION_SUBJECT_ID["STATUS"] = "status";
    ACTION_SUBJECT_ID["SYMBOL"] = "symbol";
    ACTION_SUBJECT_ID["TABLE"] = "table";
    ACTION_SUBJECT_ID["TYPEAHEAD_EMOJI"] = "emojiTypeAhead";
    ACTION_SUBJECT_ID["TYPEAHEAD_LINK"] = "linkTypeAhead";
    ACTION_SUBJECT_ID["TYPEAHEAD_MENTION"] = "mentionTypeAhead";
    ACTION_SUBJECT_ID["TYPEAHEAD_QUICK_INSERT"] = "quickInsertTypeAhead";
    ACTION_SUBJECT_ID["PASTE_BLOCK_CARD"] = "blockCard";
    ACTION_SUBJECT_ID["PASTE_BLOCKQUOTE"] = "blockQuote";
    ACTION_SUBJECT_ID["PASTE_BODIED_EXTENSION"] = "bodiedExtension";
    ACTION_SUBJECT_ID["PASTE_BULLET_LIST"] = "bulletList";
    ACTION_SUBJECT_ID["PASTE_CODE_BLOCK"] = "codeBlock";
    ACTION_SUBJECT_ID["PASTE_DECISION_LIST"] = "decisionList";
    ACTION_SUBJECT_ID["PASTE_EXTENSION"] = "extension";
    ACTION_SUBJECT_ID["PASTE_HEADING"] = "heading";
    ACTION_SUBJECT_ID["PASTE_MEDIA_GROUP"] = "mediaGroup";
    ACTION_SUBJECT_ID["PASTE_MEDIA_SINGLE"] = "mediaSingle";
    ACTION_SUBJECT_ID["PASTE_ORDERED_LIST"] = "orderedList";
    ACTION_SUBJECT_ID["PASTE_PANEL"] = "panel";
    ACTION_SUBJECT_ID["PASTE_PARAGRAPH"] = "paragraph";
    ACTION_SUBJECT_ID["PASTE_RULE"] = "rule";
    ACTION_SUBJECT_ID["PASTE_TABLE_HEADER"] = "tableHeader";
    ACTION_SUBJECT_ID["PASTE_TABLE_CELL"] = "tableCell";
    ACTION_SUBJECT_ID["PASTE_TABLE_ROW"] = "tableRow";
    ACTION_SUBJECT_ID["PASTE_TABLE"] = "table";
    ACTION_SUBJECT_ID["PASTE_TASK_LIST"] = "taskList";
})(ACTION_SUBJECT_ID = exports.ACTION_SUBJECT_ID || (exports.ACTION_SUBJECT_ID = {}));
//# sourceMappingURL=enums.js.map