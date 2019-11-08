import { applyMark } from '../utils/apply-mark';
export var breakout = function (attrs) { return function (maybeNode) {
    return applyMark({ type: 'breakout', attrs: attrs }, maybeNode);
}; };
//# sourceMappingURL=breakout.js.map