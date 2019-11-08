import { createTag } from '../create-tag';
import { N30, N50, N800 } from '@atlaskit/adf-schema';
import { createClassName } from '../styles/util';
var className = createClassName('inlineExtension');
export var styles = "\n." + className + "-inner {\n  background-color: " + N30 + ";\n  border: 3px solid " + N30 + ";\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  color: " + N800 + ",\n}\n." + className + "-outer {\n  border: 1px solid " + N50 + ";\n  border-style: dashed;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  display: inline-block;\n}\n";
export default function inlineExtension(_a) {
    var attrs = _a.attrs;
    var inner = createTag('span', { class: className + '-inner' }, "&nbsp;" + attrs.extensionKey + "&nbsp;");
    return createTag('span', { class: className + '-outer' }, inner);
}
//# sourceMappingURL=inlineExtension.js.map