import { applyMark } from '../utils/apply-mark';
export var textColor = function (attrs) { return function (maybeNode) { return applyMark({ type: 'textColor', attrs: attrs }, maybeNode); }; };
//# sourceMappingURL=text-color.js.map