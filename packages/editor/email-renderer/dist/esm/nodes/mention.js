import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
import { N500 } from '@atlaskit/adf-schema';
export var styles = "\n." + createClassName('mention') + " {\n  background: #EFEFF2;\n  border: 1px solid transparent;\n  border-radius: 20px;\n  color: " + N500 + ";\n  padding: 0 4px 2px 3px;\n  white-space: nowrap;\n}\n";
var resolveMention = function (node) {
    if (['all', 'here'].includes(node.attrs.id)) {
        return '@' + node.attrs.id;
    }
    return node.text || '@unknown';
};
export default function mention(node) {
    return createTag('span', { class: createClassName('mention') }, resolveMention(node));
}
//# sourceMappingURL=mention.js.map