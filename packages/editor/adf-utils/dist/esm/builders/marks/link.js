import { applyMark } from '../utils/apply-mark';
export var link = function (attrs) { return function (maybeNode) {
    return applyMark({ type: 'link', attrs: attrs }, maybeNode);
}; };
//# sourceMappingURL=link.js.map