"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var blockquote_1 = tslib_1.__importDefault(require("./blockquote"));
var bulletList_1 = tslib_1.__importDefault(require("./bulletList"));
var decisionItem_1 = tslib_1.__importDefault(require("./decisionItem"));
var hardBreak_1 = tslib_1.__importDefault(require("./hardBreak"));
var heading_1 = tslib_1.__importDefault(require("./heading"));
var listItem_1 = tslib_1.__importDefault(require("./listItem"));
var mediaGroup_1 = tslib_1.__importDefault(require("./mediaGroup"));
var mention_1 = tslib_1.__importDefault(require("./mention"));
var orderedList_1 = tslib_1.__importDefault(require("./orderedList"));
var panel_1 = tslib_1.__importDefault(require("./panel"));
var paragraph_1 = tslib_1.__importDefault(require("./paragraph"));
var rule_1 = tslib_1.__importDefault(require("./rule"));
var table_1 = tslib_1.__importDefault(require("./table"));
var taskItem_1 = tslib_1.__importDefault(require("./taskItem"));
var unknown_1 = tslib_1.__importDefault(require("./unknown"));
exports.reduce = function (node, schema) {
    var reducer = exports.nodeToReducerMapping[node.type.name] || exports.nodeToReducerMapping.unknown;
    return reducer(node, schema);
};
exports.nodeToReducerMapping = {
    blockquote: blockquote_1.default,
    bulletList: bulletList_1.default,
    decisionItem: decisionItem_1.default,
    hardBreak: hardBreak_1.default,
    heading: heading_1.default,
    listItem: listItem_1.default,
    mediaGroup: mediaGroup_1.default,
    mention: mention_1.default,
    orderedList: orderedList_1.default,
    panel: panel_1.default,
    paragraph: paragraph_1.default,
    rule: rule_1.default,
    table: table_1.default,
    taskItem: taskItem_1.default,
    unknown: unknown_1.default,
};
//# sourceMappingURL=index.js.map