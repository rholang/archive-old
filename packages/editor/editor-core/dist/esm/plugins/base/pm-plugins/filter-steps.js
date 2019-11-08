import { Plugin } from 'prosemirror-state';
var hasInvalidSteps = function (tr) {
    return (tr.steps || []).some(function (step) { return step.from > step.to; });
};
export default (function () {
    return new Plugin({
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