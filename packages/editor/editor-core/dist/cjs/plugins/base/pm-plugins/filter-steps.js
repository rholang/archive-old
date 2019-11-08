"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var hasInvalidSteps = function (tr) {
    return (tr.steps || []).some(function (step) { return step.from > step.to; });
};
exports.default = (function () {
    return new prosemirror_state_1.Plugin({
        filterTransaction: function (tr) {
            if (hasInvalidSteps(tr)) {
                // eslint-disable-next-line no-console
                console.warn('The transaction was blocked because it contains invalid steps', tr.steps);
                return false;
            }
            return true;
        },
    });
});
//# sourceMappingURL=filter-steps.js.map