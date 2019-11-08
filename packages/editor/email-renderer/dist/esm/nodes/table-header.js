import { N20, N50 } from '@atlaskit/adf-schema';
import { createTag } from '../create-tag';
import { serializeStyle } from '../serialize-style';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('tableHeader') + " {\n  background-clip: padding-box;\n  border: 1px solid " + N50 + ";\n  border-right-width: 0;\n  border-bottom-width: 0;\n  font-weight: bold;\n  height: auto;\n  min-width: 3em;\n  padding: 8px;\n  text-align: left;\n  vertical-align: top;\n}\n";
export default function tableHeader(_a) {
    var attrs = _a.attrs, text = _a.text;
    var colspan = attrs.colspan, rowspan = attrs.rowspan, background = attrs.background;
    var style = serializeStyle({
        'background-color': background ? background : N20,
    });
    return createTag('th', {
        colspan: colspan,
        rowspan: rowspan,
        style: style,
        class: createClassName('tableHeader'),
    }, text);
}
//# sourceMappingURL=table-header.js.map