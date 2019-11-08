import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('mark-alignment') + "-right,\n." + createClassName('mark-alignment') + "-end {\n  width: 100%;\n  text-align: right\n}\n." + createClassName('mark-alignment') + "-center {\n  width: 100%;\n  text-align: center\n}\n";
export default function alignment(_a) {
    var mark = _a.mark, text = _a.text;
    return createTag('div', { class: createClassName("mark-alignment-" + mark.attrs.align) }, text);
}
//# sourceMappingURL=alignment.js.map