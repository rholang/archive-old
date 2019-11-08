import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('mark-link') + " {\n  border: none;\n  background: transparent;\n  color: #0052cc;\n  text-decoration: none;\n}\n";
export default function link(_a) {
    var mark = _a.mark, text = _a.text;
    var _b = mark.attrs, href = _b.href, title = _b.title;
    return createTag('a', {
        href: href,
        title: title,
        class: createClassName('mark-link'),
    }, text);
}
//# sourceMappingURL=link.js.map