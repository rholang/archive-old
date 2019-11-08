import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('ul') + " {\n  list-style-type: disc;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n." + createClassName('li') + " > ." + createClassName('ul') + " {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n";
export default function bulletList(_a) {
    var text = _a.text;
    return createTag('ul', { class: createClassName('ul') }, text);
}
//# sourceMappingURL=bullet-list.js.map