import { N20, N50, N200 } from '@atlaskit/adf-schema';
import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
import { numberedColumnWidth } from './table';
export var styles = "\n." + createClassName('tableRow-numCol') + " {\n  background-color: " + N20 + ";\n  background-clip: padding-box;\n  border: 1px solid " + N50 + ";\n  border-right-width: 0;\n  border-bottom-width: 0;\n  height: auto;\n  padding: 8px;\n  text-align: center;\n  vertical-align: top;\n  width: " + numberedColumnWidth + "px;\n}\n." + createClassName('tableRow-numCol-p') + " {\n  margin: 0;\n  padding: 0px;\n  mso-line-height-rule: exactly;\n  line-height: 24px;\n  font-size: 14px;\n  color: " + N200 + ";\n}\n";
export default function tableRow(_a) {
    var text = _a.text, attrs = _a.attrs;
    var numberedColumn = '';
    if (attrs && attrs.isNumberColumnEnabled) {
        var paragraph = createTag('p', { class: createClassName('tableRow-numCol-p') }, attrs.index);
        numberedColumn = createTag('td', { class: createClassName('tableRow-numCol') }, paragraph);
    }
    return createTag('tr', {}, numberedColumn + text);
}
//# sourceMappingURL=table-row.js.map