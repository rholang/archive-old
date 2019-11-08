import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
var className = createClassName('decisionList');
export var styles = "\n." + className + " {\n  margin-top: 12px;\n}\n";
export default function decisionList(_a) {
    var text = _a.text;
    return createTag('div', { class: className }, text);
}
//# sourceMappingURL=decision-list.js.map