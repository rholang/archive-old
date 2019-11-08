import { applyMark } from '../utils/apply-mark';
export var alignment = function (attrs) { return function (maybeNode) {
    return applyMark({ type: 'alignment', attrs: attrs }, maybeNode);
}; };
//# sourceMappingURL=alignment.js.map