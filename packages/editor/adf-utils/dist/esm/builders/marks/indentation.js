import { applyMark } from '../utils/apply-mark';
export var indentation = function (attrs) { return function (maybeNode) {
    return applyMark({ type: 'indentation', attrs: attrs }, maybeNode);
}; };
//# sourceMappingURL=indentation.js.map