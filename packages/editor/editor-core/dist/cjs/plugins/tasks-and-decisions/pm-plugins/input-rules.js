"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_inputrules_1 = require("prosemirror-inputrules");
var prosemirror_state_1 = require("prosemirror-state");
var analytics_1 = require("../../../analytics");
var input_rules_1 = require("../../../utils/input-rules");
var prosemirror_utils_1 = require("prosemirror-utils");
var commands_1 = require("../commands");
var analytics_2 = require("../../analytics");
var createListRule = function (regex, listType) {
    return input_rules_1.createInputRule(regex, function (state, _match, start, end) {
        var insertTr = commands_1.insertTaskDecisionWithAnalytics(state, listType, analytics_2.INPUT_METHOD.FORMATTING, addItem(start, end));
        return insertTr;
    }, true);
};
var addItem = function (start, end) { return function (_a) {
    var tr = _a.tr, state = _a.state, list = _a.list, item = _a.item, listLocalId = _a.listLocalId, itemLocalId = _a.itemLocalId;
    var $from = state.selection.$from, schema = state.schema;
    var _b = schema.nodes, paragraph = _b.paragraph, hardBreak = _b.hardBreak;
    var content = $from.node($from.depth).content;
    var shouldBreakNode = false;
    content.forEach(function (node, offset) {
        if (node.type === hardBreak && offset < start) {
            shouldBreakNode = true;
        }
    });
    var $end = state.doc.resolve(end);
    var $endOfParent = state.doc.resolve($end.after());
    // Only allow creating list in nodes that support them.
    // Parent must be a paragraph as we don't want this applying to headings
    if ($end.parent.type !== paragraph ||
        !prosemirror_utils_1.canInsert($endOfParent, list.createAndFill())) {
        return null;
    }
    var where = $from.before($from.depth);
    analytics_1.analyticsService.trackEvent("atlassian.fabric." + item.name + ".trigger.shortcut");
    if (!shouldBreakNode) {
        tr.delete(where, $from.end($from.depth))
            .replaceSelectionWith(list.create({ localId: listLocalId }, [
            item.create({ localId: itemLocalId }, content),
        ]))
            .delete(start + 1, end + 1)
            .setSelection(new prosemirror_state_1.TextSelection(tr.doc.resolve(start + 1)));
    }
    else {
        var depthAdjustment = commands_1.changeInDepth($from, tr.selection.$from);
        tr.split($from.pos)
            .setSelection(new prosemirror_state_1.NodeSelection(tr.doc.resolve($from.pos + 1)))
            .replaceSelectionWith(list.create({ localId: listLocalId }, [
            item.create({ localId: itemLocalId }, 
            // TODO: [ts30] handle void and null properly
            tr.doc.nodeAt($from.pos + 1).content),
        ]))
            .setSelection(new prosemirror_state_1.TextSelection(tr.doc.resolve($from.pos + depthAdjustment)))
            .delete(start, end + 1);
    }
    return tr;
}; };
function inputRulePlugin(schema) {
    var rules = [];
    var _a = schema.nodes, decisionList = _a.decisionList, decisionItem = _a.decisionItem, taskList = _a.taskList, taskItem = _a.taskItem;
    if (decisionList && decisionItem) {
        rules.push(createListRule(new RegExp("(^|" + input_rules_1.leafNodeReplacementCharacter + ")\\<\\>\\s$"), 'decisionList'));
    }
    if (taskList && taskItem) {
        rules.push(createListRule(new RegExp("(^|" + input_rules_1.leafNodeReplacementCharacter + ")\\[\\]\\s$"), 'taskList'));
    }
    return prosemirror_inputrules_1.inputRules({ rules: rules });
}
exports.inputRulePlugin = inputRulePlugin;
exports.default = inputRulePlugin;
//# sourceMappingURL=input-rules.js.map