import { createTag } from '../create-tag';
import { N40, N300 } from '@atlaskit/adf-schema';
import { createClassName } from '../styles/util';
var className = createClassName('blockquote');
export var styles = "\n." + className + " {\n  border-left: 2px solid " + N40 + ";\n  color: " + N300 + ";\n  margin: 12px 0 0 0;\n  padding-left: 16px;\n}\n";
export default function blockquote(_a) {
    var text = _a.text;
    return createTag('blockquote', { class: className }, text);
}
//# sourceMappingURL=blockquote.js.map