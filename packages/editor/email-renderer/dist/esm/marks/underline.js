import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('mark-underline') + " {\n  text-decoration: underline;\n}\n";
export default function strong(_a) {
    var text = _a.text;
    return createTag('span', { class: createClassName('mark-underline') }, text);
}
//# sourceMappingURL=underline.js.map