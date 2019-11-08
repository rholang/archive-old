import { createTag } from '../create-tag';
import { N30, N50, N800 } from '@atlaskit/adf-schema';
import { createClassName } from '../styles/util';
var className = createClassName('bodiedExtension');
export var styles = "\n." + className + "-inner {\n  background-color: " + N30 + ";\n  border: 10px solid " + N30 + ";\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  color: " + N800 + ",\n}\n." + className + "-outer {\n  border: 1px solid " + N50 + ";\n  margin-top: 10px;\n  border-radius: 3px;\n  border-style: dashed;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n}\n";
export default function bodiedExtension(_a) {
    var attrs = _a.attrs;
    var inner = createTag('div', { class: className + '-inner' }, "&nbsp;" + attrs.extensionKey + "&nbsp;");
    return createTag('div', { class: className + '-outer' }, inner);
}
//# sourceMappingURL=bodiedExtension.js.map