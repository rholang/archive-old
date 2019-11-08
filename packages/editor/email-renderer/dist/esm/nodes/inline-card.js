import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
import { B400 } from '@atlaskit/adf-schema';
var className = createClassName('inlineCard');
export var styles = "\n." + className + " {\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  padding: 0px 0px 2px 0px;\n  background-color: #e9eaee;\n  line-height: 24px;\n}\n." + className + "-link {\n  color: " + B400 + ";\n  border: none;\n  background: transparent;\n  text-decoration: none;\n}\n";
export default function inlineCard(_a) {
    var attrs = _a.attrs;
    var scAttrs;
    var textContent;
    var href;
    if (attrs.data) {
        scAttrs = attrs;
        href = scAttrs.data.url;
        textContent = scAttrs.data.name;
    }
    else {
        scAttrs = attrs;
        href = scAttrs.url;
        textContent = scAttrs.url;
    }
    var card = createTag('span', { class: className }, "&nbsp;" + textContent + "&nbsp;");
    var fontTag = createTag('font', { color: B400, class: className + '-link' }, card);
    return href
        ? createTag('a', { href: href, class: className + '-link' }, fontTag)
        : fontTag;
}
//# sourceMappingURL=inline-card.js.map