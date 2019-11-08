import { N50 } from '@atlaskit/adf-schema';
import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
var className = createClassName('tableNode');
export var styles = "\n." + className + " {\n  border: 1px solid " + N50 + ";\n  border-collapse: collapse;\n  width: 100%;\n  table-layout: fixed;\n}\n." + className + "-wrapper {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n";
export var numberedColumnWidth = 42;
export default function table(_a) {
    var text = _a.text, node = _a.node;
    var colgroup = '';
    if (node.attrs && node.attrs.isNumberColumnEnabled) {
        var style = "width: " + numberedColumnWidth + "px";
        var colTag = createTag('col', { style: style });
        colgroup = createTag('colgroup', undefined, colTag);
    }
    var table = createTag('table', { class: className }, colgroup + text);
    return createTag('div', { class: className + "-wrapper" }, table);
}
//# sourceMappingURL=table.js.map