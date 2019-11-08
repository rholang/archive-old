import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('mark-strike') + " {\n  text-decoration: line-through;\n}\n";
export default function strike(_a) {
    var text = _a.text;
    return createTag('span', { class: createClassName('mark-strike') }, text);
}
//# sourceMappingURL=strike.js.map