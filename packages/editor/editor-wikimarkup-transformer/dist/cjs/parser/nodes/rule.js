"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HORIZONTAL_LINE_INSIDE_MACRO = '---';
function getRuleNodeView(schema, containerNodeType) {
    var _a = schema.nodes, paragraph = _a.paragraph, rule = _a.rule;
    if (containerNodeType) {
        var textNode = schema.text(HORIZONTAL_LINE_INSIDE_MACRO);
        return paragraph.createChecked({}, textNode);
    }
    else {
        return rule.createChecked();
    }
}
exports.default = getRuleNodeView;
function createRuleNode(schema) {
    var rule = schema.nodes.rule;
    var ruleNode = rule.createChecked();
    return [ruleNode];
}
exports.createRuleNode = createRuleNode;
//# sourceMappingURL=rule.js.map