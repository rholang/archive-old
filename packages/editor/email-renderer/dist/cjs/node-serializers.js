"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var blockquote_1 = tslib_1.__importDefault(require("./nodes/blockquote"));
var block_card_1 = tslib_1.__importDefault(require("./nodes/block-card"));
var bullet_list_1 = tslib_1.__importDefault(require("./nodes/bullet-list"));
var code_block_1 = tslib_1.__importDefault(require("./nodes/code-block"));
var decision_item_1 = tslib_1.__importDefault(require("./nodes/decision-item"));
var decision_list_1 = tslib_1.__importDefault(require("./nodes/decision-list"));
var emoji_1 = tslib_1.__importDefault(require("./nodes/emoji"));
var hard_break_1 = tslib_1.__importDefault(require("./nodes/hard-break"));
var heading_1 = tslib_1.__importDefault(require("./nodes/heading"));
var inline_card_1 = tslib_1.__importDefault(require("./nodes/inline-card"));
var list_item_1 = tslib_1.__importDefault(require("./nodes/list-item"));
var mention_1 = tslib_1.__importDefault(require("./nodes/mention"));
var media_1 = tslib_1.__importDefault(require("./nodes/media"));
var media_group_1 = tslib_1.__importDefault(require("./nodes/media-group"));
var media_single_1 = tslib_1.__importDefault(require("./nodes/media-single"));
var ordered_list_1 = tslib_1.__importDefault(require("./nodes/ordered-list"));
var panel_1 = tslib_1.__importDefault(require("./nodes/panel"));
var paragraph_1 = tslib_1.__importDefault(require("./nodes/paragraph"));
var rule_1 = tslib_1.__importDefault(require("./nodes/rule"));
var table_1 = tslib_1.__importDefault(require("./nodes/table"));
var table_cell_1 = tslib_1.__importDefault(require("./nodes/table-cell"));
var table_header_1 = tslib_1.__importDefault(require("./nodes/table-header"));
var table_row_1 = tslib_1.__importDefault(require("./nodes/table-row"));
var task_list_1 = tslib_1.__importDefault(require("./nodes/task-list"));
var task_item_1 = tslib_1.__importDefault(require("./nodes/task-item"));
var text_1 = tslib_1.__importDefault(require("./nodes/text"));
var unknown_block_1 = tslib_1.__importDefault(require("./nodes/unknown-block"));
var status_1 = tslib_1.__importDefault(require("./nodes/status"));
var layoutColumn_1 = tslib_1.__importDefault(require("./nodes/layoutColumn"));
var layoutSection_1 = tslib_1.__importDefault(require("./nodes/layoutSection"));
var bodiedExtension_1 = tslib_1.__importDefault(require("./nodes/bodiedExtension"));
var inlineExtension_1 = tslib_1.__importDefault(require("./nodes/inlineExtension"));
var date_1 = tslib_1.__importDefault(require("./nodes/date"));
var renderNothing = function () { return ''; };
exports.nodeSerializers = {
    bodiedExtension: bodiedExtension_1.default,
    blockquote: blockquote_1.default,
    blockCard: block_card_1.default,
    bulletList: bullet_list_1.default,
    codeBlock: code_block_1.default,
    decisionList: decision_list_1.default,
    decisionItem: decision_item_1.default,
    emoji: emoji_1.default,
    extension: bodiedExtension_1.default,
    image: renderNothing,
    inlineCard: inline_card_1.default,
    layoutColumn: layoutColumn_1.default,
    layoutSection: layoutSection_1.default,
    inlineExtension: inlineExtension_1.default,
    hardBreak: hard_break_1.default,
    heading: heading_1.default,
    listItem: list_item_1.default,
    media: media_1.default,
    mediaGroup: media_group_1.default,
    mediaSingle: media_single_1.default,
    mention: mention_1.default,
    orderedList: ordered_list_1.default,
    panel: panel_1.default,
    paragraph: paragraph_1.default,
    placeholder: renderNothing,
    rule: rule_1.default,
    table: table_1.default,
    tableCell: table_cell_1.default,
    tableHeader: table_header_1.default,
    tableRow: table_row_1.default,
    taskItem: task_item_1.default,
    taskList: task_list_1.default,
    text: text_1.default,
    unknownBlock: unknown_block_1.default,
    status: status_1.default,
    date: date_1.default,
};
//# sourceMappingURL=node-serializers.js.map