import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('li') + " {\n  margin-top: 4px;\n}\n." + createClassName('li') + " > p {\n  margin-bottom: 0px;\n  padding-top: 0px;\n}\n";
export default function listItem(_a) {
    var text = _a.text;
    return createTag('li', { class: createClassName('li') }, text);
}
//# sourceMappingURL=list-item.js.map