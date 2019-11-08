import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('mark-em') + " {\n  font-style: italic;\n}\n";
export default function em(_a) {
    var text = _a.text;
    return createTag('span', { class: createClassName('mark-em') }, text);
}
//# sourceMappingURL=em.js.map