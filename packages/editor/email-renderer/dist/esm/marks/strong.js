import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('mark-strong') + " {\n  font-weight: bold;\n}\n";
export default function strong(_a) {
    var text = _a.text;
    return createTag('span', { class: createClassName('mark-strong') }, text);
}
//# sourceMappingURL=strong.js.map