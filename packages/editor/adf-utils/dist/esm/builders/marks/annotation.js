import { applyMark } from '../utils/apply-mark';
export var annotation = function (attrs) { return function (maybeNode) {
    return applyMark({ type: 'annotation', attrs: attrs }, maybeNode);
}; };
//# sourceMappingURL=annotation.js.map