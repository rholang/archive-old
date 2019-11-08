import { N50 } from '@atlaskit/adf-schema';
import { createTag } from '../create-tag';
import { serializeStyle } from '../serialize-style';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('tableCell') + " {\n  background-clip: padding-box;\n  height: auto;\n  min-width: 3em;\n  vertical-align: top;\n  border: 1px solid " + N50 + ";\n  border-right-width: 0;\n  border-bottom-width: 0;\n  padding: 8px;\n}\n";
export default function tableCell(_a) {
    var attrs = _a.attrs, text = _a.text;
    var colspan = attrs.colspan, rowspan = attrs.rowspan, background = attrs.background;
    var style = serializeStyle({
        'background-color': background || 'white',
    });
    return createTag('td', {
        colspan: colspan,
        rowspan: rowspan,
        style: style,
        class: createClassName('tableCell'),
    }, text);
}
//# sourceMappingURL=table-cell.js.map