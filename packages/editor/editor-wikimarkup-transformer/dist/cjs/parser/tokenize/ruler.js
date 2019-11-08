"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rule_1 = require("../nodes/rule");
var RULER_REGEX = /^-{4,5}(\s|$)/;
exports.ruler = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema;
    var match = input.substring(position).match(RULER_REGEX);
    if (match) {
        return {
            type: 'pmnode',
            nodes: rule_1.createRuleNode(schema),
            length: match[0].length,
        };
    }
    return {
        type: 'text',
        text: input.substring(position, 1),
        length: 1,
    };
};
//# sourceMappingURL=ruler.js.map