import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('ol') + " {\n  list-style-type: decimal;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n." + createClassName('li') + " > ." + createClassName('ol') + " {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n";
export default function orderedList(_a) {
    var text = _a.text;
    return createTag('ol', { class: createClassName('ol') }, text);
}
//# sourceMappingURL=ordered-list.js.map