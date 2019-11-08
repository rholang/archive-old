"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = require("../../../commands");
var action_1 = require("../../../utils/action");
exports.isAlignable = function (align) { return function (state, dispatch) {
    var _a = state.schema, _b = _a.nodes, paragraph = _b.paragraph, heading = _b.heading, alignment = _a.marks.alignment;
    return commands_1.toggleBlockMark(alignment, function () { return (!align ? undefined : align === 'start' ? false : { align: align }); }, [paragraph, heading])(state, dispatch);
}; };
exports.changeAlignment = function (align) { return function (state, dispatch) {
    var _a = state.schema, _b = _a.nodes, paragraph = _b.paragraph, heading = _b.heading, alignment = _a.marks.alignment;
    return action_1.cascadeCommands([
        commands_1.changeImageAlignment(align),
        commands_1.toggleBlockMark(alignment, function () { return (!align ? undefined : align === 'start' ? false : { align: align }); }, [paragraph, heading]),
    ])(state, dispatch);
}; };
//# sourceMappingURL=index.js.map