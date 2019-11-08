import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
var className = createClassName('taskList');
export var styles = "\n." + className + " {\n  margin-top: 12px;\n}\n";
export default function taskList(_a) {
    var text = _a.text;
    return createTag('div', { class: className }, text);
}
//# sourceMappingURL=task-list.js.map